import phone from "./images/phone.png";
import email from "./images/email.png";
import address from "./images/address.png";
import "./css/about.css";

// Stateless Functional Component
const About = () => (
  <div className="row">
    <div className="col-sm-3">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Contact information</h5>
          <div className="card-text contact-wrapper">
            <img src={phone} className="contactLogo" alt="Phone logo" />
            <p className="card-text mx-3">0497 65 89 64</p>
          </div>
          <div className="card-text contact-wrapper">
            <img src={email} className="contactLogo" alt="Phone logo" />
            <p className="card-text mx-3">max.wattez@protonmail.com</p>
          </div>
          <div className="card-text contact-wrapper">
            <img src={address} className="contactLogo" alt="Phone logo" />
            <p className="card-text mx-3">
              Rue du Marché, 46
              <br />
              1210 - Brussels
            </p>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Higher Education</h5>
          <div className="card-text">
            <h5 className="smallTitle">Cultural Management</h5>
            <p className="card-text-content">
              <b>University Master's</b>
              <br />
              Université Libre de Bruxelles, 2015
            </p>
            <h5 className="smallTitle">Translation English-Chinese</h5>
            <p className="card-text-content">
              <b>University Bachelor's</b>
              <br />
              Institut Libre Marie-Haps, 2011
            </p>
            <h5 className="smallTitle">Exchange Programs</h5>
            <p className="card-text-content">
              <b>Cardiff University (UK)</b>
              <br />
              2010 - 2011 (6 months)
            </p>
            <p className="card-text-content">
              <b>Beijing Foreign Language University (China)</b>
              <br />
              2009 - 2010 (6 months)
            </p>
            <h5 className="smallTitle">Language Classes</h5>
            <p className="card-text-content">
              <b>Yoshida Institute of Japanese Language (Japan)</b>
              <br />
              2019 (6 months)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-9">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Professional Profile</h5>
          <div className="card-text">
            <p>
              I am an organized, creative and solution oriented python developer
              who believes that process optimization is the key to an efficient
              business.
            </p>
            <p>
              After having worked with data for several years in different
              sectors (CSO, Project Management, Data Cleansing), I have decided
              to devote myself to software development. My prior experiences
              helped me acquire an analytical mindset and allows me to better
              understand the needs and professional habits of clients.
            </p>
            <p>
              Being very keen on learning, I love to undertake custom
              client-projects.
            </p>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <div className="card-text">
            <p>
              I am a musician. I play bass, piano and I sing. Also I compose my
              own songs. Over the years I've been building and playing in a lot
              of bands which I thoroughly enjoy.
            </p>
            <p>
              I love sports. My favorite: rock-climbing. I'm climbing at least
              once a week, but preferably two. I feel really attracted by the
              mental challenges that you need to overcome in order to climb some
              routes.
            </p>
            <p>
              I am a rolist. In other words, I play tabletop RPGs with friends.
              I take turns being a player and a GM. I find it very interesting
              to be able to play a game where your actions are only limited by
              your own imagination. Very often it requires some serious puzzling
              and social skills to complete a campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
