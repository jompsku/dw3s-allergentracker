import { Routes, Route, Navigate } from "react-router-dom";
import GeneralInfoPage from "./GeneralInfoPage";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";
import UserPreferences from "./UserPreferences";
import PrivateRoute from "../PrivateRoute";
import { useAuth } from "../../hooks/useAuth";
import { Container, Typography } from "@mui/material";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/how-it-works" element={<GeneralInfoPage />} />
      <Route path="/about" element={<p>about</p>} />
      <Route path="/terms-of-service" element={<p>terms</p>} />
      <Route path="/privacy-policy" element={<p>privacy</p>} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route path="/" element={<PrivateRoute element={<LandingPage />} />} />
      <Route
        path="/user-preferences"
        element={<PrivateRoute element={<UserPreferences />} />}
      />
      <Route
        path="*"
        element={
          <Container>
            <Typography>Page not found</Typography>
          </Container>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
