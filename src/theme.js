import { createTheme } from "@mui/material/styles";
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    button: {
      textTransform: "capitalize",
    },
  },
  background: {
    default: "#f5f5f5",
  },
  common: {
    white: "#f5f5f5",
  },
  palette: {
    primary: {
      main: "#d6bbae",
    },
    secondary: {
      main: "#ae864c",
    },
    text: {
      primary: "#413025",
    },
  },
});

export default theme;
