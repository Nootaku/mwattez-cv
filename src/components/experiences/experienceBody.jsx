import React, { Component } from "react";
import Braces from "../images/braces.svg";

class ExperienceBody extends Component {
  render() {
    const { id, company, description, deliverables, stack } = this.props;

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
          <button
            className="btn btn-sm technicalStackOpenBtn"
            onClick={() => this.props.onToggleStack()}
          >
            View technical stack <img src={Braces} />
          </button>
        )}
      </div>
    );
  }
}

export default ExperienceBody;
