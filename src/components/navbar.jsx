import "./navbar.css";

// Stateless Functional Component
const Navbar = props => (
  <nav className="navbar-element">
    <div className="" id="navbarNav">
      <ul className="navbar-item">
        <li className="nav-item">
          <button
            onClick={() => props.onChangeContent("about")}
            className="nav-button"
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => props.onChangeContent("experiences")}
            className="nav-button"
          >
            Experiences
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => props.onChangeContent("skillset")}
            className="nav-button"
          >
            Skillset
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
