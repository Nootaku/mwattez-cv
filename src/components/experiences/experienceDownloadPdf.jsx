import React, { Component } from "react";
import pdfResume from "../data/mwattez_cv.pdf";

class ExperienceDownloadPdf extends Component {
  render() {
    return (
      <div>
        <p>
          Click{" "}
          <a href={pdfResume} download>
            <button className="downloadPDF">here</button>
          </a>{" "}
          to download a pdf-version of my CV.
        </p>
      </div>
    );
  }
}

export default ExperienceDownloadPdf;
