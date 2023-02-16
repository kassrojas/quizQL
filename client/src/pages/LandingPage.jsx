import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card container-fluid">
              <video width="400" controls autoPlay loop>
                <source src="/images/matrix_background.mov" type="video/mp4"/>
                  </video>
                </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <Link to="/topics" className="btn btn-primary">
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
