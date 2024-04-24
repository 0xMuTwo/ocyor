"use client";
import { useMarketStore } from "@/stores/useMarketStore";
import { slugToName } from "@/lib/utils";

interface PageProps {
  params: { poolname: string };
}
const Page = ({ params }: PageProps) => {
  const markets = useMarketStore((state) => state.markets);
  const market = markets.find(
    (market) => market.poolName === slugToName(params.poolname),
  );

  return (
    <>{market ? <div>{market.poolName}</div> : <div>Market not found</div>}</>
  );
};
export default Page;
