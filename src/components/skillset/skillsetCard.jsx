import React from "react";
import SkillsetLanguage from "./skillsetLanguage";
import SkillsetTechnical from "./skillsetTechnical";
import skillsetData from "../data/skills.json";

const SkillsetCard = (props) => {
  const data = skillsetData[props.type];

  let itemBuilder = (type, item) => {
    if (type === "languages") {
      return <SkillsetLanguage name={item.name} score={item.score} />;
    } else if (type === "technical_stack") {
      return <SkillsetTechnical name={item.name} content={item.content_list} />;
    } else {
      return (
        <ul style={{ padding: 0 }}>
          {item.map((i) => (
            <li key={i} className="skillItem">
              {i}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="col-sm-3">
      <div className="card mb-3">
        <div className="card-header">{props.title}</div>
        <ul className="list-group list-group-flush">
          {data.map((item, index) => {
            return (
              <li
                key={props.type + "_" + index}
                className={
                  props.type === "languages"
                    ? "list-group-item starred-item"
                    : "list-group-item"
                }
              >
                {itemBuilder(props.type, item)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillsetCard;
