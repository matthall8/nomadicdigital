import React from "react";
import {FooterNav, Copyright} from "./Footer.style";

const Footer = () => {
  return (
    <div>
 <FooterNav>
      <ul>
        <li><a href="#top">Home</a></li>
        <li><a href="#top">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </FooterNav>
    <Copyright>
    &copy; Nomadic Digital | Terms | Privacy
    </Copyright>
    </div>
  );
};

export default Footer;