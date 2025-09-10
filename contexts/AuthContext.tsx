import AsyncStorage from '@react-native-async-storage/async-storage';

import { useRouter } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

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
  isLoading: boolean;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const route = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem('@user');
      const storedToken = await AsyncStorage.getItem('@token');

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
        route.replace('/'); // usuário já logado
      } else {
        route.replace('/sign-in'); // não logado
      }

      setIsLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      const data = response.data;

      setUser(data.user);
      setToken(data.token);

      await AsyncStorage.setItem('@user', JSON.stringify(data.user));
      await AsyncStorage.setItem('@token', data.token);

      route.replace('/');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Erro ao fazer login.');
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    try {
      await api.post('/logout'); // Laravel vai reconhecer pelo header Authorization
    } catch (error: any) {
      console.log('Erro ao deslogar:', error.response?.data || error.message);
    }

    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem('@user');
    await AsyncStorage.removeItem('@token');
    route.replace('/sign-in');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, token, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
