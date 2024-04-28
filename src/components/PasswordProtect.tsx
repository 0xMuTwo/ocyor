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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const verifyPassword = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={verifyPassword}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
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
