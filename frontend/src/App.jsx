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

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            minWidth: "530px",
          }}
        >
          <Header />
          <Container
            sx={{
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
    </BrowserRouter>
  );
};

export default App;
