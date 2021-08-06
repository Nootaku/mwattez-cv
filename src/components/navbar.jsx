import "./css/navbar.css";

// Stateless Functional Component
const Navbar = (props) => (
  <nav className="navbar-element position-sticky sticky-top">
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
        <li className="nav-item">
          <button
            onClick={() => {
              window.location =
                "mailto:max.wattez@protonmail.com?subject=JOB: <YourCompany> <OfferedPosition>";
            }}
            className="nav-button sendMailBtn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
