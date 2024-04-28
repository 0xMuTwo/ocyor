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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "../ui/switch";
import { useState } from "react";

interface createMarketProps {
  onClose: () => void;
  isOpen: boolean;
  setPoolName: (name: string) => void;
  setBaseAsset: (asset: string) => void;
  setActionType: (type: string) => void;
  setReferralAmount: (amount: number) => void;
  setIsWhitelisted: (isWhitelisted: boolean) => void;
  isWhitelisted: boolean;
}

export function CreateMarketPopup({
  onClose,
  isOpen,
  setPoolName,
  setBaseAsset,
  setActionType,
  setReferralAmount,
  setIsWhitelisted,
  isWhitelisted,
}: createMarketProps) {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Create Market</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Market</DialogTitle>
          <DialogDescription>Enter market parameters here.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Pool Name
            </Label>
            <Input
              id="name"
              defaultValue="Proj Liquidity Round 1"
              className="col-span-3"
              onChange={(e) => setPoolName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4  ">
            <Label htmlFor="baseAsset">Base Asset</Label>
            <Select onValueChange={(value) => setBaseAsset(value)}>
              <SelectTrigger id="baseAsset" className="col-span-3">
                <SelectValue placeholder="Select Asset" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="ETH">ETH</SelectItem>
                <SelectItem disabled value="USDC">
                  USDC
                </SelectItem>
                <SelectItem disabled value="DAI">
                  DAI
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="referralAmt" className="text-right">
              Referral Amount (%)
            </Label>
            <Input
              id="referralAmt"
              type="number"
              defaultValue="10"
              className="col-span-3"
              onChange={(e) => setReferralAmount(+e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="whitelist" className="col-span-1 text-right">
              Whitelist
            </Label>
            <div className="col-span-3 flex items-center space-x-2">
              <Switch
                id="whitelist"
                checked={isWhitelisted}
                onCheckedChange={setIsWhitelisted}
              />
            </div>
          </div>{" "}
          <div className="grid grid-cols-4 items-center gap-4  ">
            <Label htmlFor="actionType">Action Type</Label>
            <Select onValueChange={(value) => setActionType(value)}>
              <SelectTrigger id="actionType" className="col-span-3">
                <SelectValue placeholder="Select Action" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Escrow" disabled>
                  Escrow
                </SelectItem>
                <SelectItem value="Lockup">Lockup</SelectItem>
                <SelectItem value="Custom" disabled>
                  Custom
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={onClose}>
              Add First Ask
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
