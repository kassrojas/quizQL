import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Leaderboard from "../../pages/Leaderboard";
import Quiz from "../../pages/Quiz";
import Home from "../../pages/Home";
import "./index.css";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "leaderboard") {
      return <Leaderboard />;
    }
    if (currentPage === "quiz") {
      return <Quiz />;
    }
    if (currentPage === "categories") {
      return <Leaderboard />;
    }
    if (currentPage === "home") {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header>
      <h1 className="p-2">
        <a href="/me" className="titleCss">
          Let's Get Quizzical
        </a>
      </h1>
      {/* <div> */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* </div> */}
    </header>
  );
};

export default Header;
