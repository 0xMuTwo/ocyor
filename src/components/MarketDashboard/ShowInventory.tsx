"use client";
import { useAppStateStore } from "@/stores/useAppStateStore";
import { useUserStore } from "@/stores/useUserStore";
import { AppState } from "@/types/types";

const ShowInventory = () => {
  const translateAppState = (appState: AppState): string => {
    console.log("Reading app state...", appState);
    switch (appState) {
      case "LP1":
        return "LP1";
      case "LP2":
        return "LP2";
      default:
        return "Builder";
    }
  };
  const appState = useAppStateStore((state) => state.appState);
  const userState = translateAppState(appState);
  const userDetails = useUserStore((state) =>
    state.users.find((user) => user.username === userState),
  );

  return (
    <div>
      <div>User: {userDetails?.username}</div>

      <div>
        {" "}
        ETH, Dai, USDC: <span className="text-2xl"> &#8734;</span>
      </div>
      <div>Incentives: {userDetails?.incentives}</div>
      <div>Pool Tokens: {userDetails?.poolTokens}</div>
    </div>
  );
};
export default ShowInventory;
