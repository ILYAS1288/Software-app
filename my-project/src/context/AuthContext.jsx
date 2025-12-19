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

    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  // ADMIN LOGIN
  const adminLogin = async (email, password) => {
    const res = await axios.post(
      "http://localhost:5000/api/auth/admin/login",
      { email, password }
    );

    localStorage.setItem("adminToken", res.data.token);
    setUser(res.data.admin);
  };

  return (
    <AuthContext.Provider value={{ user, login, adminLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
