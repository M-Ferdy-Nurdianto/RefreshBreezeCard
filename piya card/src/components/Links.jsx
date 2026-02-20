import React from 'react';

const Links = () => {
  const links = [
    { name: 'Instagram', url: 'https://www.instagram.com/matcvie_?igsh=bHo1NGpsdDNnNmk2' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@matcvie.vi?_r=1&_t=ZS-942wJWIuIZp' },
    { name: 'WA Channel', url: 'https://whatsapp.com/channel/0029VaamjjbD8SDwXoB1YZ0e' },
    { name: 'Twitter / X', url: 'https://x.com/JumpingBunnyy' },
  ];

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
    </div>
  );
};

export default Links;
