import React from "react";
import { Card } from "../ui/card";
import { AskOrder, BidOrder } from "../types";

const isAskOrder = (order: any): order is AskOrder => order.orderType === "Ask";
const isBidOrder = (order: any): order is BidOrder => order.orderType === "Bid";

interface OrderCardProps {
  order: AskOrder | BidOrder;
  baseAsset: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, baseAsset }) => {
  if (isAskOrder(order)) {
    return (
      <div className="flex justify-end">
        <Card className="w-1/3 ">
          <div>
            Ask Order: {order.baseAmount} {baseAsset} @ {order.incentiveAmount}{" "}
            {order.incentive}
          </div>
        </Card>
      </div>
    );
  }

  if (isBidOrder(order)) {
    return (
      <div className="flex justify-start">
        <Card className="w-1/3">
          <div>
            Bid Order: {order.baseAmount} @ {order.creatorAddress}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <Card>
      <div>Unrecognized Order Type</div>
    </Card>
  );
};

export default OrderCard;
