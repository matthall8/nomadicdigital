import styled from "styled-components";

export const ContactSection = styled.section` 
  text-align: center;
  label {
    display:none;
  }
`;

export const ContactH2 = styled.h2`
  border-bottom: #D19C1D 4px solid;
  font-size: 36px;
  padding: 20px 0px;
  margin: 0 auto;
  text-align: center;
`;

export const LoginInput = styled.input`
  padding: 20px;
  display: block;
  margin: 20px auto 0px auto;
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
  padding: 20px;
  display: block;
  margin: 20px auto 0px auto;
  width: 230px;
  text-align: center;
  font-size: 18px;
  color: #000;
  background: #fff;
  border: #2A414A 5px solid;
`;

export const Submit = styled.button`
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  color: #000;
  width: 30%;
  font-weight: bold;
  background-image: linear-gradient(#D5A531, #D19C1D);
  border: #2A414A 2px solid;
`;



