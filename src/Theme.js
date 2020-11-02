import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  width: {
    mobileWidth: "58%",
    desktopWidth: "60vw",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;