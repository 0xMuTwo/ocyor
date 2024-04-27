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

interface AskBidPopupCardProps {
  isOpen: boolean;
  onClose: (
    action: "cancel" | "place",
    data?: {
      incentivesGained: number;
      poolTokens: number;
      depositAmount: number;
    },
  ) => void;
}

const AskBidPopupCard: React.FC<AskBidPopupCardProps> = ({
  isOpen,
  onClose,
}) => {
  const [incentivesGained, setIncentivesGained] = useState<number>(0);
  const [poolTokens, setPoolTokens] = useState<number>(0);
  const [depositAmount, setDepositAmount] = useState<number>(0);

  useEffect(() => {
    const newIncentivesGained = depositAmount;
    const newPoolTokens = depositAmount * 10;
    setIncentivesGained(newIncentivesGained);
    setPoolTokens(newPoolTokens);
  }, [depositAmount]);

  if (!isOpen) return null;
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fill Ask</DialogTitle>
          <DialogDescription>Deploy Capital, Get Pool Tokens</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Deposit Amount" className="text-right">
              Deposit Amount:
            </Label>
            <Input
              id="Deposit Amount"
              type="number"
              defaultValue={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              className="col-span-2"
            />
            <Label className="col-span-1">ETH</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Incentives Gained: " className="text-right">
              Incentives Gained
            </Label>
            <Input
              disabled
              id="Incentives Gained`"
              type="number"
              value={incentivesGained}
              className="col-span-2"
            />
            <Label className="col-span-1">Blast Gold</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Pool Tokens: " className="text-right">
              Pool Tokens Gained
            </Label>
            <Input
              disabled
              id="Pool Tokens"
              type="number"
              value={poolTokens}
              className="col-span-2"
            />
            <Label className="col-span-1"></Label>
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
            onClick={() =>
              onClose("place", { incentivesGained, poolTokens, depositAmount })
            }
          >
            Place Bid
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AskBidPopupCard;
