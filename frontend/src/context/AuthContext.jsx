import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`${baseUrl}/auth/current_user`, {
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const logout = async () => {
    try {
      await axios.get(`${baseUrl}/logout`, {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {loading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};
