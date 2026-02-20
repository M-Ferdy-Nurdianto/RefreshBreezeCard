import React from 'react';

const Background = () => {
  const text = "HELLO KITTY ♡ PIPIYAKK ♡ CUTE ♡ ";
  
  return (
    <div className="marquee-container">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="marquee-row">
          {/* Even number of repeats (12) ensures 50% translate (6 units) ends at identical point */}
          {text.repeat(12)}
        </div>
      ))}
    </div>
  );
};

export default Background;
