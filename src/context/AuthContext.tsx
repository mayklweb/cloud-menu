import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getLocale, setLocale } from '../utils/helpers';

type AuthContextType = {
  token: string;
  addToken: (token: string) => void;
  themeMode: string,
  changeTheme: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const initialToken = getLocale('token') || '';

  const [themeMode, setTheme] = useState('dark');
  const changeTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const [token, setToken] = useState<string>(initialToken);

  const addToken = (newToken: string): void => {
    setToken(newToken);
    setLocale('token', newToken);
  };

  return (
    <AuthContext.Provider value={{ token, addToken, themeMode, changeTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
