import styled from "styled-components";
import headerBackground from "../../../client/images/headerbg.png";

export const StyledHeader = styled.header`
  height: 532px;
  background-image: linear-gradient(
    rgba(30, 40, 42, 0.5),
    rgba(30, 40, 42, 0.5)
    ), url(${headerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 0;
  margin: 0;
  ${'' /* @media only screen and (min-width: 600px) {
    background-image: url(https://user-images.githubusercontent.com/28222381/45878093-906cb980-bda8-11e8-9534-61322b3c14c7.png);
} */}
`;


export const LogoH1 = styled.h1`
  color: #fff;
  text-align: center;
  padding: 10px 0px 0px 0px;
  font-family: 'Muli', sans-serif;
  font-style: normal;
  font-weight: 700; 
  font-size: 0.9rem;
  margin: 0;
`;


export const TaglineH2 = styled.h2`
  color: #fff;
  text-align: center;
  padding: 65px 40px 0px;
  font-size: 2.2rem;
  font-family: 'Muli', sans-serif;
  font-style: normal;
  font-weight: 600;
  margin: 0;
`;
