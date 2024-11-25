import { Routes, Route } from "react-router-dom";
import GeneralInfoPage from "./GeneralInfoPage";
import LandingPage from "./LandingPage";
import { Container, Typography } from "@mui/material";
import AboutPage from "./AboutPage";
import TosPage from "./TosPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import ProtectedRoutes from "../../utils/ProtectedRoutes";
import LoginPage from "./LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/how-it-works" element={<GeneralInfoPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms-of-service" element={<TosPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
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
