import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BuyPoolTokensProps {
  isOpen: boolean;
  price?: number;
  maxTokenAmount?: number;
  onClose: (
    action: "cancel" | "place",
    data?: {
      tokenAmount: number;
    },
  ) => void;
}

const BuyPoolTokensPopup: React.FC<BuyPoolTokensProps> = ({
  isOpen,
  onClose,
  price,
  maxTokenAmount,
}) => {
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  if (!isOpen) return null;
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buy Pool Tokens</DialogTitle>
          <DialogDescription>Take a position</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Token Amount" className="text-right">
              Token Amount:
            </Label>
            <Input
              id="Pool Token Amount"
              type="number"
              defaultValue={0}
              onChange={(e) => setTokenAmount(Number(e.target.value))}
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Asking Price" className="text-right">
              Price
            </Label>
            <Input
              disabled
              id="Asking Price"
              type="number"
              defaultValue={price}
              className="col-span-2"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            onClick={() => onClose("cancel")}
          >
            Cancel
          </Button>
          <Button
            disabled={maxTokenAmount ? tokenAmount > maxTokenAmount : false}
            type="button"
            variant="default"
            onClick={() => onClose("place", { tokenAmount })}
          >
            Place Bid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default BuyPoolTokensPopup;
