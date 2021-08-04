import React from "react";
import contactInfo from "../data/contact.json";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";

const AboutContactItem = (props) => {
  let makePhone = () => (
    <React.Fragment>
      <img src={phone} className="contactLogo" alt="Phone logo" />
      <p className="card-text mx-3">{contactInfo.phone}</p>
    </React.Fragment>
  );

  let makeEmail = () => (
    <React.Fragment>
      <img src={email} className="contactLogo" alt="Phone logo" />
      <p className="card-text mx-3">{contactInfo.email}</p>
    </React.Fragment>
  );

  let makeAddress = () => (
    <React.Fragment>
      <img src={address} className="contactLogo" alt="Phone logo" />
      <p className="card-text mx-3">
        {contactInfo.address1}
        <br />
        {contactInfo.address2}
      </p>
    </React.Fragment>
  );

  const itemTypes = {
    phone: makePhone(),
    email: makeEmail(),
    address: makeAddress(),
  };

  let buildItem = (type) => {
    return itemTypes[type];
  };

  return buildItem(props.type);
};

export default AboutContactItem;
