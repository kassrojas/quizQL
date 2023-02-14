import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/me">
                <h4>{Auth.getProfile().data.username}'s Profile</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/topics">
                <h4>Quiz Topics</h4>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/leaderboard">
                <h4>Leaderboard</h4>
              </a>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="btn btn-danger">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <nav className="navbar justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="/signup">
            <h4 className="text-white m-2">Sign Up</h4>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            <h4 className="text-white m-2">Login</h4>
          </a>
        </li>
      </nav>
    </>
  );
}

export default Navbar;
