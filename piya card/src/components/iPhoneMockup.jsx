import React from 'react';

const iPhoneMockup = ({ children }) => {
  return (
    <div className="iphone-wrapper">
      <div className="iphone-outer">
        {/* Silent Switch */}
        <div className="iphone-button silent" />
        {/* Volume Buttons */}
        <div className="iphone-button vol-up" />
        <div className="iphone-button vol-down" />
        {/* Power Button */}
        <div className="iphone-button power" />
        
        <div className="iphone-inner">
          {/* Dynamic Island / Notch - Removed as requested */}
          {/* <div className="iphone-island" /> */}
          
          <div className="iphone-content">
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .iphone-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }
        .iphone-outer {
          position: relative;
          width: 360px;
          height: 740px;
          background: #fbcfe8; /* Pink-200 */
          border-radius: 55px;
          padding: 12px;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.3), 
                      0 30px 60px -30px rgba(0,0,0,0.4);
          border: 4px solid #f9a8d4; /* Pink-300 */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .iphone-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: #fff1f2; /* Rose-50 */
          border-radius: 45px;
          overflow: hidden;
          background-image: 
            radial-gradient(at 0% 0%, #ffe4e6 0, transparent 50%), 
            radial-gradient(at 100% 100%, #fecdd3 0, transparent 50%);
        }
        .iphone-island {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 35px;
          background: #000;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          z-index: 100;
        }
        .iphone-content {
          width: 100%;
          height: 100%;
          overflow-y: hidden; /* Disable scrolling by default (Home fits), allow child to enable if needed */
          overflow-x: hidden;
          position: relative;
        }
        /* Buttons */
        .iphone-button {
          position: absolute;
          background: #8fa37a;
          border-radius: 2px;
        }
        .silent { left: -6px; top: 80px; width: 3px; height: 25px; }
        .vol-up { left: -6px; top: 120px; width: 3px; height: 45px; }
        .vol-down { left: -6px; top: 180px; width: 3px; height: 45px; }
        .power { right: -6px; top: 140px; width: 3px; height: 50px; }

        @media (max-width: 440px) {
          .iphone-wrapper {
            padding: 0;
            overflow: hidden;
          }
          .iphone-outer {
            transform: scale(0.85);
            margin: -40px 0;
          }
        }
        @media (max-width: 380px) {
          .iphone-outer {
            transform: scale(0.75);
            margin: -60px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default iPhoneMockup;
