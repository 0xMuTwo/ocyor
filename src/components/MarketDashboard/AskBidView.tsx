import { Market } from "../types";
import OrderCard from "./OrderCard";
import CreateOrderCard from "./CreateOrderCard";

const AskBidView = ({ market }: { market: Market }) => {
  const initialAskOrder = market.orderbook.find(
    (order) => order.orderType === "Ask" && order.isInitialAsk,
  );

  return (
    <>
      {initialAskOrder && (
        <OrderCard order={initialAskOrder} baseAsset={market.baseAsset} />
      )}
      {/* We need a blank place for people to place the ask orders */}
      <CreateOrderCard side={"Bid"} market={market} />
    </>
  );
};
export default AskBidView;
