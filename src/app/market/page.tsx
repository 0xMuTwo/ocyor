"use client";
import { Button } from "@/components/ui/button";
import { nameToSlug } from "@/lib/utils";
import MarketDialogManager from "@/components/ManageMarket/MarketDialogManager";
import PoolCard from "@/components/PoolCard";
import { useMarketStore } from "@/stores/useMarketStore";
import { useAppStateStore } from "@/stores/useAppStateStore";
import { useRouter } from "next/navigation";
import { BgColor } from "@/components/types";

const Page = () => {
  const markets = useMarketStore((state) => state.markets);
  const setAppState = useAppStateStore((state) => state.setAppState);
  const appState = useAppStateStore((state) => state.appState);
  const noMarkets = markets.length === 0;
  const router = useRouter();

  let bgColor: BgColor = BgColor.IP;
  if (appState === "LP1") {
    bgColor = BgColor.LP1;
  }
  if (appState === "LP2") {
    bgColor = BgColor.LP2;
  }

  const handleBecomeLP = () => {
    router.push("/");
    setAppState("LP1");
  };
  const handleRouterPush = (name: string) => {
    router.push(`/market/${nameToSlug(name)}`);
  };

  return (
    <div
      className={`flex ${bgColor} h-[calc(100vh-5rem)]  w-[calc(100vw-5rem)] m-auto rounded-xl flex-col justify-between`}
    >
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
                  initialAsk={initialAskOrder.baseAmount}
                  onClick={() => handleRouterPush(market.poolName)}
                />
              ) : null;
            })}
          </div>
          {appState === "IP" ? (
            <div className="flex justify-center pb-8 w-full">
              <Button onClick={handleBecomeLP}>Become LP</Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Page;
