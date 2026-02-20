import React from 'react';

const RetroWindow = ({ children }) => {
  return (
    <div className="content-inner">
      <div className="internal-marquee">
        {/* Duplicating text in each line for seamless 50% loop */}
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`marquee-line line-${i % 2 === 0 ? '1' : '2'}`}>
            HELLO KITTY ♡ LOVE PIYAKK &nbsp; HELLO KITTY ♡ LOVE PIYAKK
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
          padding: 2.5rem 0.5rem 1rem 0.5rem;
          min-height: 100%; /* Changed from height: 100% to min-height */
          width: 100%;
          position: relative;
          /* Removed overflow: hidden to allow scrolling from parent */
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
          opacity: 0.1;
          pointer-events: none;
          transform: rotate(15deg);
        }
        .marquee-line {
          white-space: nowrap;
          font-family: 'Gaegu', cursive;
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary-green);
        }
        .line-1 { animation: marquee 20s linear infinite; }
        .line-2 { animation: marqueeReverse 25s linear infinite; }
        
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
