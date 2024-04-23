"use client";
import MarketDialogManager from "@/components/ManageMarket/MarketDialogManager";
import PoolCard from "@/components/PoolCard";
import { useMarketStore } from "@/stores/useMarketStore";

const Market = () => {
  const markets = useMarketStore((state) => state.markets);
  const noMarkets = markets.length === 0;

  return (
    <div className="flex bg-sky-300 h-[calc(100vh-5rem)]  w-[calc(100vw-5rem)] m-auto rounded-xl flex-col justify-between">
      {noMarkets ? (
        <>
          <div className="flex flex-1 items-center justify-center w-full text-3xl">
            No Markets Found
          </div>
          <div className="flex justify-center pb-8 w-full">
            <MarketDialogManager />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-1 flex-row gap-4 items-center justify-center w-full">
            {markets.map((market, index) => {
              // Find the initial ask order
              const initialAskOrder = market.orderbook.find(
                (order) => order.orderType === "Ask" && order.isInitialAsk,
              );

              return initialAskOrder ? (
                <PoolCard
                  name={market.poolName}
                  baseAsset={market.baseAsset}
                  actionType={market.actionType}
                  isWhitelisted={market.isWhitelisted}
                  key={index}
                  initialAsk={initialAskOrder.baseAmount} // Assuming PoolCard expects this
                />
              ) : null; // or handle markets without an initial ask order differently
            })}
          </div>
          <div className="flex justify-center pb-8 w-full">
            <MarketDialogManager />
          </div>
        </>
      )}
    </div>
  );
};

export default Market;
