import React, { Component } from "react";
import "./css/experience.css";

class Experience extends Component {
  render() {
    const {
      id,
      title,
      dates,
      company,
      description,
      deliverables,
      stack
    } = this.props.experience;
    return (
      <div className="card experience my-2">
        <h4 className="card-header">
          {title} | {dates}
        </h4>
        <div className="card-body">
          <h5 className="card-title">{company}</h5>
          <p className="card-text">{description}</p>
          {deliverables && (
            <React.Fragment>
              <ul>
                {deliverables.map((item, index) => (
                  <li
                    className="experienceStack"
                    key={id + ".deliverable." + index}
                  >
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
                {stack.map((item, index) => (
                  <span key={id + ".stack." + index}>
                    {item}
                    {item !== stack[stack.length - 1] && ", "}
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
