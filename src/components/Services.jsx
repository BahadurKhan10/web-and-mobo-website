import React from 'react'
import "../styles/services.css";
import serviceIcon from '../assets/servicecard-icon.png'
import learnmore from '../assets/learnmore.png'

const Services = () => {
  return (
    <div className="servicesMain" >
                <div className="services-gradient"></div>

        <div className="servicesTop" data-aos="fade-up">
        <p className='servicesHeading'>We provide excellent services</p>
        </div>
        <div className="servicesBottom" data-aos="fade-up">
            <div className="servicesCardDiv">
                <div className="servicesCard">

                    <img className='servicesCardIcon' height='78px' width='57px' src={serviceIcon} alt="icon" />
                    <p className='servicesCardHeading'>Design & Branding Phase</p>
                    <p className='servicesParagraph'>Especially in agile enterprises and startups where there is collaborative and iterative nature of product design and development the importance of Wireframing is more crucial.</p>
                    <div className="serviceslastDiv">
                    <p className='servicesLearnMore'>Learn More About</p>
                    <img src={learnmore} alt="icon" />
                    </div></div>

                    <div className="servicesCard">

<img className='servicesCardIcon' height='78px' width='57px' src={serviceIcon} alt="icon" />
<p className='servicesCardHeading'>Design & Branding Phase</p>
<p className='servicesParagraph'>Especially in agile enterprises and startups where there is collaborative and iterative nature of product design and development the importance of Wireframing is more crucial.</p>
<div className="serviceslastDiv">
<p className='servicesLearnMore'>Learn More About</p>
<img src={learnmore} alt="icon" />
</div></div>

<div className="servicesCard">

<img className='servicesCardIcon' height='78px' width='57px' src={serviceIcon} alt="icon" />
<p className='servicesCardHeading'>Design & Branding Phase</p>
<p className='servicesParagraph'>Especially in agile enterprises and startups where there is collaborative and iterative nature of product design and development the importance of Wireframing is more crucial.</p>
<div className="serviceslastDiv">
<p className='servicesLearnMore'>Learn More About</p>
<img src={learnmore} alt="icon" />
</div></div>

<div className="servicesCard">

<img className='servicesCardIcon' height='78px' width='57px' src={serviceIcon} alt="icon" />
<p className='servicesCardHeading'>Design & Branding Phase</p>
<p className='servicesParagraph'>Especially in agile enterprises and startups where there is collaborative and iterative nature of product design and development the importance of Wireframing is more crucial.</p>
<div className="serviceslastDiv">
<p className='servicesLearnMore'>Learn More About</p>
<img src={learnmore} alt="icon" />
</div></div>

<div className="servicesCard">

<img className='servicesCardIcon' height='78px' width='57px' src={serviceIcon} alt="icon" />
<p className='servicesCardHeading'>Design & Branding Phase</p>
<p className='servicesParagraph'>Especially in agile enterprises and startups where there is collaborative and iterative nature of product design and development the importance of Wireframing is more crucial.</p>
<div className="serviceslastDiv">
<p className='servicesLearnMore'>Learn More About</p>
<img src={learnmore} alt="icon" />
</div></div>

<div className="servicesCard">

<img className='servicesCardIcon' height='78px' width='57px' src={serviceIcon} alt="icon" />
<p className='servicesCardHeading'>Design & Branding Phase</p>
<p className='servicesParagraph'>Especially in agile enterprises and startups where there is collaborative and iterative nature of product design and development the importance of Wireframing is more crucial.</p>
<div className="serviceslastDiv">
<p className='servicesLearnMore'>Learn More About</p>
<img src={learnmore} alt="icon" />
</div></div>

            </div>
        </div>

    </div>
  )
}

export default Services