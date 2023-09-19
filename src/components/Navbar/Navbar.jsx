import { useContext } from "react";
import AboutMe from "../About Me/AboutMe";
import style from "../Navbar/Navbar.module.css";
import { Link } from "react-scroll";

import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/langContext";

const Navbar = () => {
  const idioma = useContext(langContext);

  return (
    <nav className={style.containerNav}>
      <section className={style.logoNav}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5450/5450925.png"
          alt=""
        />
        <Link to="/" spy={true} smooth={true} offset={50} duration={1500}>
          <h1>Gulliano Jaimes</h1>
        </Link>
        {/* <a href="/">
          <h1>Gulliano Jaimes</h1>
        </a> */}
      </section>

      <section className={style.infoNav}>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              <FormattedMessage id="nav.aboutme" defaultMessage="Sobre Mi" />
            </Link>
            {/* <a href="#about">About Me</a> */}
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={100}
              duration={1500}
            >
              <FormattedMessage id="nav.projects" defaultMessage="Proyectos" />
            </Link>
            {/* <a href="#projects">Projects</a> */}
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              <FormattedMessage id="nav.skills" defaultMessage="Habilidades " />
            </Link>
            {/* <a href="#skills">Tech Skills</a> */}
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={2000}
            >
              <FormattedMessage id="nav.contact" defaultMessage="Contactame" />
            </Link>
            {/* <a href="#contact">Contact Me</a> */}
          </li>
        </ul>
        <button onClick={() => idioma.langChange("es-ES")}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/330/330557.png"
            alt=""
          />
        </button>
        <button className={style.en} onClick={() => idioma.langChange("en-US")}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
            alt=""
          />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
