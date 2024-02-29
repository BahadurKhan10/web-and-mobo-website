import React from 'react';
import '../styles/chooseplan.css';
import Underline from '../assets/chooseplan.png';
import tick from '../assets/tick.png';

const ChoosePlan = () => {
  return (
    <div className="chooseplanMain">
      <div className="chooseplan-gradient"></div>
      <div className="chooseplan2-gradient"></div>

      <div className="chooseplanTop" data-aos="fade-up">
        <p className="chooseplanHeading">Choose the plan</p>
        <img className="underline" src={Underline} alt="underline" />
      </div>
      <div className="chooseplanBottom" data-aos="fade-up">
        {/* Card 1 */}
        <div className="chooseplanCard">
          <div className="marginContainer">
            <p className='numText'>$25 <span className='spanText'>{" "}/Month</span></p>
            <img className="underline2" src={Underline} alt="underline" />

            <p className='basicText'>Basic</p>
            <p className='basicParaText'>All the basics for businesses that are just <br /> getting started.</p>

            <hr className='hrClass'></hr>

            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>

            <button className='getStarted'>Get Started</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="chooseplanCard">
          <div className="marginContainer">
            <p className='numText'>$65 <span className='spanText'>{" "}/Month</span></p>
            <img className="underline2" src={Underline} alt="underline" />

            <p className='basicText'>Standard</p>
            <p className='basicParaText'>All the basics for businesses that are just <br /> getting started.</p>

            <hr className='hrClass'></hr>

            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>

            <button className='getStarted'>Get Started</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="chooseplanCard">
          <div className="marginContainer">
            <p className='numText'>$85 <span className='spanText'>{" "}/Month</span></p>
            <img className="underline2" src={Underline} alt="underline" />

            <p className='basicText'>Premium</p>
            <p className='basicParaText'>All the basics for businesses that are just <br /> getting started.</p>

            <hr className='hrClass'></hr>

            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>
            <p className='pointsText'><span><img style={{ marginTop: "11px" }} src={tick} alt="" /></span>Organizes your travel Plans</p>

            <button className='getStarted'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChoosePlan;
