import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function handleScrollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Skils
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            About Me
          </Link>
        </div>
        <Link
          to="contact"
          smooth={true}
          offset={-100}
          duration={1000}
          className="contactBtn"
        >
          <span className="jugad">
            <img src={contact} alt="contact" className="desktopMenuImg" />
            Contact Me
          </span>
        </Link>
        {/* ==================================================================== */}
        <img
          src={Menu}
          alt="logo"
          className="burgrmenulogo"
          onClick={() => setShowMenu(!showMenu)}
        />

        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Skils
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About Me
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
        </div>
      </nav>
      <div className="scroll-progress-tracking-container">
        <div
          className="current-progress-bar"
          style={{ width: `${scrollPercentage}` + "%" }}
        >
          {console.log(scrollPercentage)}
        </div>
      </div>
    </>
  );
};

export default navbar;
