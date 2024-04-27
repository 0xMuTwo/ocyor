import { Market } from "@/types/types";
import OrderCard from "./OrderCard";
import CreateOrderCard from "./CreateOrderCard";
import { Toaster } from "../ui/sonner";

const AskBidView = ({ market }: { market: Market }) => {
  const initialAskOrder = market.orderbook.find(
    (order) => order.orderType === "Ask" && order.isInitialAsk,
  );

  return (
    <>
      {initialAskOrder && (
        <OrderCard
          order={initialAskOrder}
          baseAsset={market.baseAsset}
          market={market}
        />
      )}
      {/* We need a blank place for people to place the ask orders */}
      <CreateOrderCard side={"Bid"} market={market} />
      <Toaster />
    </>
  );
};
export default AskBidView;
