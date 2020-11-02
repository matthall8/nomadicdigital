import styled from "styled-components";

export const ContactSection = styled.section` 
  text-align: center;
  label {
    display:none;
  }
  margin: 0px 0px 48px 0px;
`;

export const ContactInput = styled.input`
  padding: 24px;
  display: block;
  margin: 32px auto 0px auto;
  width: 230px;
  font-size: 1.125rem;
  text-align: center;
  color: #000;
  font-weight: bold;
  background: #fff;
  border-top: #fff 0px solid;
  border-left: #fff 0px solid;
  border-right: #fff 0px solid;
  border-bottom: #2A414A 3px solid;
  @media only screen and (min-width: 600px) {
      width: 50vw; 
    }
`;

export const ErrorMessage = styled.section`
    padding: 24px;
    display: block;
    font-weight: bold;
    border: #DD614A 2px solid;
    background: #fff;
    font-family: Open Sans;
    font-size: 1.0rem;
    line-height: 1.6;
    margin: 32px auto 0px auto;
    width: 230px;
    text-align: center;
    @media only screen and (min-width: 600px) {
      width: 50vw; 
    }
`;

export const ThankYouMessage = styled.section`
    padding: 24px;
    display: block;
    font-weight: bold;
    border: #069E2D 2px solid;
    background: #fff;
    font-family: Open Sans;
    font-size: 1.0rem;
    line-height: 1.6;
    margin: 32px auto 0px auto;
    width: 230px;
    text-align: center;
    @media only screen and (min-width: 600px) {
      width: 50vw; 
    }
`;

export const Textarea = styled.textarea`
  padding: 24px 20px 64px;
  display: block;
  margin: 32px auto 0px auto;
  width: 230px;
  font-family: Open Sans;
  font-weight: bold;
  text-align: center;
  font-size: 1.125rem;
  color: #000;
  background: #fff;
  border: #2A414A 3px solid;
  @media only screen and (min-width: 600px) {
      width: 50vw; 
      margin: 48px auto 0px auto;
    }
`;

export const Submit = styled.button`
  padding: 16px 32px;
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
      width: 15vw; 
      margin-top: 32px;
    }
`;
