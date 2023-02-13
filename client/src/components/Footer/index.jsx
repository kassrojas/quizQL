import React from 'react';
import githubLogo from '../../assets/githubLogo.png'

const Footer = () => {
  return (
    <footer className="fixed-bottom text-center bg-secondary">
      <div className="mb-2 bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <a href="https://github.com/kassrojas/quizQL" className="align-items-center" target='_blank' rel="noreferrer"><img src={githubLogo} alt="Github Logo" height={50} /></a>
      </div>
    </footer>
  );
};

export default Footer;
