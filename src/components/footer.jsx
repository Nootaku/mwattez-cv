// Stateless Functional Component
const Footer = () => (
  <footer className="container-fluid footer-div py-3">
    <div className="row row-cols-auto justify-content-center">
      <div className="col justify-content-center">
        <small>
          Contact me:{" "}
          <a href="mailto:max.wattez@protonmail.com?subject=JOB: <YourCompany> <OfferedPosition>">
            max.wattez@protonmail.com
          </a>
        </small>
      </div>
    </div>
    <div className="row row-cols-auto justify-content-center">
      <div className="col gx-5">
        <small>Last updated: July 2021</small>
      </div>
      <div className="col gx-5">
        <small>Created with React</small>
      </div>
    </div>
  </footer>
);

export default Footer;
