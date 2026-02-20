import React from 'react';
import Links from './Links';
import photo from '../assets/piya.webp';

const About = ({ onBack }) => {
  return (
    <div className="about-wrapper animate-fade-in">
      <button onClick={onBack} className="back-btn-top" aria-label="Kembali">
        ←
      </button>

      <div className="about-scrollable">
        <div className="profile-section">
          <div className="photo-frame">
              <img src={photo} alt="Pipiyakk" className="profile-photo" />
          </div>
          <h1 className="username">Pipiyakk</h1>
          <div className="bunny-decoration">🐰</div>
        </div>

        <div className="bio-card">
          <div className="bio-content">
            <p>
              Haii, aku Pipiyaaak🐇
              <br/>
              biasanya orng kenal aku dengan simbol kelinci dan mengenalku sebagai pecinta matchaaa selain suka matchaa aku juga paling suka sama nasigoreng lohhh selain itu aku juga suka sekali cake 🍵🍰,walauoun makan manis bikin sakit gigi tpi aku sangat sukaa xixixi
            </p>
            <p>
               dan Aku suka banget mewarnai, sebener nya kurang suka kalau gmbr , kelebihan yang aku punya aku slalau menunjukan expresi excited dan senangg always happy in public karna kebahagiaan datang dari kalian 🩷🤏🏻
            </p>
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
          border: 2px dashed #be185d;
          color: #be185d;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 2px 2px 0px #be185d;
        }

        .back-btn-top:hover {
          transform: scale(1.1);
          background: #fff;
        }

        .about-scrollable {
          flex: 1;
          width: 100%;
          overflow-y: auto; 
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding-top: 30px; /* Space for top button */
          padding-bottom: 40px; /* Space for bottom spacing */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .profile-section {
          position: relative;
          text-align: center;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
        }
        
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
          color: #be185d;
          margin-top: 0.5rem;
          text-shadow: 2px 2px 0px #fdf2f8;
        }
        
        .bunny-decoration {
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
           border: 2px dashed #db2777;
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
