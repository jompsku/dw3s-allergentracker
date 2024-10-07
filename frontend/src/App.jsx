import { Box } from "@mui/material"
import Header from "./components/Header"
import "./App.css"
import LandingPage from "./components/LandingPage"

const App = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#fcf5f2", height: "100vh" }}>
      <Header />
      <LandingPage />
    </Box>
  )
}

export default App
