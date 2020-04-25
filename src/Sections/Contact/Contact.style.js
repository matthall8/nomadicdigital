import styled from "styled-components";

export const ContactSection = styled.section` 
  text-align: center;
  label {
    display:none;
  }
  margin: 0px 0px 48px 0px;
`;

export const LoginInput = styled.input`
  padding: 24px;
  display: block;
  margin: 32px auto 0px auto;
  width: 230px;
  text-align: center;
  font-size: 18px;
  color: #000;
  font-weight: bold;
  background: #fff;
  border-top: #fff 0px solid;
  border-left: #fff 0px solid;
  border-right: #fff 0px solid;
  border-bottom: #2A414A 5px solid;
`;

export const Textarea = styled.textarea`
  padding: 24px 20px 64px;
  display: block;
  margin: 32px auto 0px auto;
  width: 230px;
  text-align: center;
  font-size: 18px;
  color: #000;
  background: #fff;
  border: #2A414A 5px solid;
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
`;
