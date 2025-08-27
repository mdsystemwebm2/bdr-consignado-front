import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  cnpj_cpf: string;
  phone: string;
  address: string;
  responsible_id: number | null;
  type: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const route = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem("@user");
      const storedToken = await AsyncStorage.getItem("@token");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
        route.replace("/");
      }
    }
    loadStorageData();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await api.post("/login", { email, password });
    const data = response.data;
    console.log("data", data);

    setUser(data.user);
    setToken(data.token);

    console.log("user", user);
    await AsyncStorage.setItem("@user", JSON.stringify(data.user));
    await AsyncStorage.setItem("@token", data.token);

    route.replace("/");
  };

  const signOut = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.removeItem("@token");
    route.replace("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
