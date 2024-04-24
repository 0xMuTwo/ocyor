"use client";
import { useMarketStore } from "@/stores/useMarketStore";

interface PageProps {
  params: { poolname: string };
}
const Page = ({ params }: PageProps) => {
  const markets = useMarketStore((state) => state.markets);
  const market = markets.find((market) => market.poolName === params.poolname);

  return (
    <>{market ? <div>{market.poolName}</div> : <div>Market not found</div>}</>
  );
};
export default Page;
