import React from "react";

const AboutCertificates = (props) => {
  console.log(props);
  return (
    <div className="card-text">
      {props.content.map((certificate) => (
        <div
          className="certificateWrapper d-flex flex-row"
          key={certificate.id}
        >
          <img
            className="cert_logo"
            src={certificate.source}
            alt="Logo of the provider of the certificate"
          />
          <div>
            <p className="card-text-content">{certificate.title}</p>
            <p className="card-text-content text-muted">
              {certificate.completion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCertificates;
