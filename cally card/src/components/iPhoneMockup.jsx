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
          width: 300px;
          height: 600px;
          background: #B09FCA; /* Purple Rose */
          border: 4px solid #9E8DB8; /* Darker Purple Rose */
          border-radius: 45px;
          position: relative;
          padding: 12px;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
        }
        .iphone-inner {
          width: 100%;
          height: 100%;
          background: #F3F0F8; /* Light Purple base */
          background-image: 
            radial-gradient(at 0% 0%, #E3D9F0 0, transparent 50%), 
            radial-gradient(at 100% 100%, #D8CDE8 0, transparent 50%);
          border-radius: 35px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.05);
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
          overflow-y: auto; 
          overflow-x: hidden;
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .iphone-content::-webkit-scrollbar {
          display: none;
        }
        /* Buttons */
        .iphone-button {
          position: absolute;
          background: #B4C79C; /* Foam Green */
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
