import React, { useState } from "react";

/* MATERIAL UI */
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

/* COMPONENTS */
import { lightTheme, darkTheme } from "../src/components/ui/Theme";
import Footer from "./../src/components/Footer";
import AppBarComponent from "./../src/components/AppBarComponent";
import Main from "./../src/components/Main";

export default function Album() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <AppBarComponent darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}
