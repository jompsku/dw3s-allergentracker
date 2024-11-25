import { Routes, Route } from "react-router-dom";
import GeneralInfoPage from "./GeneralInfoPage";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";
import PrivateRoute from "../PrivateRoute";
import { Container, Typography } from "@mui/material";
import AboutPage from "./AboutPage";
import TosPage from "./TosPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import { useAuth } from "../../hooks/useAuth";

const AppRoutes = () => {
  
  const getUser = async () => {
    return await useAuth();
  };
  const { user } = getUser();

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<LandingPage />} />
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
      <Route
        path="*"
        element={
          <Container>
            <Typography>Page not found</Typography>
          </Container>
        }
      />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<GeneralInfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms-of-service" element={<TosPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
