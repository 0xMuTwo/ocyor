"use client";
import { useState, createContext, useContext, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({ isAuthenticated: false });

export function useAuth() {
  return useContext(AuthContext);
}

interface PasswordProtectProps {
  children: ReactNode;
}

export const PasswordProtect = ({ children }: PasswordProtectProps) => {
  // Initialize isAuthenticated based on sessionStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("isAuthenticated") === "true";
  });
  const [password, setPassword] = useState("");

  const verifyPassword = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Incorrect password");
    }
  };

  // No need for an useEffect to read the sessionStorage for initial value,
  // since we've handled that in the state initializer

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={verifyPassword}
          className="p-10 bg-white rounded-lg shadow-lg min-w-[300px]"
        >
          <div className="mb-6 text-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="Enter password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-center"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-800 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
