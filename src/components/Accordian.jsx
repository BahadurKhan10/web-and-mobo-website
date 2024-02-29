import React from 'react';
import '../styles/accordian.css';
import AccordianImage from '../assets/accordian.png';
import AccordianUsage from './AccordianUsage';

const Accordian = () => {
  return (
    <div className="accordianMain" >
                <div className="accordian-gradient"></div>

      <div className="accordianLeft" data-aos="fade-right" >
        
        <p className='accordianHeading'>Prove the real <br/> business Roi of social <br/> media</p>
        {/* Use the AccordionUsage component here */}
        <AccordianUsage />
      </div>
      <div className="accordianRight" data-aos="fade-left">
      <img className='accordianImage' height='639px' width='611px'  src={AccordianImage} alt="pic" />
      </div>
    </div>
  );
}

export default Accordian;
