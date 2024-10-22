export type AppState = "Intro" | "IP" | "LP1" | "LP2";
export type IntroState = "Card" | "Market";
export type Market = {
  poolName: string;
  creatorAddress: string;
  baseAsset: string;
  actionType: string;
  referralAmount: number;
  isWhitelisted: boolean;
  amountFilled: number;
  orderbook: Order[];
  poolTokenOrders?: PoolTokenOrder[];
};

export type PoolTokenOrder = {
  poolTokenAmount: number;
  askingPrice: number;
  orderCreator: string;
};

export type Order = AskOrder | BidOrder;

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
  incentive: string;
  incentiveAmount: number;
};

export enum BgColor {
  IP = "bg-indigo-300",
  LP1 = "bg-rose-300",
  LP2 = "bg-sky-300",
}

export type User = {
  username: string;
  poolTokens: number;
  incentives: number;
};
