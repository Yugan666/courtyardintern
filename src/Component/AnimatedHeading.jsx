import React, { useEffect, useState } from 'react';
// import './AnimatedHeading.css'; // Make sure to create this CSS file with the styles provided earlier

const AnimatedHeading = ({ title }) => {
  const [displayedChars, setDisplayedChars] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    if (!isRemoving && displayedChars.length < title.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedChars(currentChars => [...currentChars, title[currentChars.length]]);
      }, 200);
      return () => clearTimeout(timeoutId);
    } 
  }, [displayedChars, isRemoving, title]);

  useEffect(() => {
    if (displayedChars.length === title.length) {
      setIsRemoving(true);
    }
  }, [displayedChars, title.length]);

  return (
    <div className="heading" data-title={title}>
      {displayedChars.map((char, index) => (
        <span key={index} className={isRemoving ? 'animationTwo' : 'animationOne'}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedHeading;
