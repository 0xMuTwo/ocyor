"use client";
import { Market } from "@/types/types";
import { slugToName } from "@/lib/utils";
import { useMarketStore } from "@/stores/useMarketStore";
import MarketDashboard from "@/components/MarketDashboard/MarketDashboard";

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
