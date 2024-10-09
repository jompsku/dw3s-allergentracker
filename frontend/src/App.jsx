import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ height: "100vh" }}>
          <Header />
          <LandingPage />
          <Footer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
