import { Routes, Route, Navigate } from "react-router-dom";
import GeneralInfoPage from "./GeneralInfoPage";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";
import PrivateRoute from "../PrivateRoute";
import { useAuth } from "../../hooks/useAuth";
import { Container, Typography } from "@mui/material";
import AboutPage from "./AboutPage";
import TosPage from "./TosPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<LandingPage />} />} />

      <Route path="/how-it-works" element={<GeneralInfoPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms-of-service" element={<TosPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <LoginPage />}
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
