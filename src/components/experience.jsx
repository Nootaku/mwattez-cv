import React, { Component } from "react";

class Experience extends Component {
  state = {
    company: this.props.company, // Company name
    title: this.props.title, // Job experience title
    description: this.props.description, // Description of the job
    stack: this.props.stack // Technical stack
  };
  render() {
    return (
      <div>
        <h3 className="experienceTitle">
          {this.state.title} at {this.state.company}
        </h3>
        <p className="experienceDescription">{this.state.description}</p>
        <p className="experienceStack">Technical stack:</p>
        <ul>
          {this.state.stack.map(item => (
            <li className="experienceStack" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Experience;
