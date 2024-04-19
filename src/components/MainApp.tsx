"use client";
import { useState } from "react";
import IntroFlow from "./IntroFlow";
import IPFlow from "./IPFlow";
import { AppState } from "./types";

const MainApp = () => {
  const [appState, setAppState] = useState<AppState>("Intro");

  return (
    <>
      {appState === "Intro" && (
        <IntroFlow
          changeState={(newState: AppState) => setAppState(newState)}
        />
      )}
      {appState === "IP" && <IPFlow />}
    </>
  );
};

export default MainApp;
