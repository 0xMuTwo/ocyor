import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "@/types/types";

interface UserState {
  users: User[];
}

interface UserActions {
  addUser: (newUser: User) => void;
  //Subtraction can occur via negative negative numbers as input
  addPoolTokens: (username: string, poolTokens: number) => void;
  addIncentives: (username: string, incentives: number) => void;
}

interface UserStore extends UserState, UserActions {}

export const useUserStore = create<UserStore>(
  devtools(
    (set) => ({
      // Initial state setup with pre-populated users
      users: [
        { username: "Builder", poolTokens: 100, incentives: 10 },
        { username: "LP1", poolTokens: 200, incentives: 20 },
        { username: "LP2", poolTokens: 300, incentives: 30 },
      ],

      addUser: (newUser: User) =>
        set((state: UserState) => ({
          users: [...state.users, newUser],
        })),

      addPoolTokens: (username: string, poolTokens: number) =>
        set((state: UserState) => ({
          users: state.users.map((user) =>
            user.username === username
              ? { ...user, poolTokens: user.poolTokens + poolTokens }
              : user,
          ),
        })),

      addIncentives: (username: string, incentives: number) =>
        set((state: UserState) => ({
          users: state.users.map((user) =>
            user.username === username
              ? { ...user, incentives: user.incentives + incentives }
              : user,
          ),
        })),
    }),

    { name: "UserStore" }, // Optional: DevTools option
  ) as any,
);
