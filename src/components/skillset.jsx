import starFull from "./images/star_full.png";
import starEmpty from "./images/star_empty.png";
import "./css/skillset.css";

// Stateless Functional Component
const Skillset = () => (
  <div className="row">
    <div className="col-sm-3">
      <div className="card mb-3">
        <div className="card-header">Languages</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item starred-item">
            <span>French</span>
            <span>
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
            </span>
          </li>
          <li className="list-group-item starred-item">
            <span>English</span>
            <span>
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
            </span>
          </li>
          <li className="list-group-item starred-item">
            <span>Dutch</span>
            <span>
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
            </span>
          </li>
          <li className="list-group-item starred-item">
            <span>Chinese</span>
            <span>
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starEmpty} alt="Star Empty" />
              <img className="star" src={starEmpty} alt="Star Empty" />
            </span>
          </li>
          <li className="list-group-item starred-item">
            <span>Japanese</span>
            <span>
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starFull} alt="Star Full" />
              <img className="star" src={starEmpty} alt="Star Empty" />
              <img className="star" src={starEmpty} alt="Star Empty" />
              <img className="star" src={starEmpty} alt="Star Empty" />
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card mb-3">
        <div className="card-header">Technical Stack</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            DevOps:
            <br />
            AWS, Terraform, Ansible, bash, TCP / IP, HTTPS (Let's Encrypt),
            Docker
          </li>
          <li className="list-group-item">
            Python3:
            <br />
            Flask, pandas, Numpy, pyTest, unittest, openpyxl, Tensorflow, Keras,
            pymongo
          </li>
          <li className="list-group-item">
            Javascript:
            <br />
            Node.js, Vue.js, Typescript, React, Express.js
          </li>
          <li className="list-group-item">
            Databases:
            <br />
            MongoDB, SQLite, GraphQL, PostgreSQL, influxDB, Grafana,
            Elasticsearch
          </li>
          <li className="list-group-item">
            Web:
            <br />
            HTML5, CSS3, Sass, (vanila) Javascript, PHP
          </li>
        </ul>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card mb-3">
        <div className="card-header">Other IT-skills</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Linux</li>
          <li className="list-group-item">Git, GitHub, GitLab</li>
          <li className="list-group-item">
            Excel, Word, Powerpoint, VBA-scripting
          </li>
          <li className="list-group-item">Gimp, Inkscape</li>
          <li className="list-group-item">Kdenlive</li>
        </ul>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="card mb-3">
        <div className="card-header">Softskills</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Polite</li>
          <li className="list-group-item">Friendly, helpful</li>
          <li className="list-group-item">
            Both autonomous and capable of working in a team.
          </li>
          <li className="list-group-item">Analytical mindset</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skillset;
