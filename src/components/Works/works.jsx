import React, { useState } from "react";
import "./works.css";
import ApnaMarket from "../../assets/Img2.png";
import CRUDApp from "../../assets/img5.png";
import chatappImg from "../../assets/img4.png";
const works = () => {
  const [showDescription, setShowDescription] = useState(true); // Initially showing description

  const handleMouseOver = () => {
    setShowDescription(false); // Hide description on mouse over
  };

  const handleMouseOut = () => {
    setShowDescription(true); // Show description on mouse out
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              mollitia unde eaque ducimus numquam facere cum consequuntur
              doloremque.
            </p>
            <a href="#">Read More</a>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              mollitia unde eaque ducimus numquam facere cum consequuntur
              doloremque.
            </p>
            <a href="#">Read More</a>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              mollitia unde eaque ducimus numquam facere cum consequuntur
              doloremque.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default works;

{
  /* <span className="worksDesc">
        I take in palying attention to the smallest details and making sure that
        my work is pixel perfect. I am excited to bring my skills and experience
        to help businesse achieve their goals and create a strong online
        presence.
      </span> */
}
{
  /* <div className="worksImgs">
        <div className="workCard">
          <img src={Img2} alt="Img" className="worksImg" />
          <h3 className="workCardheading">Apna Market</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            odio.
          </p>
        </div>
        <div className="workCard">
          <img src={Img1} alt="Img" className="worksImg" />
          <h3 className="workCardheading">Baat Karlo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            odio.
          </p>
        </div>
        <div className="workCard">
          <img src={Img3} alt="Img" className="worksImg" />
          <h3 className="workCardheading">Ding Link</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
            odio.
          </p>
        </div>
      </div> */
}
