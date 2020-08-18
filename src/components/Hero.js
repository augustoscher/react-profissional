import React from 'react';
import './Hero.css';

const Hero = ({ title, children }) => (
  <div>
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  </div>
);

export default Hero;
