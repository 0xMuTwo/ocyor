"use client";
import { useState } from "react";
import { CreateMarketPopup } from "./CreateMarket";
import { Button } from "@/components/ui/button";
import { CreateFirstAsk } from "./CreateFirstAsk";
import ConfirmMarketCreation from "./ConfirmMarketCreation";
import { useMarketStore } from "@/stores/useMarketStore";
import { Market } from "../types";

const MarketDialogManager = () => {
  const { markets, addMarket } = useMarketStore();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [isThirdDialogOpen, setIsThirdDialogOpen] = useState(false);

  const handleFirstDialogClose = () => {
    setIsFirstDialogOpen(false);
    setTimeout(openSecondDialog, 250);
  };

  const openFirstDialog = () => {
    setIsFirstDialogOpen(true);
  };

  const openSecondDialog = () => {
    setIsSecondDialogOpen(true);
  };
  const openThirdDialog = () => {
    setIsThirdDialogOpen(true);
  };

  const handleSecondDialogClose = () => {
    setIsSecondDialogOpen(false);
    setTimeout(openThirdDialog, 250);
  };
  const handleThirdDialogClose = () => {
    setIsThirdDialogOpen(false);
    // Constructing the new market to add, based on the gathered information
    const userMarket: Market = {
      poolName: poolName,
      baseAsset: baseAsset,
      actionType: actionType,
      referralAmount: referralAmount,
      isWhitelisted: isWhitelisted,
      orderbook: [], // or you might leave it undefined or not include it at all if that suits your logic
    };
    addMarket(userMarket);
    console.log("Market created:", userMarket);
  };

  //STATES
  const [poolName, setPoolName] = useState("Proj Liquidity Round 1");
  const [baseAsset, setBaseAsset] = useState("ETH");
  const [actionType, setActionType] = useState("Lockup");
  const [referralAmount, setReferralAmount] = useState<number>(10);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const [baseAssetAmt, setBaseAssetAmt] = useState<number>(0);
  const [incentive, setIncentive] = useState<string>("Blast Gold");

  return (
    <div>
      <Button variant="outline" onClick={openFirstDialog}>
        Create A Market
      </Button>
      {isFirstDialogOpen && (
        <CreateMarketPopup
          isOpen={isFirstDialogOpen}
          onClose={handleFirstDialogClose}
          setPoolName={setPoolName}
          setBaseAsset={setBaseAsset}
          setActionType={setActionType}
          setReferralAmount={setReferralAmount}
          setIsWhitelisted={setIsWhitelisted}
          isWhitelisted={isWhitelisted}
        />
      )}
      {isSecondDialogOpen && (
        <CreateFirstAsk
          isOpen={isSecondDialogOpen}
          baseAsset="ETH"
          onClose={handleSecondDialogClose}
          setBaseAssetAmt={setBaseAssetAmt}
          setIncentive={setIncentive}
        />
      )}
      {isThirdDialogOpen && (
        <ConfirmMarketCreation
          isOpen={isThirdDialogOpen}
          onClose={handleThirdDialogClose}
          poolName={poolName}
          baseAsset={baseAsset}
          actionType={actionType}
          baseAssetAmt={baseAssetAmt}
          incentive={incentive}
          isWhitelisted={isWhitelisted}
          referralAmount={referralAmount}
        />
      )}
    </div>
  );
};

export default MarketDialogManager;
