import { useState } from "react";
import { AskOrder, BidOrder, Market, Order } from "../types";
import { Card } from "../ui/card";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import OrderCard from "./OrderCard";

type MarketView = "AskBid" | "PoolTokens";

interface ViewToggleProps {
  setMarketView: (view: MarketView) => void;
}

const ViewToggle = ({ setMarketView }: ViewToggleProps) => {
  return (
    <Card className="flex w-full h-full">
      <RadioGroup defaultValue="ask-bid">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="ask-bid"
            id="ask-bid"
            onClick={() => setMarketView("AskBid")}
          />
          <Label htmlFor="ask-bid">Bids/Asks</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="pool-tokens"
            id="pool-tokens"
            onClick={() => setMarketView("PoolTokens")}
          />
          <Label htmlFor="pool-tokens">Pool Tokens</Label>
        </div>
      </RadioGroup>
    </Card>
  );
};

// ACTUAL DASHBOARD

const MarketDashboard = ({ market }: { market: Market }) => {
  const [marketView, setMarketView] = useState<MarketView>("AskBid");
  const initialAskOrder = market.orderbook.find(
    (order) => order.orderType === "Ask" && order.isInitialAsk,
  );
  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-4 h-[90vh]">
      <div className="col-span-4 row-span-1 bg-red-100">Progress Bar!</div>
      <div className="col-start-4 col-end-5 row-span-3 row-start-6 ">
        <ViewToggle setMarketView={setMarketView} />
      </div>
      <div className="col-span-3 row-start-2 row-span-7 bg-blue-100">
        <div>
          {marketView === "AskBid"
            ? initialAskOrder && (
                <OrderCard
                  order={initialAskOrder}
                  baseAsset={market.baseAsset}
                />
              )
            : null}
          {marketView === "PoolTokens" ? <div>Pool Tokens</div> : null}
        </div>
      </div>
    </div>
  );
};
export default MarketDashboard;
