import React, {useState, useRef} from "react";
import {BurgerMenu} from "./Navigation.style";
import RightNav from '../RightNav/RightNav.js';
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
      <RightNav open={open}/>
    </nav>
  );
};

export default Navigation;