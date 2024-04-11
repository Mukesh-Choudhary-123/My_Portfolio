import React from "react";
import "./about.css";
import bg from "../../assets/myImg.png";
import Lottie from "lottie-react";
import AnimationDAta from "./AnimationData.json";
const about = () => {
  return (
    <section id="about">
      <div className="aboutTitle">
        About <span className="me">Me</span>
      </div>
      <div className="aboutInfo">
        <div className="aboutDesc">
          <p className="para">
            <p>
              <span className="firstLine">
                I am a highly motivated and aspiring computer science and
                engineering student.
              </span>
            </p>
            <br />
            <p>
              <span className="secondLine">
                Currently pursuing my degree in
                <span className="cse">Computer Science and Engineering </span>
                at S.S college of Engineering Approved by AICTE & Affiliated to
                Rajasthan Technical University.
              </span>
            </p>
            <br />
            <p className="thirdLine">
              My passion for learning and staying up-to-date with emerging
              trends drives me to continuously expand my knowledge in areas like
              Java programming language and Data structure and algorithm
            </p>
            <br />
            <p className="fourLine">
              Eager to explore new technologies and acquire new skills that will
              contribute to my growth as a computer science and engineering
              professional.
            </p>
          </p>
        </div>
        <Lottie animationData={AnimationDAta} className="myImg" />
      </div>
    </section>
  );
};

export default about;
