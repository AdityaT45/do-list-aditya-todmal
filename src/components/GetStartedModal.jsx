import React, { useState } from 'react';

const GetStartedModal = ({ open, onClose }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  if (!open) return null;

  if (showThankYou) {
    return (
      <div className="getstarted-modal-overlay">
        <div className="getstarted-thankyou-box">
          <div className="getstarted-thankyou-heart">❤️</div>
          <div className="getstarted-thankyou-title">Thank you for connect with us.</div>
          <div className="getstarted-thankyou-subtext">Our team will contacting with you soon</div>
          <button className="getstarted-modal-done" onClick={() => { setShowThankYou(false); onClose(); }}>Done</button>
        </div>
      </div>
    );
  }

  return (
    <div className="getstarted-modal-overlay">
      <div className="getstarted-modal-box">
        <button className="getstarted-modal-close" onClick={onClose}>&times;</button>
        <h2 className="getstarted-modal-title">Get Started Today!</h2>
        <p className="getstarted-modal-subtitle">Fill in your details and take control of your tasks.</p>
        <form className="getstarted-modal-form" onSubmit={e => { e.preventDefault(); setShowThankYou(true); }}>
          <div className="getstarted-modal-row">
            <div className="getstarted-modal-field">
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="getstarted-modal-field">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="getstarted-modal-row">
            <label>Gender</label>
            <div className="getstarted-modal-radio-group">
              <label className="getstarted-modal-radio">
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label className="getstarted-modal-radio">
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>
          </div>
          <div className="getstarted-modal-row">
            <label>Language</label>
            <div className="getstarted-modal-checkbox-group">
              <label className="getstarted-modal-checkbox">
                <input type="checkbox" name="language" value="english" /> English
              </label>
              <label className="getstarted-modal-checkbox">
                <input type="checkbox" name="language" value="hindi" /> Hindi
              </label>
              <label className="getstarted-modal-checkbox">
                <input type="checkbox" name="language" value="marathi" /> Marathi
              </label>
            </div>
          </div>
          <div className="getstarted-modal-row">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="getstarted-modal-row getstarted-modal-terms">
            <label>
              <input type="checkbox" /> I agree to the <span className="getstarted-modal-terms-link">terms and conditions</span>
            </label>
          </div>
          <button type="submit" className="getstarted-modal-done">Done</button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal; 