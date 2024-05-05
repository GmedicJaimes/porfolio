import { useContext } from "react";
import "../Navbar/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

const Navbar = () => {
  const idioma = useContext(langContext);

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 940) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`containerNav ${navActive ? "active" : ""}`}>
      <div className="logoNav">
        <Link
          onClick={closeMenu}
          activeClass="navbar--active-content"
          className="navbarLogo"
          to="/"
          spy={true}
          smooth={true}
          offset={50}
          duration={1500}
        >
          <img src="./src/assets/foto3.png" alt="" />
          <h1>Gulliano Jaimes</h1>
        </Link>
      </div>

      <a
        className={`nav__hamburguer ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav_line"></span>
        <span className="nav_line"></span>
        <span className="nav_line"></span>
      </a>

      <div className="containerNavSections">
        <div className={`infoNav ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                Sobre mi
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="projects"
                spy={true}
                smooth={true}
                offset={100}
                duration={1500}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                className="navbar--content"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={2000}
              >
                <FormattedMessage
                  id="nav.contact"
                  defaultMessage="Contact Me"
                />
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="infoButton">
          <button onClick={() => idioma.langChange("es-ES")}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/330/330557.png"
              alt=""
              loading="lazy"
            />
          </button>
          <button className="en" onClick={() => idioma.langChange("en-US")}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
              alt=""
              loading="lazy"
            />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
