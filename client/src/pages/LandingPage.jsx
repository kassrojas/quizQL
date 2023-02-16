import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-body">
            <div className="card container-fluid bg-transparent border-0">
              <h2>Practice Makes Perfect!</h2>
              <img
                src={`${process.env.PUBLIC_URL}/images/landing_gif.gif`}
                className="card-img-top"
                alt="Landing Gif"
                
              />
            </div>
                <Link to="/topics" className="btn btn-primary m-3">
                  Take a Quiz
                </Link>
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
