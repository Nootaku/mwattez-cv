import React, { Component } from "react";
import pdfResume from "../data/mwattez_cv.pdf";

class ExperienceDownloadPdf extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="container d-flex flex-column align-items-center p-3 mb-3 downloadWrapper">
          <a href={pdfResume} download>
            <button className="downloadPDF">Click here</button>
          </a>{" "}
          <p className="small downloadText">
            to download a pdf-version of my CV.
          </p>
        </div>
        <div className="toggleHelp">
          <p>
            By clicking on the title of each experience you will toggle the
            experience details.
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceDownloadPdf;
