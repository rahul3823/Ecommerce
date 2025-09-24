import React, { useState } from 'react';
import './About.css'; 

export default function AboutUs() {
  const [showAbout, setShowAbout] = useState(false);

  const handleToggle = () => setShowAbout(prev => !prev);

  const openLinkedIn = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="about-container">
      <h3 className="greeting">Hey there</h3>

      <div className="toggle-box">
        <button className="link-button" onClick={handleToggle}>
          About TextUtils
        </button>

        {showAbout && (
          <div className="about-section">
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio dolorum voluptatem sint
              libero reprehenderit id officiis qui, commodi molestias assumenda quod, nihil suscipit
              voluptas reiciendis impedit neque debitis aspernatur quia rem autem animi vitae dolorem.
              Vel voluptatem ut tenetur amet, reprehenderit facilis numquam omnis quasi repellat id
              fuga totam.
            </p>
          </div>
        )}
      </div>

      <div className="footer">
        <p>Developed By Rahul R Choudhary</p>
        <button className="linkedin-link" onClick={openLinkedIn}>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
