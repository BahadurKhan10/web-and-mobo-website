import React from "react";
import smcImage from "../assets/smc-image.png";
import "../styles/smc.css";

const Smc = () => {
  return (
    <div className="smcMain">
              <div className="smc-gradient"></div>

      <div className="smcLeft" data-aos="fade-right">
      <p className="smcHeading">
          A Revolution Productivity <br /> Assistant For Better Design <br />{" "}
          Experience In Modern Time
        </p>
        <p className="smcParagraph">
          Twists texts. Sacred, on are the subjective two is to helped over the <br/>
          there anyone that to the design sleep caching decades turner.<br/>
          Influenced name based at divided bed maybe broader a the took<br/>
          discharge man kind affects times didn't the personalities precipitate,<br/>
          but eyes. Guard the known who thought.{" "}
        </p>
        <button className="smcBtn">Contact</button>
      </div>
      <div className="smcRight" data-aos="fade-left">

      <img className="smcImage" src={smcImage} height="792px" width="700px" alt="picture" />
       
      </div>
    </div>
  );
};

export default Smc;
