import React, { useEffect, useState } from "react";
import "./skills.css";

import html from "../../assets/html_logo.png";
import css from "../../assets/css.png";
import js from "../../assets/js_logo.png";
import SQL from "../../assets/sql_logo.png";
import MONGODB from "../../assets/mongodb_logo.png";
import GIT from "../../assets/git_logo.png";
import github from "../../assets/github_logo.png";
import vs from "../../assets/vs_logo.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import java from "../../assets/java.png";
import redux from "../../assets/redux.jpeg";

const skills = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  return (
    <section id="skills">
      <span className={`skillTitel ${isTyping ? "typing" : ""}`}>
        <span className="my">My</span> Skills
      </span>
      <span className="skillDesc">
        I am a skilled and passionate web developer proficient in HTML, CSS, and
        JavaScript, as well as React.js. For backend development, I am
        proficient in SQL, MongoDB, Node.js, Express, and Redux.
      </span>

      <div className="devIcons">
        <img
          src={java}
          alt="java logo"
          className="deviconImg javaImg animated4"
        />
        <img
          src={html}
          alt="html logo"
          className="deviconImg htmlImg animated4"
        />
        <img src={css} alt="css logo" className="deviconImg cssImg animated4" />
        <img src={js} alt="js logo" className="deviconImg jsImg animated4" />
        <img
          src={node}
          alt="node logo"
          className="deviconImg nodeImg animated4"
        />
        <img
          src={react}
          alt="react logo"
          className="deviconImg reactImg animated4"
        />
        <img
          src={redux}
          alt="react logo"
          className="deviconImg reduxImg animated4"
        />

        <img src={SQL} alt="sql" className="dbiconsImg animated4" />
        <img src={MONGODB} alt="mongodb" className="dbiconsImg animated4" />

        <img src={GIT} alt="git" className="toolsiconImg gitImg animated4" />
        <img
          src={github}
          alt="github"
          className="toolsiconImg githubImg animated4"
        />
        <img src={vs} alt="github" className="toolsiconImg vsImg animated4" />
      </div>
    </section>
  );
};

export default skills;
