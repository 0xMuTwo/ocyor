import { Market } from "../types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

type CreateOrderCardProps = {
  side: "Bid" | "Ask";
  market: Market;
};

const handleCreateBid = (market: Market) => {
  console.log(`Adding bid to Market: ${market.poolName}`);
};
const CreateOrderCard: React.FC<CreateOrderCardProps> = ({
  side: side,
  market: market,
}) => {
  return (
    <div className="flex justify-start">
      <Card className="w-1/3 px-5 ">
        <div className="flex items-center justify-between gap-4">
          <div className="">Bid Order:</div>
          <div className="my-2">
            <Button
              className=" bg-red-700"
              onClick={() => handleCreateBid(market)}
            >
              Create Bid
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreateOrderCard;
