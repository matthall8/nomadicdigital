import React, {Component, createRef} from "react";
import {ContactSection,ContactInput,ThankYouMessage, Textarea, Submit} from "./Contact.style";
import {StyledH2} from "../../Components/H2/H2.style"
import emailjs from 'emailjs-com';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.MessageRef = createRef(); 
    this.FormRef = createRef();
  }
  state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      thankYouMessage: false,
      errorMessage: false,
  }
  handleSubmit(e) {
    e.persist()    
    e.preventDefault()
    console.log(e.target)    
    emailjs.sendForm('gmail', 'template_gVJmXjPM', e.target, 'user_npJtGEM0TmFQNmO4403KI')
       .then(() => {
        this.resetForm()
    }, () => {
        this.showError()
    });   
   }
   showError() {
    const MessageArea = this.MessageRef.current;
    this.setState({
      errorMessage: true,
    })
      MessageArea.scrollIntoView();
   }
   resetForm() {
      const MessageArea = this.MessageRef.current;
      const FormArea = this.FormRef.current;
      this.setState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        thankYouMessage: true,
      })
        FormArea.reset()
        MessageArea.scrollIntoView();
    }
    handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
    render() {
    return(
    <div>
      <ContactSection>
          <StyledH2>Contact</StyledH2>
          <form onSubmit={this.handleSubmit.bind(this)} ref={this.FormRef}>
            <label htmlFor="name">Name</label>
                  <ContactInput
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
                  <ContactInput
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
                  <ContactInput
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
                    name="message"
                    onChange={this.handleChange.bind(this, 'message')}
                    required
                  >
                  </Textarea>
                  <Submit>Say Hello!</Submit>
                  <section ref={this.MessageRef}>
                    {this.state.errorMessage && <ErrorMessage>Unfortunately there has been an error submitting your message. Please try again!</ErrorMessage>}
                    {this.state.thankYouMessage && <ThankYouMessage>Thank you for your message. We will be in touch shortly!</ThankYouMessage>}
                  </section>
                </form>
      </ContactSection>
    </div>)
  };
};

export default Contact