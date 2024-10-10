import { CssBaseline } from "@mui/material";
import LandingPage from "./routes/LandingPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import BasicLayout from "./layouts/BasicLayout";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId="408468159516-9pf3e64af4knq24jm532g234ac3gqk3j.apps.googleusercontent.com">
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <RouterProvider router={router} />
          </CssBaseline>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
};

export default App;
