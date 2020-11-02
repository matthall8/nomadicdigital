import styled from "styled-components";

export const ExperienceSection = styled.section` 
  text-align: center;
  margin: 0px 0px 0px 0px;
  img {
    margin: 0px auto 48px auto;
    display: block;
  }
`;

export const ExperienceLogos = styled.section`
      display: flex;
      flex-flow: row wrap;
      align-items:center;
      margin: 32px auto 0;
      width: ${props => props.theme.width.mobileWidth};
      @media only screen and (min-width: 600px) {
        width: ${props => props.theme.width.desktopWidth};
      }
      img {
        margin:  34px 0px;
      }
`;

export const Logo = styled.section`
    flex: 1;
    display:flex;
    justify-content: space-evenly;
    flex-basis: calc(33% - 20px)
`