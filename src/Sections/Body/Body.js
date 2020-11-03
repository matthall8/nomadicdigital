import React from "react";
import { createGlobalStyle } from 'styled-components'

const StyledBody = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Open Sans;
    scroll-behavior: smooth;
    a {
      text-decoration:none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`

export default StyledBody;