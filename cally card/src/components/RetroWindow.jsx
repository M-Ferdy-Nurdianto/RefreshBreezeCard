import React from 'react';
import data from '../data.json';

const RetroWindow = ({ children }) => {
  const { app } = data;
  return (
    <div className="content-inner">
      <div className="internal-marquee">
        {/* Duplicating text in each line for seamless 50% loop */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`marquee-line line-${i % 2 === 0 ? '1' : '2'}`}>
            <div className="marquee-content">
              <span>{app.runningText.repeat(4)}</span>
              <span>{app.runningText.repeat(4)}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="content-container">
        {children}
      </div>

      <style jsx>{`
        .content-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem 0.5rem 0 0.5rem;
          min-height: 100%; 
          width: 100%;
          position: relative;
          overflow: hidden; /* Added to clip the marquee and prevent it from causing extra scroll */
        }
        .internal-marquee {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 150%; /* Extended height */
          z-index: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          opacity: 0.15;
          pointer-events: none;
          transform: rotate(15deg);
        }
        .marquee-line {
          white-space: nowrap;
          font-family: 'Gaegu', cursive;
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-green);
          display: flex;
          -webkit-text-stroke: 1.5px white;
          text-shadow: 
            1px 1px 0 #fff,
            -1px 1px 0 #fff,
            1px -1px 0 #fff,
            -1px -1px 0 #fff;
        }
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: inherit;
        }
        .marquee-content span {
          display: inline-block;
        }
        .line-1 { animation: marquee calc(20s * var(--speed-multiplier)) linear infinite; }
        .line-2 { animation: marqueeReverse calc(25s * var(--speed-multiplier)) linear infinite; }
        
        .content-container {
          position: relative;
          z-index: 1;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default RetroWindow;
