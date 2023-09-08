import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    buttonPlus: {
      main: "#48bf90",
      light: "#76cfac",
      dark: "#1aaf74",
      contrastText: "#d1efe3",
    },
    buttonMinus: {
      main: "#ff4151",
      light: "#ff727e",
      dark: "#ff0016",
      contrastText: "	#ffaeb5",
    },
    buttonPadding: {
      padding: "30px",
    },
  },
});

export default theme;
