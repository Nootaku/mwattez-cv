import React, { Component } from "react";

// https://mailtrap.io/blog/react-contact-form/

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      message: "",
      isRobot: true,
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onCompanyChange(event) {
    this.setState({ company: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onRobotChange(event) {
    if (event.target.value.toLowerCase() === "ten") {
      this.setState({ isRobot: false });
    } else {
      this.setState({ isRobot: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.isRobot) {
      alert(`Please answer the anti-spam question.`);
      return null;
    }

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          alert("Your message has been successfully sent !");
          this.resetForm();
        } else if (response.status !== 200) {
          alert(`Your message was NOT sent:\n${response.message}`);
        }
      });
  }

  resetForm() {
    this.setState({ name: "", company: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="formWrapper">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group my-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              value={this.state.company}
              onChange={this.onCompanyChange.bind(this)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            <div id="emailHelp" className="form-text">
              Your email will not be stored and will only be used for answering
              to your message.
            </div>
          </div>
          <div className="form-group my-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <div className="form-group my-3 row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="robot" className="col-form-label">
                Anti-spam
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                value={this.state.robot}
                onChange={this.onRobotChange.bind(this)}
              />
            </div>
            <div className="col-auto">
              <span id="antiSpamHelpInline" className="form-text">
                Please write the number '10' in plain letters.
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <div class="d-grid col-12 col-md-4">
              <button type="submit" className="btn btn-outline-secondary ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Email;
