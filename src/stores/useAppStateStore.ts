import { create } from "zustand";
import { AppState } from "@/components/types";
import { devtools } from "zustand/middleware";

interface AppStateStore {
  appState: AppState;
  setAppState: (newState: AppState) => void;
}

export const useAppStateStore = create<AppStateStore>(
  devtools((set) => ({
    appState: "Intro",
    setAppState: (newState: AppState) => set({ appState: newState }),
  })) as any,
);
