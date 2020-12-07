import styled from "styled-components";

export const ExperienceSection = styled.section` 
  text-align: center;
`;

export const ExperienceLogos = styled.section`
      display: flex;
      flex-flow: row wrap;
      align-items:center;
      margin: 32px auto 0;
      width: ${props => props.theme.width.mobileWidth};
      img {
        margin:  32px 0px;
      }
      @media only screen and (min-width: 600px) {
        width: ${props => props.theme.width.desktopWidth};
        margin: 32px auto;
        img {
        margin:  48px 0px;
      }
      }
`;

export const Logo = styled.section`
    flex: 0 0 100%;
    display:flex;
    justify-content: center;
    @media only screen and (min-width: 600px) {
      flex: 0 0 32%;
    }
`