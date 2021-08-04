import React from "react";
import AboutContactItem from "./aboutContactItem";

const AboutContact = (props) => {
  return (
    <React.Fragment>
      <div className="card-text contact-wrapper">
        <AboutContactItem type="phone" />
      </div>
      <div className="card-text contact-wrapper">
        <AboutContactItem type="email" />
      </div>
      <div className="card-text contact-wrapper">
        <AboutContactItem type="address" />
      </div>
    </React.Fragment>
  );
};

export default AboutContact;
