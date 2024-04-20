"use client";
import { useState } from "react";
import { CreateMarketPopup } from "./CreateMarket";
import { Button } from "@/components/ui/button";
import { CreateFirstAsk } from "./CreateFirstAsk";
import ConfirmMarketCreation from "./ConfirmMarketCreation";

const MarketDialogManager = () => {
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
    console.log("Third closed");
  };

  //STATES
  const [poolName, setPoolName] = useState("Proj Liquidity Round 1");
  const [baseAsset, setBaseAsset] = useState("");
  const [actionType, setActionType] = useState("");
  const [referralAmount, setReferralAmount] = useState<number>(10);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const [baseAssetAmt, setBaseAssetAmt] = useState<number>(0);
  const [incentive, setIncentive] = useState<string>("");

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
