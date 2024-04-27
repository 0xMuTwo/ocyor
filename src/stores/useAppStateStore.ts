import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AppState } from "@/types/types";

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
