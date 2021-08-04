import React from "react";

const AboutEducation = (props) => {
  const uniList = Object.keys(props.content.university);
  const nonUniList = Object.keys(props.content.non_univerity);

  let uniBody = (contentKey) => {
    return (
      <React.Fragment key={"uni_" + contentKey}>
        <h5 className="smallTitle">
          <span className="underline italic">{contentKey}</span> -{" "}
          {props.content.university[contentKey].name}
        </h5>
        <p className="card-text-content italic">
          {props.content.university[contentKey].university},{" "}
          {props.content.university[contentKey].year}
        </p>
      </React.Fragment>
    );
  };

  let notUniBody = (contentKey) => {
    const title = {
      exchange: "Exchange Programs",
      other: "Language Classes",
    };
    return (
      <React.Fragment key={"nonUni_" + contentKey}>
        <h5 className="smallTitle underline italic">{title[contentKey]}</h5>
        <ul className="aboutCardList">
          {props.content.non_univerity[contentKey].map((i) => (
            <li key={i.id} className="aboutCardListItem">
              <span className="bold">{i.university}</span>
              <span className="dates italic">
                {i.start}
                {!(i.start === i.end) && (
                  <React.Fragment>
                    {" - "}
                    {i.end}
                  </React.Fragment>
                )}{" "}
                ({i.duration})
              </span>
            </li>
          ))}
        </ul>
      </React.Fragment>
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
