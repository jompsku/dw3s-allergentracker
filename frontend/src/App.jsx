import {
  Box,
  Container,
  CssBaseline,
  Typography,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  ThemeProvider,
  useState,
  Footer,
  GeneralInfoPage,
  Header,
  LandingPage,
  LoginPage,
  theme,
  UserPreferences,
  PrivacyPolicyPage,
  TosPage,
  AboutPage
} from "./components/index"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", minWidth: "530px"}}>
            <Header loggedIn={loggedIn} />
            <Container
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}
            >
              <Routes>
                <>
                  <Route path="/how-it-works" element={<GeneralInfoPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/terms-of-service" element={<TosPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  {loggedIn ? (
                    <>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/user-preferences" element={<UserPreferences />} />
                      <Route path="/login" element={<Navigate to="/" replace={true} />} />
                    </>
                  ) : (
                    <>
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="*" element={<Navigate to="/login" replace={true} />} />
                    </>
                  )}
                  <Route
                    path="*"
                    element={
                      <Container>
                        <Typography>Page not found</Typography>
                      </Container>
                    }
                  />
                </>
              </Routes>
            </Container>
            <Footer />
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
