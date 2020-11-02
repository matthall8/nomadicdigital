import styled from "styled-components";

export const StyledH2 = styled.h2`
  border-bottom: #D19C1D 4px solid;
  font-size: 2.1rem;
  padding: 24px 0px 16px;
  font-family: 'Muli', sans-serif;
  margin: 0 auto 32px;
  width: ${props => props.theme.width.mobileWidth};
  @media only screen and (min-width: 600px) {
    width: ${props => props.theme.width.desktopWidth};
  }
`;