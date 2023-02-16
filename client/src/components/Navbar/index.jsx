import React from "react";
import Auth from "../../utils/auth";
import "./index.css";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <ul className="navbar-nav mr-auto flex-grow-1">
            <li className="nav-item active">
              <a className="nav-link" href="/me">
                {Auth.getProfile().data.username}'s Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/topics">
                Take A Quiz
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/leaderboard">
                Leaderboard
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </nav>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <nav className="navbar justify-content-center">
        <a href="/signup" className="nav-link ">
          <h4 className="m-2 customCss">
            Sign Up
            <hr />
          </h4>
        </a>
        <a className="nav-link " href="/login">
          <h4 className="m-2 customCss">
            Login
            <hr />
          </h4>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
