import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // USER LOGIN
  const login = async (email, password) => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    localStorage.setItem("authToken", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    setUser(res.data.user);
  };

  // ADMIN LOGIN
  const adminLogin = async (email, password) => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/admin/login",
      { email, password }
    );

    localStorage.setItem("authToken", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.admin));
    setUser(res.data.admin);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, adminLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
