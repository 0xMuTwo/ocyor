import { Market } from "../types";

const MarketDashboard = ({ market }: { market: Market }) => {
  return (
    <>
      <div>THe market dashboard!!</div>
      {market.actionType}
      {market.baseAsset}
      {market.poolName}
      {market.creatorAddress}
      {market.referralAmount}
    </>
  );
};
export default MarketDashboard;
