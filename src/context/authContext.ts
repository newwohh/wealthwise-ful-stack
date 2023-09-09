import { Provider, createContext } from "react";

export const AuthContext = createContext<{
  user: any;
  setUser: (user: any) => void;
}>({
  user: "",
  setUser: () => {},
});

export const AuthProvider: Provider<{
  user: any;
  setUser: (user: any) => void;
}> = AuthContext.Provider;

export default AuthContext;
