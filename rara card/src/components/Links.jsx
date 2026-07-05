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
          border-color: var(--primary-green);
          color: white;
          background: var(--primary-green);
        }
      `}</style>
    </div>
  );
};

export default Links;
