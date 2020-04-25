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
  text-align: center;
  padding-bottom: 48px;
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
  background-repeat: no-repeat;
  background-position: top;
  margin: 24px 0px 0px 0px;
  line-height: 100px;
  padding: 0;
  height: 100px;  
`;

export const Seo = styled.section`
  background-image: url(${seoBg});
  background-repeat: no-repeat;
  background-position: top;
  margin: 24px 0px 0px 0px;
  padding: 0;
  line-height: 100px;
  height: 100px;  
`;

export const Javascript = styled.section`
  background-image: url(${javascriptBg});
  background-repeat: no-repeat;
  background-position: top;
  margin: 24px 0px 0px 0px;
  padding: 0;
  line-height: 100px;
  height: 100px;  
`;

export const Paid = styled.section`
  background-image: url(${paidBg});
  background-repeat: no-repeat;
  background-position: top;
  margin: 24px 0px 0px 0px;
  padding: 0;
  line-height: 100px;
  height: 100px;  
`;

