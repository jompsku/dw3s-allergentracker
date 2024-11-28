import {
  Box,
  Container,
  CssBaseline,
  BrowserRouter,
  ThemeProvider,
  Footer,
  Header,
  theme,
} from "./components/index";
import AppRoutes from "./components/pages/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              minWidth: "370px",
            }}
          >
            <Header />
            <Container
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <AppRoutes />
            </Container>
            <Footer />
          </Box>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
