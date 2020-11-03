import React from 'react';
import {Ul, ContactLi} from "./RightNav.styled";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#locations">Work Locations</a></li>
      <ContactLi><a href="#contact">Contact Us</a></ContactLi>
    </Ul>
  )
}

export default RightNav