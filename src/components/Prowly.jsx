import React from 'react'
import "../styles/prowly.css";
import prowlyPic from "../assets/prowly.png";
import ceoPic from "../assets/ceopic.png";
import arrowPic from "../assets/arrows.png";

const Prowly = () => {
  return (
    <div className="prowlyMain">
                <div className="prowly-gradient"></div>

        <div className="prowlyLeft" data-aos="fade-right">
            <p className='prowlyHeading'>How Medstar Media used <br/>Prowly to land 150 <br/> publications..</p>
            <p className='prowlyParagraph'>I love Prowly. Your service helped locate the press <br/>contacts I needed to make a breast cancer awareness<br/> video we did go viral. My mom is a survivor. We were able<br/> to spread the word because you made.</p>
            <div className="inner">
            <img className="ceoPic" src={ceoPic} alt="pic" />
                <div className="inner2">
                <p className="ceoText">Robert Fox</p>
    <p className="companyText">CEO, Parkview Int. Ltd.</p>

                </div>


                <img className="arrowIcon" height='62px' width='161px' src={arrowPic} alt="icons" />

            </div>
        </div>
        <div className="prowlyRight" data-aos="fade-left">
            <img className='prowlyImage' src={prowlyPic} height="500px" width="600px" alt='pic' />
        </div>
    </div>
  )
}

export default Prowly