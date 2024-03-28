import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <li>
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li>
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li>
                <a href="#project" className="nav__link">
                  <i className="icon-icon-briefcase"></i>
                </a>
              </li>

              <li>
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li>
                <a href="#portfolio" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li>
                <a href="#blog" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>

              <li>
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">
          &copy; Borey Lon - {new Date().getFullYear()}
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
