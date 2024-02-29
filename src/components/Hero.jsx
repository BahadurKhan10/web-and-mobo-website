import React from 'react';
import '../styles/hero.css';
import HeroImage from '../assets/hero-image.png';
import BlurPic from '../assets/blurpic.png';
import heroBg from '../assets/herobg.jpg'; 

const Hero = () => {
  return (
    <>
    <div className="bgcolor" style={{ backgroundImage: `url(${heroBg})`}} >
    <div className="heroMain"data-aos="fade-up" >

  <div className="heroLeft">
    <p className='heroHeading'>We Are The Champ <br/> In Web and Mobo <br /> Development</p>
    <p className='heroParagraph'>We make million of millions website upto the market. We <br/> build design that communicate with the world. </p>
    <button className='heroBtn'>Contact</button>
  </div>
  <div className="heroRight">
    <img className='heroImage' src={HeroImage} height='487px' width='541px' alt="picture" />
    <img src={BlurPic} className="blurPic" alt="blurred" />
  </div>
</div>


    
      </div>
        <div className="statsMain" data-aos="fade-up">
        <div className="statsColumn">
        <p className='statsHeading'>15O <span className='statsPlus'>+</span></p>
          <p className='statsParagraph'>Satisfied Clients</p>
        </div>

        <div className="statsColumn">
        <p className='statsHeading'>15O <span className='statsPlus'>+</span></p>
          <p className='statsParagraph'>Satisfied Clients</p>
        </div>

        <div className="statsColumn">
        <p className='statsHeading'>15O <span className='statsPlus'>+</span></p>
          <p className='statsParagraph'>Satisfied Clients</p>
        </div>

        <div className="statsColumn">
        <p className='statsHeading'>15O <span className='statsPlus'>+</span></p>
          <p className='statsParagraph'>Satisfied Clients</p>
        </div>
      </div>
      </>
  );
}

export default Hero;
