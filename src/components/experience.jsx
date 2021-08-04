import React, { Component } from "react";
import ExperienceTitle from "./experienceTitle";
import ExperienceBody from "./experienceBody";
import "./css/experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_width: 0,
      isBodyHidden: window.screen.width >= 992 ? false : true,
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

  render() {
    const {
      screen_width,
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
          onToggleBody={this.handleToggleBody}
        />
        {!this.state.isBodyHidden && (
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
