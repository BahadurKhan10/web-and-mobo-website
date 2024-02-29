import React from "react";
import revolutionImage from "../assets/revolution-image.png";
import "../styles/revolution.css";
import BlurPic from '../assets/revolution-blur.png';

const Revolution = () => {
  return (
    <>
      <div className="revolutionMain" data-aos="fade-up">
        <div className="revolution-gradient"></div>
        <div className="revolutionLeft">

          <img className="revolutionImage" src={revolutionImage} height="465px" width="571px" alt="picture" />
          <img src={BlurPic} className="blurRevoPic" alt="blurred" />

        </div>
        <div className="revolutionRight">
          <p className="revolutionHeading">
            A Revolution Productivity <br /> Assistant For Better Design <br /> Experience In Modern Time
          </p>
          <p className="revolutionParagraph">
            Twists texts. Sacred, on are the subjective two is to helped over the 
            there<br/> anyone that to the design sleep caching decades turner.
            Influenced name .<br/>based at divided bed maybe broader a the took
            discharge man kind affects<br/> times didn't the personalities precipitate,
            but eyes. Guard the known who<br/> thought.
          </p>
          <button className="revoBtn">Contact</button>
        </div>
        
      </div>
    </>
  );
};

export default Revolution;
