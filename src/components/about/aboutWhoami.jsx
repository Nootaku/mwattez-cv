import React from "react";

const AboutWhoami = (props) => {
  return (
    <div className="card-text">
      {props.content.map((paragraph, index) => (
        <p key={"whoami_" + index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default AboutWhoami;
