import { createTheme } from "@mui/material";
import "@fontsource/martel";
import "@fontsource/open-sans";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7F50",
    },
    background: {
      default: "#fcf5f2",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Martel", serif',
      color: "white",
      fontSize: "2rem",
    },
    h2: {
      fontFamily: '"Martel", serif',
      color: "#FF7F50",
      fontSize: "2rem",
    },
  },
});

export default theme;