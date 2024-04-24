"use client";
import { useAppStateStore } from "@/stores/useAppStateStore";
import { AppState } from "./types";

const Navbar = () => {
  const appState = useAppStateStore((state) => state.appState);

  const translateAppState = (appState: AppState) => {
    if (appState === "Intro" || appState === "IP") return "A Builder";
    if (appState === "LP1") return "A Liquidity Provider";
    if (appState === "LP2") return "A Secondary Buyer";
    return "Builder"; //Default Case
  };

  return (
    <nav className="sticky flex justify-between items-center py-2 px-4 md:px-8 lg:px-16 top-0 h-auto text-lg md:text-xl w-full lg:text-2xl">
      <div>Royco</div>
      <div>You are: {translateAppState(appState)}</div>
    </nav>
  );
};

export default Navbar;
