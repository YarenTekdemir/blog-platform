"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { loginUser, registerUser } from "../../services/authService";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await loginUser({ email, password });
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  const register = async (userData: {
    username: string;
    email: string;
    password: string;
  }) => {
    const res = await registerUser(userData);
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
