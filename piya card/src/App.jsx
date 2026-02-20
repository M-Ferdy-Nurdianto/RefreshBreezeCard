import React, { useState } from 'react';
import Background from './components/Background';
import RetroWindow from './components/RetroWindow';
import Links from './components/Links';
import About from './components/About';
import IPhoneMockup from './components/iPhoneMockup';
import profileImg from './assets/piya.webp';

function App() {
  const [view, setView] = useState('home');

  return (
    <>
      <Background />
      <IPhoneMockup>
        <RetroWindow>
          {view === 'home' ? (
            <div className="home-links">
              <div className="home-profile">
                <div className="home-profile-img">
                  <img src={profileImg} alt="Pipiyakk" />
                </div>
                <h1 className="home-name">PIPIYAKK</h1>
                <p className="home-tagline">xixixi happy day! 🐰</p>
              </div>

              <button 
                onClick={() => setView('about')}
                className="about-sticker"
              >
                🐰 About Me
              </button>
              <Links />
              <p className="footer-quote">
                "Pyon pyon! Seperti kelinci, aku akan terus melompat-lompat di hatimu. Halo, aku pi pi Piya"
              </p>
            </div>
          ) : (
            <About onBack={() => setView('home')} />
          )}
        </RetroWindow>
      </IPhoneMockup>


      <style jsx>{`
        .home-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        
        /* Home Profile Styles */
        .home-profile {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .home-profile-img {
          width: 150px; /* Reduced to match About page */
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.2rem;
          overflow: visible;
        }
        .home-profile-img img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Ensure full image is visible */
          transform: scale(1.2); /* Slight scale up if it looks too small in contain mode */
        }
        .home-name {
          font-family: 'Gaegu', cursive;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0.2rem;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .home-tagline {
          font-family: 'Quicksand', sans-serif;
          font-size: 0.9rem;
          color: var(--text-main);
          font-weight: 600;
          opacity: 0.8;
          margin-top: 0.2rem;
        }

        .about-sticker {
          background: #fdf2f8; /* pink-50 */
          border: 3px dashed #be185d;
          color: var(--text-main);
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          margin-bottom: 0.5rem;
          transition: all 0.2s;
          display: inline-block;
          box-shadow: 4px 4px 0px #be185d;
          font-family: 'Gaegu', cursive;
          width: 90%;
          text-align: center;
        }
        .about-sticker:hover {
          background: #fce7f3; /* Pink-100 */
          transform: scale(1.02) rotate(-1deg);
          box-shadow: 5px 5px 0px #be185d;
        }
        .footer-quote {
          margin-top: 0.5rem;
          font-size: 0.7rem;
          font-style: italic;
          color: var(--text-main);
          opacity: 0.5;
          text-align: center;
          line-height: 1.2;
          padding: 0 10px;
        }
      `}</style>
    </>
  );
}

export default App;
