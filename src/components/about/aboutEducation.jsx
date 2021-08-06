import React from "react";

const AboutEducation = (props) => {
  const uniList = Object.keys(props.content.university);
  const nonUniList = Object.keys(props.content.non_univerity);

  let uniBody = (contentKey) => {
    return (
      <div className="educationWrapper" key={"uni_" + contentKey}>
        <blockquote className="blockquote mb-0 educationElement">
          <p className="educationHeader">{contentKey}</p>
        </blockquote>
        <p className="card-text-content">
          {props.content.university[contentKey].name}
        </p>
        <p className="card-text-content text-muted">
          {props.content.university[contentKey].university},{" "}
          {props.content.university[contentKey].year}
        </p>
      </div>
    );
  };

  let notUniBody = (contentKey) => {
    const title = {
      exchange: "Exchange Programs",
      other: "Language Classes",
    };
    return (
      <div className="educationWrapper" key={"nonUni_" + contentKey}>
        <blockquote className="blockquote mb-0 educationElement">
          <p className="educationHeader">{title[contentKey]}</p>
        </blockquote>
        <ul className="aboutCardList">
          {props.content.non_univerity[contentKey].map((i) => (
            <li key={i.id} className="aboutCardListItem">
              <p className="card-text-content">{i.university}</p>
              <p className="card-text-content text-muted">
                {i.start}
                {!(i.start === i.end) && (
                  <React.Fragment>
                    {" - "}
                    {i.end}
                  </React.Fragment>
                )}{" "}
                ({i.duration})
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="card-text">
      {uniList.map((contentKey) => uniBody(contentKey))}
      {nonUniList.map((contentKey) => notUniBody(contentKey))}
    </div>
  );
};

export default AboutEducation;
