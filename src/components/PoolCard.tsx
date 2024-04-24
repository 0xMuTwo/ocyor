import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

interface PoolCardProps {
  name: string;
  baseAsset: string;
  actionType: string;
  isWhitelisted: boolean;
  initialAsk: number;
  askFilled?: number;
  onClick: () => void;
}

const PoolCard = ({
  name,
  isWhitelisted,
  baseAsset,
  actionType,
  initialAsk = 1000,
  askFilled = 0,
  onClick,
}: PoolCardProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>Pool Type: {baseAsset}</p>

            <p>
              Action Type:{" "}
              <span className="font-bold text-lg text-yellow-600">
                {actionType}
              </span>
            </p>
            <p>
              Is Whitelisted:{" "}
              <span
                className={`${
                  isWhitelisted ? "text-red-500" : "text-green-500"
                } font-bold text-lg `}
              >
                {isWhitelisted ? "YES" : "NO"}
              </span>
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <p>
            {askFilled} / {initialAsk}
            {"   "}
            {baseAsset}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PoolCard;
