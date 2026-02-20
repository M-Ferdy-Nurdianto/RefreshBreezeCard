import React from 'react';
import data from '../data.json';

const Background = () => {
  const { app } = data;
  const text = app.runningText;
  
  return (
    <div className="marquee-container">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="marquee-row">
          <div className="marquee-content">
            {/* Repeat enough to cover screen, then double it for the loop */}
            <span>{text.repeat(10)}</span>
            <span>{text.repeat(10)}</span>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: inherit;
          width: fit-content;
        }
        .marquee-content span {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Background;
