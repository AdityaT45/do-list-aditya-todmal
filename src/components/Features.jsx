import React from 'react'
import devider from '../assets/images/divider.png'
import f1 from '../assets/images/f1.png'
import f2 from '../assets/images/f2.png'
import f3 from '../assets/images/f3.png'
import f4 from '../assets/images/f4.png'

const Features = () => {
  return (
    <>
        <div className='homepage-features-container'>
            <div className='row'>
                <div className='col-md-2 col-lg-3 '></div>
                <div className='col-md-8 col-lg-6'>
                    <p className='homepage-features-heading'>Transform Your Productivity with Our Innovative To-Do List Features</p>
                </div>
                <div className='col-md-2 col-lg-6 '></div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-3 mb-4'>
                    <div className='homepage-features-card'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='homepage-features-card-box'>
                                <img src={f1} className='img-fluid homepage-features-card-image'/>
                            </div>
                            
                        </div>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            <p className='homepage-features-card-number'>01</p>
                        </div>
                    </div>
                    <p className='homepage-features-card-heading'>User-Friendly Interface</p>
                    <img src={devider} className="img-fluid homepage-features-carddevider"/>
                    <p className='homepage-features-card-description'>Our platform offers seamless task management to boost your efficiency.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-4 '>
                    <div className='homepage-features-card'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='homepage-features-card-box'>
                                <img src={f2} className='img-fluid homepage-features-card-image'/>
                            </div>
                            
                        </div>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            <p className='homepage-features-card-number'>02</p>
                        </div>
                    </div>
                    <p className='homepage-features-card-heading'>Collaborate & Share Effortlessly</p>
                    <img src={devider} className="img-fluid homepage-features-carddevider"/>
                    <p className='homepage-features-card-description'>Invite team members to work together and achieve your goals faster.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-4 '>
                    <div className='homepage-features-card'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='homepage-features-card-box'>
                                <img src={f3} className='img-fluid homepage-features-card-image'/>
                            </div>
                            
                        </div>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            <p className='homepage-features-card-number'>03</p>
                        </div>
                    </div>
                    <p className='homepage-features-card-heading'>Effortless Collaboration</p>
                    <img src={devider} className="img-fluid homepage-features-carddevider"/>
                    <p className='homepage-features-card-description'>Invite team members to work together and achieve your goals faster.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-4'>
                    <div className='homepage-features-card'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='homepage-features-card-box'>
                                <img src={f4} className='img-fluid homepage-features-card-image'/>
                            </div>
                            
                        </div>
                        <div className='col-4'></div>
                        <div className='col-4'>
                            <p className='homepage-features-card-number'>04</p>
                        </div>
                    </div>
                    <p className='homepage-features-card-heading'> Seamless Access</p>
                    <img src={devider} className="img-fluid homepage-features-carddevider"/>
                    <p className='homepage-features-card-description'>Stay connected and manage your tasks on the go with ease.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features