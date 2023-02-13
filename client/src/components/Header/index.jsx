
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/index';
import Leaderboard from '../../pages/Leaderboard';
import Quiz from '../../pages/Quiz';
import Home from '../../pages/Home';
// import Topic from '../../pages/Topic';


const Header = () => {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {

    if (currentPage === 'leaderboard') {
      return <Leaderboard />
    }
    if (currentPage === 'quiz') {
      return <Quiz />
    }
    if (currentPage === 'categories') {
      return <Leaderboard />
    }
    if (currentPage === 'home') {
      return <Home />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (

    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Link to="/home">
              Home
            </Link>
            <div />
          </div>
          <div className='col-8'>
            <Link to="/signup">
              <h1>Signup</h1>
            </Link>
            <Link to="/topics">
              <h1>Topics</h1>
            </Link>
            <Link to="/leaderboard">
              <h1>Leaderboard</h1>
            </Link>
            <Link to="/results">
              <h1>Results</h1>
            </Link>
          </div>
        </div>

      </div>

      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    </header>

  );
};

export default Header;
