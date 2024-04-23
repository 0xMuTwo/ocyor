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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";

interface createFirstAskProps {
  onClose: () => void;
  isOpen: boolean;
  poolName: string;
  baseAsset: string;
  referralAmount: number;
  isWhitelisted: boolean;
  actionType: string;
  baseAssetAmt: number;
  incentive: string;
}

const ConfirmMarketCreation = ({
  isOpen,
  onClose,
  poolName,
  baseAsset,
  referralAmount,
  isWhitelisted,
  actionType,
  baseAssetAmt,
  incentive,
}: createFirstAskProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Create Market</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Review Deployment</DialogTitle>
          <DialogDescription>
            Check your settings before deploying your Market
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Pool Name
            </Label>
            <Input
              id="name"
              defaultValue={poolName}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="baseAsset">Base Asset</Label>
            <Select disabled>
              <SelectTrigger id="baseAsset" className="col-span-3" disabled>
                <SelectValue placeholder={baseAsset} />
              </SelectTrigger>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="referralAmt" className="text-right">
              Referral Amount (%)
            </Label>
            <Input
              disabled
              id="referralAmt"
              type="number"
              defaultValue={referralAmount}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="whitelist" className="col-span-1 text-right">
              Whitelist
            </Label>
            <div className="col-span-3 flex items-center space-x-2">
              <Switch disabled id="whitelist" checked={isWhitelisted} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4  ">
            <Label htmlFor="actionType">Action Type</Label>
            <Select disabled>
              <SelectTrigger id="actionType" className="col-span-3">
                <SelectValue placeholder={actionType} />
              </SelectTrigger>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Incentive
            </Label>
            <Input
              disabled
              id="name"
              defaultValue={incentive}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Base Asset" className="text-right">
              Amount of Incentive
            </Label>
            <Input
              disabled
              id="Base Asset"
              type="number"
              defaultValue={baseAssetAmt}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={onClose}>
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmMarketCreation;
