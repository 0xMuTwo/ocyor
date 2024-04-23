"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface createFirstAskProps {
  onClose: () => void;
  isOpen: boolean;
  baseAsset: string;
  setBaseAssetAmt: (amount: number) => void;
  setIncentiveAmt: (amount: number) => void;
  setIncentive: (incentive: string) => void;
}

export function CreateFirstAsk({
  baseAsset,
  isOpen,
  onClose,
  setBaseAssetAmt,
  setIncentive,
  setIncentiveAmt,
}: createFirstAskProps) {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Create Market</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create First Ask</DialogTitle>
          <DialogDescription>Get the Orderbook started</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Base Asset" className="text-right">
              Asking for:
            </Label>
            <Input
              id="Base Asset"
              type="number"
              defaultValue="10"
              className="col-span-2"
              onChange={(e) => setBaseAssetAmt(+e.target.value)}
            />
            <Label className="col-span-1">{baseAsset}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Incentive
            </Label>
            <Input
              id="name"
              defaultValue="Blast Gold"
              className="col-span-3"
              onChange={(e) => setIncentive(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Base Asset" className="text-right">
              Amount of Incentive
            </Label>
            <Input
              id="Base Asset"
              type="number"
              defaultValue="10"
              className="col-span-3"
              onChange={(e) => setIncentiveAmt(+e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={onClose}>
              Review
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
