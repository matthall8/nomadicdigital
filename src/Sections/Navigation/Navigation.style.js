import styled from "styled-components";

export const BurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#000' : '#fff'};
    border-radius: 10px;
    border: 0.75px solid #1E282A;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    color:#fff;
  }
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    font-family: 'Muli', sans-serif;
    margin: 0;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 100%;
    padding: 0rem 0 0 0;
    color: #1E282A;
    a {
      color: #1E282A;
    }
    transition: transform 0.3s ease-in-out;
    li {
      font-weight: bold;
      border-bottom: #D19C1D 1px solid;
    }
  }
`;  

export const ContactLi = styled.li`
  @media only screen and (min-width: 600px) {
      padding: 14px 0px 14px 10px;
      border: 2px solid #fff;
      border-radius: 10px;
  }
`