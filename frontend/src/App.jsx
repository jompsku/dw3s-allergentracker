import { Box } from "@mui/material"
import Header from "./components/Header"
import "./App.css"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#fcf5f2", height: "100vh" }}>
      <Header />
      <LandingPage />
      <Footer/>
    </Box>
  )
}

export default App
