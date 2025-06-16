import React from "react";
import xz from "../assets/images/xz.png";
import al from "../assets/images/arrowleft.png";
import ar from "../assets/images/arrowright.png";
import client from "../assets/images/client.png";

const Testimonials = () => {
  return (
    <>
      <div className="homepage-Testimonials-container">
        <p className="homepage-Testimonials-heading">Customer Testimonials</p>
        <p className="homepage-Testimonials-description">
          This tool has transformed my productivity and organization!
        </p>

        <div className="row">
          <div className="col-12 container-Testimonials">
            <div className="homepage-Testimonials-lower-box">
              <div className="homepage-Testimonials-upper-box">
                <div className="row homepage-Testimonials-review-full-section">
                  <div className="col-8 ">
                    <div className=" homepage-Testimonials-review-section">
                      <p className="homepage-Testimonials-review">
                        Using this website has made my tasks so much easier! I
                        can't imagine my day without it."
                      </p>
                      <div className="row">
                        <div className="col-2">
                          <img src={xz} />
                        </div>
                        <div className="col-8">
                          <p className="homepage-Testimonials-client-name">
                            Sherri Cronin
                          </p>
                          <p className="homepage-Testimonials-client-details">
                            Project Manager, TechCorp
                          </p>
                        </div>
                        <div className="col-12">
                          <div className="homepage-Testimonials-btn-container">
                            <div className="homepage-Testimonials-btn-1">
                              <img src={al} className="arrow" />
                            </div>
                            <div className="homepage-Testimonials-btn-2">
                              <img src={ar} className="arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="homepage-Testimonials-right-box">
                      <div>
                        <img
                          className="homepage-Testimonials-image"
                          src={client}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
