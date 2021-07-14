import { createMuiTheme } from "@material-ui/core/styles";

const darkPrimary = "#9370DB";
const darkSecondary = "#034068";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: darkPrimary,
    },
    secondary: {
      main: darkSecondary,
    },
  },
});
