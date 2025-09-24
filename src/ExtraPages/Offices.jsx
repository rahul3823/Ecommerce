import React from 'react';
import Cards from './Cards';
import './Offices.css';

const Offices = () => {
  return (
    <div className="offices-container">
      <h1>Office locations</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, illum!</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="cards-wrapper">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Offices;
