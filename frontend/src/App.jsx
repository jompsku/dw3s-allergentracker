import { Typography, Box } from "@mui/material";
import Header from "./components/Header";
import "./App.css";


const App = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#fcf5f2", height: "100vh" }}>
      <Header/>
    </Box>
  );
};

export default App;
