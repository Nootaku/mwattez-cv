import React from "react";
import AboutEducation from "./aboutEducation";
import AboutProfile from "./aboutProfile";
import AboutWhoami from "./aboutWhoami";

// Stateless Functional Component
const AboutCard = (props) => {
  const tiles = {
    education: <AboutEducation content={props.content.education} />,
    profile: <AboutProfile content={props.content.professional_profile} />,
    whoami: <AboutWhoami content={props.content.whoami} />,
  };

  let buildTile = (contentKey) => {
    return tiles[contentKey];
  };

  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      {buildTile(props.type)}
    </div>
  );
};

export default AboutCard;
