import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import MailAnimation from "./MessageAnimation.json";
import "./contact.css";
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ov4bqib", "template_vg7rv2m", form.current, {
        publicKey: "uvSq_tIFla9ZaTqW0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="MsgAnimation">
        <Lottie animationData={MailAnimation} className="Animation" />
      </div>
      <div className="from">
        <h1 className="contactTitle">
          Contact <span className="me">Me</span>
        </h1>
        <span className="contactDesc">
          please fill out the form below to discuss any work opportunies.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="user_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="user_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
