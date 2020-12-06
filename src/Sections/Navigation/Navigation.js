import React, {useState, useRef} from "react";
import {BurgerMenu, Ul, ContactLi} from "./Navigation.style";
import { useOnClickOutside } from '../../hooks';

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
    return (
    <nav ref={node}>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
      <Ul open={open}>
        <li><a href="#" onClick={() => setOpen(!open)}>Home</a></li>
        <li><a href="#services" onClick={() => setOpen(!open)}>Services</a></li>
        <li><a href="#experience" onClick={() => setOpen(!open)}>Experience</a></li>
        <li><a href="#locations" onClick={() => setOpen(!open)}>Work Locations</a></li>
        <ContactLi><a href="#contact" onClick={() => setOpen(!open)}>Contact Us</a></ContactLi>
      </Ul>
    </nav>
  );
};

export default Navigation;