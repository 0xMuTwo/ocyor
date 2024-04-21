export type AppState = "Intro" | "IP" | "LP1" | "LP2";
export type IPState = "Card" | "Market";
export type Market = {
  poolName: string;
  baseAsset: string;
  actionType: string;
  referralAmount: number;
  isWhitelisted: boolean;
  orderbook?: [];
};
