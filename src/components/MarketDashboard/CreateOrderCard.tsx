import { toast } from "sonner";
import { AppState, Market, PoolTokenOrder } from "@/types/types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useAppStateStore } from "@/stores/useAppStateStore";
import { useState } from "react";
import SellPoolTokensPopup from "./SellPoolTokensPopup";
import { useMarketStore } from "@/stores/useMarketStore";
import { useUserStore } from "@/stores/useUserStore";
import BuyPoolTokensPopup from "./BuyPoolTokensPopup";

type CreateOrderCardProps = {
  side: "Bid" | "Ask" | "Pool-Bid" | "Pool-Ask";
  market: Market;
  orderDetails?: PoolTokenOrder;
};

const handleCreateBid = (market: Market) => {
  console.log(`Mocking bid on: ${market.poolName}`);
  toast("Builder not collecting bids at this time", {
    description: "Click to alert builder you tried to place a bid",
    action: {
      label: "Alert",
      onClick: () => console.log("Alerted"),
    },
  });
};
const handleCreatePoolBid = (market: Market) => {
  console.log(`Adding bid to Market: ${market.poolName}`);
  toast("Builder not collecting bids at this time", {
    description: "Click to alert builder you tried to place a bid",
    action: {
      label: "Alert",
      onClick: () => console.log("Alerted"),
    },
  });
};

const CreateOrderCard: React.FC<CreateOrderCardProps> = ({
  side: side,
  market: market,
  orderDetails,
}) => {
  const [isSellDialogOpen, setIsSellDialogOpen] = useState<boolean>(false);
  const [isBuyDialogOpen, setIsBuyDialogOpen] = useState<boolean>(false);
  const appState = useAppStateStore((state) => state.appState);
  const translateAppState = (appState: AppState): string => {
    console.log("Reading app state...", appState);
    switch (appState) {
      case "LP1":
        return "LP1";
      case "LP2":
        return "LP2";
      default:
        return "Builder";
    }
  };
  const username = translateAppState(appState);
  const handleSellPoolTokens = () => {
    setIsSellDialogOpen(true);
  };
  const handleBuyPoolTokens = () => {
    setIsBuyDialogOpen(true);
  };

  const handleBuyClose = (
    action: "cancel" | "place",
    data?: {
      tokenAmount: number;
    },
  ) => {
    if (action === "place" && data) {
      console.log("Using data:", data);
    } else {
      console.log("not using data");
    }
    setIsBuyDialogOpen(false);
  };
  const handleSellClose = (
    action: "cancel" | "place",
    data?: {
      poolTokens: number;
      askingPrice: number;
    },
  ) => {
    if (action === "place" && data) {
      // When a user places an order.
      // Create a new order in the store, so someone can fill it.
      const newPoolTokenOrder: PoolTokenOrder = {
        askingPrice: data.askingPrice,
        orderCreator: username,
        poolTokenAmount: data.poolTokens,
      };
      useMarketStore
        .getState()
        .addPoolTokenOrder(market.poolName, newPoolTokenOrder);

      // Remove the amount from the creator's balance.
      useUserStore.getState().addPoolTokens(username, -data.poolTokens);
      console.log("Using data:", data);
      console.log("Market Store: ", useMarketStore.getState());
    } else {
      console.log("not using data");
    }
    setIsSellDialogOpen(false);
  };

  return (
    // These are only bids, no ask support.
    // Implement "if" on the side prop to get working
    <>
      {side === "Bid" ? (
        <div className="flex justify-start">
          <Card className="w-1/3 px-5 ">
            <div className="flex items-center justify-between gap-4">
              <div className="">Bid Order:</div>
              <div className="my-2">
                <Button
                  className=" bg-red-700"
                  onClick={() => handleCreateBid(market)}
                >
                  Create Bid
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ) : null}
      {side === "Pool-Bid" ? (
        <div className="flex justify-start">
          <Card className="w-1/3 px-5 ">
            <div className="flex items-center justify-between gap-4">
              <div className="">Sell Pool Tokens:</div>
              <div className="my-2">
                <Button
                  className=" bg-red-700"
                  onClick={() => handleSellPoolTokens()}
                >
                  Sell Tokens
                </Button>
                {isSellDialogOpen && (
                  <SellPoolTokensPopup
                    isOpen={isSellDialogOpen}
                    onClose={handleSellClose}
                  />
                )}
              </div>
            </div>
          </Card>
        </div>
      ) : null}
      {side === "Pool-Ask" ? (
        <div className="flex justify-end">
          <Card className="w-1/3 px-5 ">
            <div className="flex items-center justify-between gap-4">
              <div className="my-2">
                <Button
                  className=" bg-emerald-700"
                  onClick={() => handleBuyPoolTokens()}
                >
                  Buy Tokens
                </Button>
                {isBuyDialogOpen && (
                  <BuyPoolTokensPopup
                    isOpen={isBuyDialogOpen}
                    onClose={handleBuyClose}
                    price={orderDetails?.askingPrice}
                    maxTokenAmount={orderDetails?.poolTokenAmount}
                  />
                )}
              </div>
              <div>
                <div className="">
                  Asking Price: {orderDetails?.askingPrice}
                </div>
                <div className="">
                  Token Amount: {orderDetails?.poolTokenAmount}
                </div>
                <div className="">Seller: {orderDetails?.orderCreator}</div>
              </div>
            </div>
          </Card>
        </div>
      ) : null}
    </>
  );
};

export default CreateOrderCard;
