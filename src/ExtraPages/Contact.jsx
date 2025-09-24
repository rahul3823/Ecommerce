import React from 'react';
import './Contact.css';
import logo from '../assets/logo.webp'; // ✅ Use import for images in src/assets

const Contact = () => {
  return (
    <div className="mcontact-container">
      <h1>Improve Us</h1>
      <div className="contact-container">
        <div className="left">
          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Your message" />
          </div>
        </div>
        <div className="right">
          <img src="/del.webp" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
