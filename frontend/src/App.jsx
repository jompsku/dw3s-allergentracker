import { Box, CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
          <Box sx={{ height: "100vh" }}>
            <Header />
            <Routes>
              <>
                <Route path="/how-it-works" element={<GeneralnfoPage />} />
                <Route path="*" element={<p>Page not found</p>} />
                {loggedIn ? (
                  <>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/user-preferences" element={<UserPreferences />} />
                  </>
                ) : (
                  <>
                    <Route path="/login" element={<LoginPage />} />
                  </>
                )}
              </>
            </Routes>
            <Footer />
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
