"use client";
import IntroFlow from "./IntroFlow";
import IPFlow from "./IPFlow";
import LP1Flow from "./LP1Flow";
import LP2Flow from "./LP2Flow";
import { useAppStateStore } from "@/stores/useAppStateStore";

const MainApp = () => {
  const appState = useAppStateStore((state) => state.appState);
  const setAppState = useAppStateStore((state) => state.setAppState);
  return (
    <>
      {appState === "Intro" && <IntroFlow changeState={setAppState} />}
      {appState === "IP" && <IPFlow />}
      {appState === "LP1" && <LP1Flow />}
      {appState === "LP2" && <LP2Flow />}
    </>
  );
};

export default MainApp;
