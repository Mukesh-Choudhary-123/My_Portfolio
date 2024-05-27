import React, { useState } from "react";
import "./works.css";
import ApnaMarket from "../../assets/Img2.png";
import CRUDApp from "../../assets/img5.png";
import chatappImg from "../../assets/img4.png";
import LinkIcon from "@mui/icons-material/Link";
import BuildIcon from "@mui/icons-material/Build";
const works = () => {
  const [showDescription, setShowDescription] = useState(true);

  const handleMouseOver = () => {
    setShowDescription(false);
  };

  const handleMouseOut = () => {
    setShowDescription(true);
  };

  return (
    <section id="works">
      <h2 className="worksTitle">
        <span className="my">My</span> Projects
      </h2>
      <span className={`worksDesc ${showDescription ? "" : "hidden"}`}>
        I take in palying attention to the smallest details and making sure that
        my work is pixel perfect. I am excited to bring my skills and experience
        to help businesse achieve their goals and create a strong.
      </span>

      <div className="container">
        <div
          className="card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="imgBx">
            <img src={ApnaMarket} />
          </div>
          <div className="content">
            <h2>Apna Market</h2>
            <div className="features">
              Authentication via <span className="my">Passport JS</span> <br />
              Payments via <span className="my">Stripe</span>
              <br />
              REST API Auth via <span className="my">Passport JWT</span>
              <br />
              Email via
              <span className="my"> Nodemailer</span>
              <br />
              Redux Toolkit with
              <span className="my"> Async Thunk</span>
              <br />
              Mongoose
              <span className="my"> Models</span>
            </div>
            <div className="Links">
              <a
                href="https://github.com/Mukesh-Choudhary-123/Apna_Market/tree/main"
                target="absolute"
              >
                <button className="LinkBtn">
                  <BuildIcon />
                </button>
              </a>

              <a href="#" target="absolute">
                <button className="LinkBtn">
                  <LinkIcon />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="imgBx">
            <img src={chatappImg} />
          </div>
          <div className="content">
            <h2>Baat Karlo</h2>
            <div className="features">
              Authentication via <span className="my">Passport JS</span> <br />
              Payments via <span className="my">Stripe</span>
              <br />
              REST API Auth via <span className="my">Passport JWT</span>
              <br />
              Email via
              <span className="my"> Nodemailer</span>
              <br />
              Redux Toolkit with
              <span className="my"> Async Thunk</span>
              <br />
              Mongoose
              <span className="my"> Models</span>
            </div>
            <div className="Links">
              <a
                href="https://github.com/Mukesh-Choudhary-123/Baat_Karlo"
                target="absolute"
              >
                <button className="LinkBtn">
                  <BuildIcon />
                </button>
              </a>

              <a
                href="https://baatkarlo-chat-app.vercel.app/login"
                target="absolute"
              >
                <button className="LinkBtn">
                  <LinkIcon />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="imgBx">
            <img src={CRUDApp} />
          </div>
          <div className="content">
            <h2>CRUD App</h2>
            <div className="features">
              Authentication via <span className="my">Passport JS</span> <br />
              Payments via <span className="my">Stripe</span>
              <br />
              REST API Auth via <span className="my">Passport JWT</span>
              <br />
              Email via
              <span className="my"> Nodemailer</span>
              <br />
              Redux Toolkit with
              <span className="my"> Async Thunk</span>
              <br />
              Mongoose
              <span className="my"> Models</span>
            </div>
            <div className="Links">
              <a
                href="https://github.com/Mukesh-Choudhary-123/Apna_Market/tree/main"
                target="absolute"
              >
                <button className="LinkBtn">
                  <BuildIcon />
                </button>
              </a>

              <a href="#" target="absolute">
                <button className="LinkBtn">
                  <LinkIcon />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default works;
