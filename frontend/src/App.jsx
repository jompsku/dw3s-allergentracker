import { CssBaseline } from "@mui/material";
import LandingPage from "./routes/LandingPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import BasicLayout from "./layouts/BasicLayout";

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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
