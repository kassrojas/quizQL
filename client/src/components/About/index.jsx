import React from "react";
import './index.css';

const About = () => {
  return (
    <div className="container-about">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h2 className="text-white my-4">About Us</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <p className="text-white fs-5">
            <hr />
            <h4>Who We Are</h4>
            <hr /> A group of junior developers looking to make an impact in the
            web developement space.
          </p>
          <p className="text-white fs-5">
            <hr />
            <h4>Our Application</h4>
            <hr /> A free and easy to use coding quiz application made for
            recent coding graduates looking to sharpen their skills and
            knowledge. Let's Get Quizzicle allows you to create an account so
            that you can track your progress on topics. This tracking will do
            the work for you so that next time you login, you already know what
            subject to study further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
