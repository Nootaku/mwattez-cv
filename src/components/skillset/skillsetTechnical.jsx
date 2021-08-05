import React from "react";

const SkillsetTechnical = (props) => (
  <React.Fragment>
    <span className={props.type}>{props.name}:</span>
    <ul>
      {props.content.map((skill, index) => (
        <li key={props.name + "_" + index} className="skillItem">
          {skill}
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export default SkillsetTechnical;
