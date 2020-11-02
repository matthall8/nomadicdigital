import styled from "styled-components";
import seoBg from "../../../client/images/seo.png";
import strategyBg  from "../../../client/images/digital-strategy.png";
import paidBg from "../../../client/images/paid-search-social.png";
import javascriptBg from "../../../client/images/javascript.png";

export const ServicesSection = styled.section`
  background: #1E282A;
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  padding-bottom: 48px;
  text-align: center;
  a {
    color:white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Strategy = styled.section`
  background-image: url(${strategyBg});  
`;

export const Seo = styled.section`
  background-image: url(${seoBg});
`;

export const Javascript = styled.section`
  background-image: url(${javascriptBg}); 
`;

export const Paid = styled.section`
  background-image: url(${paidBg});
`;

export const ServiceBoxes = styled.section`
    margin: 0 auto;
    display:flex;
    flex-flow: wrap;
    width: ${props => props.theme.width.mobilepWidth};
    justify-content: space-between;
    section {
      background-repeat: no-repeat;
      background-position: top;
      margin: 24px auto 0;
      line-height: 100px;
      padding: 0;
      height: 100px;
      width: 375px;
    }
   @media only screen and (min-width: 600px) {
    width: ${props => props.theme.width.desktopWidth};
   }
`;