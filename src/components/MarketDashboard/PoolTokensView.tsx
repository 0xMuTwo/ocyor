import { Market } from "@/types/types";
import { Toaster } from "sonner";
import CreateOrderCard from "./CreateOrderCard";
import { useMarketStore } from "@/stores/useMarketStore";

const PoolTokens = ({ market }: { market: Market }) => {
  const poolTokenOrders =
    useMarketStore((state) => state.getCurrentMarket())?.poolTokenOrders || [];
  return (
    <>
      {poolTokenOrders.map((order, index) => (
        <CreateOrderCard
          key={index}
          side={"Pool-Ask"}
          market={market}
          orderDetails={order}
        />
      ))}
      <CreateOrderCard side={"Pool-Bid"} market={market} />
      <Toaster />
    </>
  );
};
export default PoolTokens;
