import { useState } from "react";
import { AskOrder, BidOrder, Market, Order } from "../types";

import AskBidView from "./AskBidView";
import { ViewToggle } from "./ViewToggle";
import MarketProgressBar from "./MarketProgressBar";

export type MarketView = "AskBid" | "PoolTokens";

// ACTUAL DASHBOARD

const MarketDashboard = ({ market }: { market: Market }) => {
  const [marketView, setMarketView] = useState<MarketView>("AskBid");

  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-4 h-[90vh]">
      <div className="col-span-4 row-span-1 bg-red-100">
        <MarketProgressBar amount={30} total={40} />
      </div>
      <div className="col-start-4 col-end-5 row-span-3 row-start-6 ">
        <ViewToggle setMarketView={setMarketView} />
      </div>
      <div className="col-span-3 row-start-2 row-span-7 bg-blue-100">
        <div>
          {marketView === "AskBid" ? <AskBidView market={market} /> : null}
          {marketView === "PoolTokens" ? <div>Pool Tokens</div> : null}
        </div>
      </div>
    </div>
  );
};
export default MarketDashboard;
