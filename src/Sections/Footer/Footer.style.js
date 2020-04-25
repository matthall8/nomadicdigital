import styled from "styled-components";

export const FooterNav = styled.nav`
  ul {
    background: url(https://user-images.githubusercontent.com/9437789/77851841-23bf5000-71d3-11ea-91a8-40fc869a9e91.png) no-repeat;
    height: 44px;
    text-align : center;
    line-height: 44px;
    margin: 0;
    padding:0;
  }
  li {
    display:inline;
  }
  li a {
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
    text-decoration: none;
  }
  li a:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  padding: 10px 0px;
  font-size: 12px;
  text-align: center;
`;