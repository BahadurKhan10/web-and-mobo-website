import React from 'react'
import '../styles/newsletter.css';
import circleSvg from '../assets/circles.svg';
import newsletter1 from '../assets/newsletter1.png';
import newsletter2 from '../assets/newsletter2.png';

const Newsletter = () => {
  return (

    
    <div className="newsletterMain" data-aos="fade-up">
                        <div className="newsletter-gradient"></div>

        <div className="smallLeft">
        <p className='patchText2'><img src={newsletter2} alt="patch" />&nbsp;&nbsp; New Events!</p>
        <hr style={{ borderColor: "#8080807a" }} />
        <p className='creatorText'>Creators Days</p>
        <button className='joinNowButton'>Join Now →</button>
        </div>
        
        <div className="newsletterSecond">

        
        <p className='newsletterHeading'>Exclusive Newsletter</p>
        <p className='newsletterParagraph'>Stay up to date on new releases, interviews, events, and <br/> updates from Exclusi_ve’s community.</p>
        <button className='subscribeButton'>Subscribe Now ↗</button>
        <p className='spamText'>We won’t spam you, chill.</p>
    </div>
    
    <div className="smallRight">
        <p className='patchText'><img src={newsletter1} alt="patch" />&nbsp;&nbsp; Patch Update 14.6</p>
        <button className='updateLogButton'>Update Log →</button>
        </div>


        </div>
  )
}

export default Newsletter