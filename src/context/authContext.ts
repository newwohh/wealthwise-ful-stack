import { createContext } from "react";

export const AuthContext = createContext<{
  user: any;
  setUser: (user: any) => void;
}>({
  user: "",
  setUser: () => {},
});

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
