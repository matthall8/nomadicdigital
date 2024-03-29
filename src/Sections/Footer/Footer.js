import React from "react";
import {FooterNav, Copyright} from "./Footer.style";

const Footer = () => {
  return (
    <div>
 <FooterNav>
      <ul>
        <li><a href="https://streetgarms.co.uk">Street Garms</a></li>
        <li><a href="https://www.gowanderwise.com/">Wander Wise</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#locations">Work Locations</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </FooterNav>
    <Copyright>
      &copy; Nomadic Digital 2016 - {(new Date().getFullYear())}
    </Copyright>
    </div>
  );
};

export default Footer;