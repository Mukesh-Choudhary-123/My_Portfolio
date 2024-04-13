import React, { useEffect, useState } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import animationData from "./Animation.json";
import { Cursor } from "react-simple-typewriter";
const hero = () => {
  const words = ["Full Stack Developer", "Programmer"];
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [deleteSpeed, setDeleteSpeed] = useState(200);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentWord((prevWord) => {
          if (!isDeleting) {
            if (prevWord === words[index]) {
              setIsDeleting(true);
              setTypingSpeed(0);
              setDeleteSpeed(200);
            } else {
              return words[index].substring(0, prevWord.length + 1);
            }
          } else {
            if (prevWord === "") {
              setIsDeleting(false);
              setIndex((prevIndex) => (prevIndex + 1) % words.length);
              setTypingSpeed(120);
              setDeleteSpeed(0);
            } else {
              return prevWord.substring(0, prevWord.length - 1);
            }
          }
          return prevWord;
        });
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, [index, isDeleting, words, typingSpeed, deleteSpeed]);

  return (
    <>
      <section id="intro">
        <div className="heroContainer">
          <div className="intoContent">
            <span className="hello">Hello,</span>
            <span className="introText">
              I'm <span className="introName">Mukesh Choudhary</span>
            </span>
            <span>
              {currentWord} <Cursor cursorStyle="|" cursorColor="yellow" />
            </span>

            <p className="introPara">
              As a full stack developer, I specialize in crafting <br /> dynamic
              and efficient web solutions.
            </p>
          </div>
        </div>
        <Lottie animationData={animationData} className="bg" />
      </section>
    </>
  );
};

export default hero;
