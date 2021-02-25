import styled from "styled-components";
import headerBackground from "../../../client/images/headerbg.png";
import desktopHeaderBackground from "../../../client/images/desktop_headerbg.jpg";


export const StyledHeader = styled.header`
  height: 532px;
  background-image: linear-gradient(
    rgba(30, 40, 42, 0.5),
    rgba(30, 40, 42, 0.5)
    ), url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 600px) {
    background-image: linear-gradient(
    rgba(30, 40, 42, 0.7),
    rgba(30, 40, 42, 0.7)), url(${desktopHeaderBackground});
    background-size: cover;
    height: 100vh;
  }
`;

export const LogoH1 = styled.h1`
  color: #fff;
  text-align: center;
  padding: 10px 0px 0px 0px;
  font-family: 'Muli', sans-serif;
  font-style: normal;
  font-weight: 700; 
  font-size: 1.05rem;
  margin: 0;
  @media only screen and (min-width: 600px) {
    padding: 24px 0px;
  }
`;


export const TaglineH2 = styled.h2`
  color: #fff;
  text-align: center;
  padding: 65px 40px 0px;
  font-size: 2.2rem;
  font-family: 'Muli', sans-serif;
  font-style: normal;
  font-weight: 600;
  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    width: 50vw;
    padding: 20vh 0 0 0;
  }
`;

export const NavigationArea = styled.section`
  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    padding: 10px 0 0 0;
    width: 60vw;
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
`

export const ContactCTA = styled.a`
  display: block;
  margin: 24px auto 0;
  padding: 16px 32px;
  text-decoration: none;
  margin-top: 24px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  width: fit-content;
  font-weight: bold;
  background-image: linear-gradient(#D5A531, #D19C1D);
  border: #bf942c 2px solid;
  border-radius: 10px;
  box-shadow: 0 4px 6px hsla(0,0%,0%,0.2);
  @media only screen and (min-width: 600px) {
      width: 10vw; 
      margin 15vh auto;
    }
    a:hover {
      text-decoration: underline;
    }
`