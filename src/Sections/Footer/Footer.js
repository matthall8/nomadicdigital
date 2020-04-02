import React from "react";
import {FooterNav, Copyright} from "./Footer.style";
// import logo from "../../../../assets/logoDarkBlue.svg";

const Footer = () => {
  return (
    <div>
 <FooterNav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </FooterNav>
    <Copyright>
    &copy; Nomadic Digital | Terms | Privacy
    </Copyright>
    </div>
  );
};

export default Footer;