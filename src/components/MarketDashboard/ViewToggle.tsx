import { Card } from "../ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MarketView } from "./MarketDashboard";

export interface ViewToggleProps {
  setMarketView: (view: MarketView) => void;
}
export const ViewToggle = ({ setMarketView }: ViewToggleProps) => {
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
