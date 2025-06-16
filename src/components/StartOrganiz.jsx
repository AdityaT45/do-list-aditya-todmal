import React from 'react'

import mobile from '../assets/images/mobile.png'
const StartOrganiz = () => {
  return (
    <>
    <div className="homepage-StartOrganiz-container">
  <div className="row align-items-center">
    {/* Image Column */}
    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
      <img src={mobile} className="homepage-StartOrganiz-image img-fluid" />
    </div>

    {/* Text Content Column */}
    <div className="col-12 col-md-6">
      <div className="homepage-StartOrganiz-container-right text-center text-md-start">
        <p className="homepage-StartOrganiz-heading">
          Start Organizing Your Life Today
        </p>
        <p className="homepage-StartOrganiz-description">
          Join us now and transform your productivity with our intuitive to-do
          list platform!
        </p>
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-auto">
            <button className="homepage-StartOrganiz-btn-1">Sign Up</button>
          </div>
          <div className="col-auto">
            <button className="homepage-StartOrganiz-btn-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default StartOrganiz