import React from "react";
import {ContactSection, ContactH2,LoginInput, Textarea, Submit} from "./Contact.style";
// import logo from "../../../../assets/logoDarkBlue.svg";

class Contact extends React.Component {
  render() {
    return(<ContactSection>
      <ContactH2>Contact</ContactH2>
      <label htmlFor="name">Name</label>
            <LoginInput
              component="input"
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
            />
                 <label htmlFor="email">Email</label>
            <LoginInput
              component="input"
              placeholder="Your Email"
              type="email"
              name="email"
              id="email"
            />
                             <label htmlFor="number">Phone number</label>
            <LoginInput
              component="input"
              placeholder="Your Number"
              type="phonenumber"
              name="number"
              id="number"
            />
            <Textarea placeholder="Tell us a little bit about your project">
            </Textarea>
            <Submit>Say Hello!</Submit>
    </ContactSection>)
  };
};

export default Contact