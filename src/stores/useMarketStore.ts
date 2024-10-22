import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Market, PoolTokenOrder } from "@/types/types";

// Define the state structure
interface MarketState {
  markets: Market[];
  currentMarketPoolName?: string; //To know what the user is looking at
}

interface MarketActions {
  addMarket: (newMarket: Market) => void;
  setMarkets: (markets: Market[]) => void;
  setCurrentMarketPoolName: (poolName: string) => void;
  updateMarketAmountFilled: (poolName: string, amount: number) => void;
  addPoolTokenOrder: (poolName: string, newOrder: PoolTokenOrder) => Market;
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
      updateMarketAmountFilled: (poolName: string, amount: number) =>
        set((state: MarketState) => ({
          markets: state.markets.map((market) => {
            if (market.poolName === poolName) {
              return { ...market, amountFilled: market.amountFilled + amount };
            }
            return market;
          }),
        })),

      addPoolTokenOrder: (poolName: string, newOrder: PoolTokenOrder) =>
        set((state: MarketState) => ({
          markets: state.markets.map((market) => {
            if (market.poolName === poolName) {
              const updatedPoolTokenOrders = market.poolTokenOrders
                ? [...market.poolTokenOrders, newOrder]
                : [newOrder];
              return { ...market, poolTokenOrders: updatedPoolTokenOrders };
            }
            return market;
          }),
        })),
    }),
    { name: "MarketStore" },
  ) as any,
);
