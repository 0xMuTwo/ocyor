import { Market } from "@/components/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Define the state structure
interface MarketState {
  markets: Market[];
}

interface MarketActions {
  addMarket: (newMarket: Market) => void;
  setMarkets: (markets: Market[]) => void;
}

interface MarketStore extends MarketState, MarketActions {}

export const useMarketStore = create<MarketStore>(
  devtools(
    (set) => ({
      markets: [],
      addMarket: (newMarket: Market) =>
        set((state: MarketState) => ({
          markets: [...state.markets, newMarket],
        })),
      setMarkets: (markets: Market[]) => set(() => ({ markets })),
    }),
    { name: "MarketStore" },
  ) as any,
);
