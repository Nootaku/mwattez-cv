import React, { Component } from 'react';

class ExperienceBody extends Component {
  render() {
    const {
      id,
      company,
      description,
      deliverables,
      stack
    } = this.props;

    return (
      <div className="card-body experience-body">
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
        {stack && (
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
    );
  }

}

export default ExperienceBody;
