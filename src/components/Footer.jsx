import React from 'react';
import "./Footer.css";
import logo from "../assets/images/image.png";

const Footer = () => {
  return (
    <footer className="footer bg-white py-5 px-4">
      <div className="container" style={{ maxWidth: '1170px' }}>
        <div className="row justify-content-between g-5">
          
          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <img
              src={logo}
              alt="Logo"
              style={{ width: '156px', height: '164px' }}
            />
            <p className="newsletter-text mt-3">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>
            <form className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="form-control newsletter-input me-2"
                />
                <button className="btn btn-join">Join</button>
              </div>
              <p className="privacy-note">
                By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Useful Links */}
          <div className="col-lg-7 col-md-6">
            <div className="row">
              {/* Links column 1 */}
              <div className="col-md-4 col-sm-6 mb-3">
                <h6 className="footer-heading">Useful Links</h6>
                <ul className="list-unstyled footer-links">
                  <li>Home Page</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Blog Posts</li>
                  <li>FAQs</li>
                </ul>
              </div>

              {/* Links column 2 */}
              <div className="col-md-4 col-sm-6 mb-3">
                <h6 className="footer-heading">Resources</h6>
                <ul className="list-unstyled footer-links">
                  <li>Help Center</li>
                  <li>User Guide</li>
                  <li>Community Forum</li>
                  <li>Feedback</li>
                  <li>Support</li>
                </ul>
              </div>

              {/* Social media */}
              <div className="col-md-4 col-sm-12 mb-3">
                <h6 className="footer-heading">Connect With Us</h6>
                <ul className="list-unstyled footer-links">
                  


                  <ul style={{ listStyle: 'none', padding: 0 }}>
  <li>
    <i className="fab fa-facebook-f" style={{ marginRight: '8px', color: '#FF3E54' }}></i>
    Facebook
  </li>
  <li>
    <i className="fab fa-instagram" style={{ marginRight: '8px', color: '#FF3E54' }}></i>
    Instagram
  </li>
  <li>
    <i className="fab fa-x-twitter" style={{ marginRight: '8px', color: '#FF3E54' }}></i>
    X
  </li>
  <li>
    <i className="fab fa-linkedin-in" style={{ marginRight: '8px', color: '#FF3E54' }}></i>
    LinkedIn
  </li>
  <li>
    <i className="fab fa-youtube" style={{ marginRight: '8px', color: '#FF3E54' }}></i>
    YouTube
  </li>
</ul>


                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 pt-4 border-top">
          <p className="mb-2 mb-md-0">© 2024 Osumare. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="footer-policy-link">Privacy Policy</a>
            <a href="#" className="footer-policy-link">Terms of Service</a>
            <a href="#" className="footer-policy-link">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;