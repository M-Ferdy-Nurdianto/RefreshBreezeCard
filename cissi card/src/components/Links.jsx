import React from 'react';
import data from '../data.json';

const Links = () => {
  const { links } = data;

  return (
    <div className="w-full">
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.url} 
          className="link-btn"
          target="_blank"
          style={{ textAlign: 'center' }}
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
      
      <style jsx>{`
        .link-btn:hover {
          border-color: #244D77;
          color: #244D77;
          background: #D4E1EE;
        }
      `}</style>
    </div>
  );
};

export default Links;
