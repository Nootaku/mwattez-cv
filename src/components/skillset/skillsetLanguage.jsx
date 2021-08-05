import React from "react";
import starFull from "../images/star_full.png";
import starEmpty from "../images/star_empty.png";

const SkillsetLanguage = (props) => (
  <React.Fragment>
    <span className={props.type}>{props.name}</span>
    <span>
      {[...Array(props.score)].map((i, index) => (
        <img
          key={props.name + "_full_" + index}
          className="star"
          src={starFull}
          alt="Star Full"
        />
      ))}
      {[...Array(5 - props.score)].map((i, index) => (
        <img
          key={props.name + "_emplty_" + index}
          className="star"
          src={starEmpty}
          alt="Star Empty"
        />
      ))}
    </span>
  </React.Fragment>
);

export default SkillsetLanguage;
