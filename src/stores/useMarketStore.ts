import { Market } from "@/components/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Define the state structure
interface MarketState {
  markets: Market[];
  currentMarketPoolName?: string; //To know what the user is looking at
}

interface MarketActions {
  addMarket: (newMarket: Market) => void;
  setMarkets: (markets: Market[]) => void;
  setCurrentMarketPoolName: (poolName: string) => void;
}

interface MarketSelectors {
  getCurrentMarket: () => Market | undefined;
}

interface MarketStore extends MarketState, MarketActions, MarketSelectors {}

export const useMarketStore = create<MarketStore>(
  devtools(
    (set) => ({
      markets: [],
      addMarket: (newMarket: Market) =>
        set((state: MarketState) => ({
          markets: [...state.markets, newMarket],
        })),
      setMarkets: (markets: Market[]) => set(() => ({ markets })),
      setCurrentMarketPoolName: (poolName: string) =>
        set(() => ({ currentMarketPoolName: poolName })),
      getCurrentMarket: () => {
        const currentState = useMarketStore.getState();
        return currentState.markets.find(
          (market) => currentState.currentMarketPoolName === market.poolName,
        );
      },
    }),
    { name: "MarketStore" },
  ) as any,
);
