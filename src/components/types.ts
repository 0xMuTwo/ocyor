export type AppState = "Intro" | "IP" | "LP1" | "LP2";
export type IPState = "Card" | "Market";
export type LP1State = "Card" | "Market";
export type Market = {
  poolName: string;
  creatorAddress: string;
  baseAsset: string;
  actionType: string;
  referralAmount: number;
  isWhitelisted: boolean;
  orderbook: Order[];
};

export type AskOrder = {
  orderType: "Ask";
  creatorAddress: string;
  isInitialAsk: boolean;
  baseAmount: number;
  incentive: string;
  incentiveAmount: number;
};

export type BidOrder = {
  orderType: "Bid";
  creatorAddress: string;
  baseAmount: number;
};

export type Order = AskOrder | BidOrder;

export enum BgColor {
  IP = "bg-indigo-300",
  LP1 = "bg-rose-300",
  LP2 = "bg-sky-300",
}
