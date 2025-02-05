"use client";
import { Market } from "@/types/types";

const MarketTopBar = ({ market }: { market: Market | undefined }) => {
  return market ? (
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-16 top-0 h-auto text-lg md:text-xl w-full lg:text-2xl">
      <div>{market.baseAsset}</div>
      <div>{market.poolName}</div>
      <div>Pool Created by: {market.creatorAddress}</div>
    </nav>
  ) : null;
};

export default MarketTopBar;
