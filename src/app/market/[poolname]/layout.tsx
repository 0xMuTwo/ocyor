"use client";
import MarketTopBar from "@/components/MarketDashboard/MarketTopBar";
import { useMarketStore } from "@/stores/useMarketStore";
export default function PoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getCurrentMarket = useMarketStore((state) => state.getCurrentMarket);
  return (
    <>
      <MarketTopBar market={getCurrentMarket()} />
      <section>{children}</section>
    </>
  );
}
