import React from 'react'
import "../styles/aboutus.css";
import review1 from '../assets/review1.png'
import stars from '../assets/stars.png'
const Aboutus = () => {
  return (
    <div className="aboutusMain">
                {/* <div className="aboutus-gradient"></div> */}

        <div className="aboutusTop" data-aos="fade-up">
            <p className='aboutusHeading'>People About us</p>
            <p className='aboutusParagraph'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br/> nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br/> officia deserunt mollit anim id est laborum."</p>
            <p></p>
        </div>
        <div className="aboutusBottom" data-aos="fade-up">
            <div className="aboutusCard">
            <div className="innerabout">
                <img src={review1} alt="pic" />
                <div className="inner2about">
                <p style={{marginTop:"0px", marginBottom:"3px", fontSize:"19px", fontFamily:"satoshi", }}>Leslie Alexander</p>
                <p style={{marginTop:"0px", marginBottom:"0px", fontSize:"18px", fontFamily:"satoshi",}}>CEO, Parkview Int. Ltd.</p>
                <img height='24px' width='95px' src={stars} alt="pic" />
                </div>
                
                </div>
                <p className='reviewCardParagraph'>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids.</p>


            </div>  

            <div className="aboutusCard2">
            <div className="innerabout">
                <img src={review1} alt="pic" />
                <div className="inner2about">
                <p style={{marginTop:"0px", marginBottom:"3px", fontSize:"19px", fontFamily:"inter", }}>Leslie Alexander</p>
                <p style={{marginTop:"0px", marginBottom:"0px", fontSize:"18px", fontFamily:"inter",}}>CEO, Parkview Int. Ltd.</p>
                <img height='24px' width='95px' src={stars} alt="pic" />
                </div>
                
                </div>
                <p className='reviewCardParagraph2'>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids.</p>


            </div>  

            <div className="aboutusCard">
            <div className="innerabout">
                <img src={review1} alt="pic" />
                <div className="inner2about">
                <p style={{marginTop:"0px", marginBottom:"3px", fontSize:"19px", fontFamily:"inter", }}>Leslie Alexander</p>
                <p style={{marginTop:"0px", marginBottom:"0px", fontSize:"18px", fontFamily:"inter",}}>CEO, Parkview Int. Ltd.</p>
                <img height='24px' width='95px' src={stars} alt="pic" />
                </div>
                
                </div>
                <p className='reviewCardParagraph'>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids.</p>


            </div>  


        </div>
    </div>
  )
}

export default Aboutus