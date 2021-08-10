import React from "react";
import AboutEducation from "./aboutEducation";
import AboutProfile from "./aboutProfile";
import AboutWhoami from "./aboutWhoami";
import aboutData from "../data/about.json";

// Stateless Functional Component
const AboutCard = (props) => {
  const tiles = {
    education: <AboutEducation content={aboutData.education} />,
    profile: <AboutProfile content={aboutData.professional_profile} />,
    whoami: <AboutWhoami content={aboutData.whoami} />,
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
