"use client";
import MarketDashboard from "@/components/MarketDashboard/MarketDashboard";
import { useMarketStore } from "@/stores/useMarketStore";
import { Market } from "@/components/types";
import { slugToName } from "@/lib/utils";

interface PageProps {
  params: { poolname: string };
}
const Page = ({ params }: PageProps) => {
  const markets = useMarketStore((state) => state.markets);
  const market: Market | undefined = markets.find(
    (market) => market.poolName === slugToName(params.poolname),
  );

  return (
    <>
      {market ? (
        <div>
          <MarketDashboard market={market} />
        </div>
      ) : (
        <div>Market not found</div>
      )}
    </>
  );
};
export default Page;
