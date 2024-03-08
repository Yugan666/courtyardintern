import React from 'react';
// import './TextAnimation.css'; // Ensure to import the CSS file

const TextAnimation = ({ text }) => {
  return (
    <div className="text-animation-container">
      {text.split('').map((char, index) => (
        <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
