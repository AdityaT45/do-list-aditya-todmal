import React, { useState } from "react";
import GetStartedModal from "./GetStartedModal";
import "./GetStartedModal.css";

import img1 from "../assets/images/l1.png";
import img2 from "../assets/images/l2.png";
import img3 from "../assets/images/l3.png";
import img4 from "../assets/images/l4.png";
import img5 from "../assets/images/l5.png";
import carsole from "../assets/images/carsole.png";
import logipsum from "../assets/images/logipsum.png";

const Simplify = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <GetStartedModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="homepage-simpify-container">
        <div className="row as">
          <div className="col-1 col-md-2 col-xl-3"></div>
          <div className="col-10 col-md-8 col-xl-6">
            <p className="homepage-simpify-heading">
              Simplify Your Life with Our Todo App
            </p>
            <p className="homepage-simpify-description">
              Stay organized and boost your productivity with our intuitive todo
              website. Experience a modern approach to task management that fits
              your lifestyle.
            </p>

            <div className="row">
              <div className="col-1  "></div>
              <div className="col-10 text-center ">
                <button className="homepage-simpify-btn-1" onClick={() => setModalOpen(true)}>Get started</button>
                <button className="homepage-simpify-btn-2">Learn more</button>
              </div>
              <div className="col-1  "></div>
            </div>
          </div>
          <div className="col-1 col-md-2 col-xl-3"></div>
        </div>


        <div className="homepage-simpify-card-container  ">
          <div className="row d-flex justify-content-center">
            <div className="col-12  col-sm-6 col-lg-8   homepage-simpify-card1-col">
              <div className="homepage-simpify-card1">
                <p className="homepage-simpify-card1-heading">
                  <span style={{ color: "#FFFFFF80" }}>Organize.</span>
                  <br />
                  <span style={{ color: "#FFFFFFCC" }}>Achieve.</span>
                  <br />
                  <span style={{ color: "#FFFFFFCC" }}>Relax.</span>
                </p>
                <p className="homepage-simpify-card1-description">
                  Turn clutter into clarity, chaos into control, and dreams into
                  done.bold visions into market success
                </p>
                <div className="row">
                  <div className="col-12  ">
                    <button className="homepage-simpify-card1-btn-1">
                      Get Started Today
                    </button>
                    <button className="homepage-simpify-card1-btn-2">
                      Discover Features
                    </button>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 "></div>
                </div>
              </div>
            </div>



            <div className="col-12 col-sm-6 col-lg-4  homepage-simpify-card2-col">
              <div className="homepage-simpify-card2 ">
                <div
                  id="testimonialCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    
                      <img
                        src={carsole}
                        className="d-block  carousel-img"
                        alt="testimonial"
                      />

                      {/* Overlay content */}
                      <div className="carousel-caption-custom">
                        <h2 className="carousel-title">
  <span style={{ color: '#FFFFFF80' }}>Your Tasks.</span>
  <br />
  Our Tools.
</h2>
                        <div className="carousel-footer">
                          <img src={logipsum} className="logipsum-img"/>
                          <h4 className="carousel-name">Freddie Halvorson</h4>
                          <p className="carousel-role">
                            Chief Productivity Enthusiast
                          </p>
                        </div>
                      </div>
                    
                
                  </div>

              
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center company-logo-container">
            <div className="col">
              <img src={img1} alt="Image 1" className="img-fluid" />
            </div>
            <div className="col">
              <img src={img2} alt="Image 2" className="img-fluid" />
            </div>
            <div className="col">
              <img src={img3} alt="Image 3" className="img-fluid" />
            </div>
            <div className="col">
              <img src={img4} alt="Image 4" className="img-fluid" />
            </div>
            <div className="col">
              <img src={img5} alt="Image 5" className="img-fluid" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Simplify;
