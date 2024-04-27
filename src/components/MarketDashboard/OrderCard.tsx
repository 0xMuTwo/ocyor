import React, { useState } from "react";
import { AppState, AskOrder, BidOrder, Market } from "@/types/types";
import { useMarketStore } from "@/stores/useMarketStore";
import { useUserStore } from "@/stores/useUserStore";
import { useAppStateStore } from "@/stores/useAppStateStore";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import AskBidPopupCard from "./AskBidPopupCard";

const isAskOrder = (order: any): order is AskOrder => order.orderType === "Ask";
const isBidOrder = (order: any): order is BidOrder => order.orderType === "Bid";

interface OrderCardProps {
  order: AskOrder | BidOrder;
  baseAsset: string;
  market: Market;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, baseAsset, market }) => {
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

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [transactionData, setTransactionData] = useState<{
    incentivesGained: number;
    poolTokens: number;
    depositAmount: number;
  } | null>(null);

  const handleFillAsk = () => {
    setIsDialogOpen(true);
  };
  const handleClose = (
    action: "cancel" | "place",
    data?: {
      incentivesGained: number;
      poolTokens: number;
      depositAmount: number;
    },
  ) => {
    if (action === "place" && data) {
      console.log("Using data:", data);
      const poolName = market.poolName;
      useMarketStore
        .getState()
        .updateMarketAmountFilled(poolName, data.depositAmount);

      const username = translateAppState(appState);
      useUserStore.getState().addPoolTokens(username, data.poolTokens);
      useUserStore.getState().addIncentives(username, data.incentivesGained);
      console.log("Userstore: ", useUserStore.getState());
      setTransactionData(data);
    } else {
      console.log("Not using data");
    }
    setIsDialogOpen(false);
  };

  if (isAskOrder(order)) {
    return (
      <div className="flex justify-end">
        <Card className="w-1/3 px-5 ">
          <div className="flex items-center justify-between gap-4">
            <div className="my-2">
              <Button
                className=" bg-emerald-500"
                onClick={() => handleFillAsk()}
              >
                Fill Ask
              </Button>
              {isDialogOpen && (
                <AskBidPopupCard isOpen={isDialogOpen} onClose={handleClose} />
              )}
            </div>
            <div className="">
              Ask Order: {order.baseAmount} {baseAsset} @{" "}
              {order.incentiveAmount} {order.incentive}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (isBidOrder(order)) {
    return (
      <div className="flex justify-start">
        <Card className="w-1/3">
          <div>
            Bid Order: {order.baseAmount} @ {order.creatorAddress}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <Card>
      <div>Unrecognized Order Type</div>
    </Card>
  );
};

export default OrderCard;
