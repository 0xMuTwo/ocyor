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

interface SellPoolTokensProps {
  isOpen: boolean;
  onClose: (
    action: "cancel" | "place",
    data?: {
      poolTokens: number;
      askingPrice: number;
    },
  ) => void;
}

const SellPoolTokensPopup: React.FC<SellPoolTokensProps> = ({
  isOpen,
  onClose,
}) => {
  const [poolTokens, setPoolTokens] = useState<number>(0);
  const [askingPrice, setAskingPrice] = useState<number>(0);
  if (!isOpen) return null;
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sell Pool Tokens</DialogTitle>
          <DialogDescription>Leave your position early</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Pool Token Amount" className="text-right">
              Pool Token Amount:
            </Label>
            <Input
              id="Pool Token Amount"
              type="number"
              defaultValue={poolTokens}
              onChange={(e) => setPoolTokens(Number(e.target.value))}
              className="col-span-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Asking Price" className="text-right">
              Asking Price
            </Label>
            <Input
              id="Asking Price"
              type="number"
              defaultValue={askingPrice}
              onChange={(e) => setAskingPrice(Number(e.target.value))}
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
            type="button"
            variant="default"
            onClick={() => onClose("place", { poolTokens, askingPrice })}
          >
            Place Bid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default SellPoolTokensPopup;
