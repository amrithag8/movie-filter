import { createContext, useState } from "react";
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
    localStorage.setItem("token", "loggedIn");
  };

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
