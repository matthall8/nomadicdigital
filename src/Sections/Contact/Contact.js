import React, {Component} from "react";
import {ContactSection,LoginInput, Textarea, Submit} from "./Contact.style";
import {StyledH2} from "../../Components/H2/H2.style"
import emailjs from 'emailjs-com';
// import logo from "../../../../assets/logoDarkBlue.svg";

class Contact extends Component {
  state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
  }
  handleSubmit(e) {
    e.preventDefault()    
    const { name, email, phoneNumber, message } = this.state    
    let templateParams = {
      from_name: email,
      to_name: 'matthall8@gmail.com',
      phoneNumber: phoneNumber,
      message_html: message,
    }     
    emailjs.send(
      'gmail',
      'template_gVJmXjPM',
        templateParams,
      'user_npJtGEM0TmFQNmO4403KI'
       )     
    this.resetForm()
   }
   resetForm() {
      this.setState({
        name: '',
        email: '',
        pnoneNumber: '',
        message: '',
      })
    }
    handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
    render() {
    
    return(<ContactSection>
      <StyledH2>Contact</StyledH2>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="name">Name</label>
              <LoginInput
                component="input"
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
                required
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
              />
                  <label htmlFor="email">Email</label>
              <LoginInput
                component="input"
                placeholder="Your Email"
                type="email"
                name="email"
                id="email"
                required
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
              />
                              <label htmlFor="number">Phone number</label>
              <LoginInput
                component="input"
                placeholder="Your Number"
                type="phonenumber"
                name="number"
                id="number"
                required
                value={this.state.phoneNumber}
                onChange={this.handleChange.bind(this, 'phoneNumber')}
              />
              <Textarea 
                placeholder="Tell us a little bit about your project"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                required
              >
              </Textarea>
              <Submit>Say Hello!</Submit>
            </form>
    </ContactSection>)
  };
};

export default Contact