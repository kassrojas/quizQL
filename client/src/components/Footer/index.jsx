import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/github-logo.svg";

const Footer = () => {
  return (
    <footer className="fixed-bottom text-center bg-secondary">
      <div className="row align-items-center text-center justify-content-end">
        <div className="col-1">
          <Link className="text-light" to="/about">
            About Us
          </Link>
        </div>
        <div className="col-1">
          <Link className="text-light" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="col-1 d-flex flex-end m-2 bg-image">
          <a
            href="https://github.com/kassrojas/quizQL"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Github Logo" height={50} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
