import React from "react";
import "./footer.css";
import LinkedinIcon from "../../assets/ss4.png";
import GitHubIcon from "../../assets/ss2.png";
import Linkedin from "./Animation1.json";
import github from "./Animation3.json";
import Lottie from "lottie-react";
const footer = () => {
  function handleToScrollTop() {
    const scrollStep = -window.scrollY / (1000 / 15); // 500ms duration for smooth scrolling
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
  return (
    <div className="footer">
      <div className="SocialLink">
        <div className="note">
          Connect With <span className="me">Me</span>
        </div>
        <a
          href="https://www.linkedin.com/in/choudhary-mukesh/"
          target="relative"
        >
          {/* <img src={LinkedinIcon} alt="linkedin" className="Icon" /> */}
          <Lottie className="Icon" animationData={github} />
        </a>
        <a href="https://github.com/Mukesh-Choudhary-123" target="relative">
          {/* <img src={GitHubIcon} alt="github" className="Icon" /> */}
          <Lottie className="Icon" animationData={Linkedin} />
        </a>
      </div>
      <div className="allText">
        <div className="text">Copyright &#169; 2024 All right received.</div>
        <div className="text text2">
          Made with <span className="heartemoji">❤</span> By Mukesh Choudhary.
        </div>
      </div>
      <button className="scrollBtn" onClick={handleToScrollTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default footer;
