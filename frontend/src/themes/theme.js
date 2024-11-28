import { createTheme } from "@mui/material";
import "@fontsource/martel";
import "@fontsource/open-sans";

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
      fontSize: "2rem",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiInputBase-input": { fontSize: "13px" },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { ".MuiTypography": { fontSize: "13px" } },
      },
    },
    Modal: {
      position: "absolute",
      alignSelf: "center",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      boxShadow: 24,
      border: "1px solid #FF7F50",
      borderRadius: "4px",
      p: 2
    },
  },
});

export default theme;
