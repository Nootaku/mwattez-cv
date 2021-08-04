import React, { Component } from "react";
import AboutCard from "./about/aboutCard";
import contactInfo from "./data/contact.json";
import aboutData from "./data/about.json";
import phone from "./images/phone.png";
import email from "./images/email.png";
import address from "./images/address.png";
import "./css/about.css";

class About extends Component {
  render() {
    console.log(aboutData);
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Contact information</h5>
              <div className="card-text contact-wrapper">
                <img src={phone} className="contactLogo" alt="Phone logo" />
                <p className="card-text mx-3">{contactInfo.phone}</p>
              </div>
              <div className="card-text contact-wrapper">
                <img src={email} className="contactLogo" alt="Phone logo" />
                <p className="card-text mx-3">{contactInfo.email}</p>
              </div>
              <div className="card-text contact-wrapper">
                <img src={address} className="contactLogo" alt="Phone logo" />
                <p className="card-text mx-3">
                  {contactInfo.address1}
                  <br />
                  {contactInfo.address2}
                </p>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <AboutCard
              title="Higher Education"
              content={aboutData}
              type="education"
            />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="card mb-3">
            <div className="card-body">
              <AboutCard
                title="Professional Profile"
                content={aboutData}
                type="profile"
              />
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <AboutCard title="Who am I ?" content={aboutData} type="whoami" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
