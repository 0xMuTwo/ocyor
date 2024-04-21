"use client";
import MarketDialogManager from "@/components/ManageMarket/MarketDialogManager";
import { useMarketStore } from "@/stores/useMarketStore";

const Market = () => {
  const markets = useMarketStore((state) => state.markets); // Access markets from the store
  const noMarkets = markets.length === 0;

  return (
    <div className="bg-slate-300 h-[calc(100vh-5rem)] flex w-[calc(100vw-5rem)] m-auto rounded-xl flex-col justify-between">
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
        <div className="flex flex-col items-center justify-center w-full">
          {markets.map((market, index) => (
            <div key={index} className="text-xl">
              {market.poolName} - {market.baseAsset}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Market;
