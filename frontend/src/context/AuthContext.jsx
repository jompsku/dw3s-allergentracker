import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      axios
        .get("http://localhost:8080/auth/current_user", {
          withCredentials: true,
        })
        .then((response) => {
          setUser(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }
  }, []);

  const logout = async () => {
    try {
      await axios.get("http://localhost:8080/logout", {
        withCredentials: true,
      });
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
