import { Box, Container, CssBaseline, Typography } from "@mui/material"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
import Footer from "./components/Footer"
import GeneralnfoPage from "./components/pages/GeneralnfoPage"
import Header from "./components/Header"
import LandingPage from "./components/pages/LandingPage"
import LoginPage from "./components/pages/LoginPage"
import theme from "./themes/theme"
import UserPreferences from "./components/pages/UserPreferences"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <Header loggedIn={loggedIn} />
            <Container
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}
            >
              <Routes>
                <>
                  <Route path="/how-it-works" element={<GeneralnfoPage />} />
                  <Route path="/about" element={<p>about</p>} />
                  <Route path="/terms-of-service" element={<p>terms</p>} />
                  <Route path="/privacy-policy" element={<p>privacy</p>} />
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
