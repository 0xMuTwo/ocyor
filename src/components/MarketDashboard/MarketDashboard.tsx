import { useState } from "react";
import { Market } from "@/types/types";

import AskBidView from "./AskBidView";
import { ViewToggle } from "./ViewToggle";
import MarketProgressBar from "./MarketProgressBar";
import ShowInventory from "./ShowInventory";
import PoolTokens from "./PoolTokensView";

export type MarketView = "AskBid" | "PoolTokens";

// ACTUAL DASHBOARD

const MarketDashboard = ({ market }: { market: Market }) => {
  const [marketView, setMarketView] = useState<MarketView>("AskBid");

  // We need to know how many orders have been placed, and how full the initial bid is in this component
  const initialAskOrder = market.orderbook.find(
    (order) => order.orderType === "Ask" && order.isInitialAsk,
  );
  const total_amt_asked = initialAskOrder?.baseAmount ?? 0;
  let amt_filled = market.amountFilled;
  if (amt_filled > total_amt_asked) amt_filled = total_amt_asked;

  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-4 h-[90vh]">
      <div className="col-span-4 row-span-1 bg-red-100">
        <MarketProgressBar amount={amt_filled} total={total_amt_asked} />
      </div>
      <div className="col-start-4 col-end-5 row-span-4 row-start-2 bg-emerald-200 ">
        {/* Show Inventory + Pool Tokens Here */}
        <ShowInventory />
      </div>
      <div className="col-start-4 col-end-5 row-span-3 row-start-6 ">
        <ViewToggle setMarketView={setMarketView} />
      </div>
      <div className="col-span-3 row-start-2 row-span-7 bg-blue-100">
        <div>
          {marketView === "AskBid" ? <AskBidView market={market} /> : null}
          {marketView === "PoolTokens" ? <PoolTokens market={market} /> : null}
        </div>
      </div>
    </div>
  );
};
export default MarketDashboard;
