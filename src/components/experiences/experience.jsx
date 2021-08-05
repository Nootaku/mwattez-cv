import React, { Component } from "react";
import ExperienceTitle from "./experienceTitle";
import ExperienceBody from "./experienceBody";
import "../css/experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_width: 0,
      isBodyHidden: !this.props.isDesktop,
      isStackHidden: false,
      id: this.props.experience.id,
      title: this.props.experience.title,
      dates: this.props.experience.dates,
      company: this.props.experience.company,
      description: this.props.experience.description,
      deliverables: this.props.experience.deliverables,
      stack: this.props.experience.stack,
    };

    this.handleToggleBody = this.handleToggleBody.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateView);
    this.updateView();
  }

  updateView() {
    this.setState({ screen_width: window.innerWidth });
    if (this.state.screen_width >= 992 && this.state.isBodyHidden === true) {
      this.setState({ isBodyHidden: false });
    }
  }

  handleToggleBody() {
    this.setState({ isBodyHidden: !this.state.isBodyHidden });
  }

  getIcon() {
    if (this.state.isBodyHidden) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-dash-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      );
    }
  }

  render() {
    const {
      isBodyHidden,
      id,
      title,
      dates,
      company,
      description,
      deliverables,
      stack,
    } = this.state;

    return (
      <div className="card experience my-2">
        <ExperienceTitle
          title={title}
          dates={dates}
          icon={this.getIcon()}
          onToggleBody={this.handleToggleBody}
        />
        {!isBodyHidden && (
          <ExperienceBody
            id={id}
            company={company}
            description={description}
            deliverables={deliverables}
            stack={stack}
          />
        )}
      </div>
    );
  }
}

export default Experience;
