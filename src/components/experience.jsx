import React, { Component } from "react";
import "./experience.css";

class Experience extends Component {
  render() {
    return (
      <div className="card experience my-2">
        <h4 className="card-header">
          {this.props.experience.title} | {this.props.experience.dates}
        </h4>
        <div className="card-body">
          <h5 className="card-title">{this.props.experience.company}</h5>
          <p className="card-text">{this.props.experience.description}</p>
          {this.props.experience.deliverables && (
            <React.Fragment>
              <ul>
                {this.props.experience.deliverables.map(item => (
                  <li className="experienceStack" key={item}>
                    {item.title} : {item.description}{" "}
                    {item.website && (
                      <a href={item.website} rel="noreferrer">
                        {item.website}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
          {this.props.experience.stack && (
            <React.Fragment>
              <h5 className="card-title">Technical stack:</h5>
              <p>
                {this.props.experience.stack.map(item => (
                  <span>
                    {item}
                    {item !==
                      this.props.experience.stack[
                        this.props.experience.stack.length - 1
                      ] && ", "}
                  </span>
                ))}
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Experience;
