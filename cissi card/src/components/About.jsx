import React from 'react';
import data from '../data.json';
import Links from './Links';
import photo from '../assets/cissi.webp';

const About = ({ onBack }) => {
  const { about, profile } = data;
  return (
    <div className="about-wrapper animate-fade-in">
      <button onClick={onBack} className="back-btn-top" aria-label="Kembali">
        ←
      </button>

      <div className="about-scrollable">
        <div className="profile-section">
          <div className="photo-frame">
              <img src={photo} alt={profile.name} className="profile-photo" />
          </div>
          <h1 className="username">{profile.name}</h1>
          <div className="cat-decoration">{about.decoration}</div>
        </div>

        <div className="bio-card">
          <div className="bio-content">
            {about.bio.map((paragraph, index) => (
              <p key={index}>
                {paragraph.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== paragraph.split('\n').length - 1 && <br/>}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-wrapper {
          position: relative;
          width: 100%;
          flex: 1; 
          display: flex;
          flex-direction: column;
          overflow: hidden; 
        }

        .back-btn-top {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 50;
          background: rgba(255, 255, 255, 0.8);
          border: 2px dashed var(--primary-green);
          color: var(--primary-green);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 2px 2px 0px var(--primary-green);
        }

        .back-btn-top:hover {
          transform: scale(1.1);
          background: #fff;
        }

        .about-scrollable {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0px; 
        }

        /* ... existing styles ... */
        .profile-section {
          position: relative;
          text-align: center;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }
        
        /* ... existing styles ... */
        .photo-frame {
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin: 0 auto;
          overflow: visible;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }

        .username {
          font-family: 'Gaegu', cursive;
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-main);
          margin-top: 0.5rem;
          text-shadow: 2px 2px 0px var(--bg-nature);
        }
        
        /* ... other styles unchanged ... */

        .cat-decoration {
          position: absolute;
          bottom: 0;
          right: -20px;
          font-size: 2rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .bio-card {
           background: rgba(255, 255, 255, 0.8);
           padding: 1rem;
           border-radius: 15px;
           border: 2px dashed var(--primary-green);
           width: 95%;
           text-align: center;
           font-size: 0.9rem;
           line-height: 1.5;
        }

        .bio-content p {
           margin-bottom: 0.8rem;
        }
        
       .bio-content p:last-child {
           margin-bottom: 0;
        }

        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default About;
