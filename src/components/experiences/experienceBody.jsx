import React, { Component } from "react";
import CodeSlash from "../images/code-slash.svg";

class ExperienceBody extends Component {
  render() {
    const { id, company, description, deliverables, stack } = this.props;

    return (
      <div className="card-body experience-body">
        <figure className="card-title">
          <blockquote className="blockquote">
            <p>{company[0]}</p>
          </blockquote>
          {company[1] && (
            <figcaption className="blockquote-footer">{company[1]}</figcaption>
          )}
        </figure>
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
            <img
              src={CodeSlash}
              className="codeSlash"
              alt="Open technical stack icon"
            />{" "}
            View technical stack
          </button>
        )}
      </div>
    );
  }
}

export default ExperienceBody;
