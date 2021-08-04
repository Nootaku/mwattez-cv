import React from "react";

const AboutProfile = (props) => {
  return (
    <div className="card-text">
      {props.content.map((paragraph, index) => (
        <p key={"profile_" + index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default AboutProfile;
