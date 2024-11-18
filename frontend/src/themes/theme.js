import { createTheme } from "@mui/material"
import "@fontsource/martel"
import "@fontsource/open-sans"

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7F50",
      contrastText: "#fff",
      light: "#e3e3e3",
    },
    background: {
      default: "#fcf5f2",
      footer: "#a69381",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontFamily: '"Martel", serif',
      color: "white",
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: '"Martel", serif',
      color: "#FF7F50",
      fontSize: "2rem",
    },
    h3: { 
      fontFamily: '"Martel", serif',
      color: "#FF7F50",
      fontSize: "1.5rem",
    },
    h4: {
      fontFamily: '"Martel", serif',
      color: "#FF7F50",
      fontSize: "1.2rem",
    },
  },
})

export default theme
