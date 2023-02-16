import './index.css';
// Node Modules
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Navigate, useParams } from "react-router-dom";
// Utilities
import { QUERY_USERS, 
         SEARCH_USERS,
         QUERY_CATEGORIES, 
         QUERY_ME, 
         QUERY_USERRESULTS, 
         QUERY_USERRESULTS_BYCATEGORY 
        } from '../../utils/queries';
import Auth from "../../utils/auth";
// Components
import Score from '../../components/Score'
import UserList from "../../components/UserList";



const Home = () => {

  const [category, setCategory] = useState('All Topics');
  console.log(category);

  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USERS : QUERY_ME, {
    variables: { id },
  });

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const me = data?.me || {};
  const user = data?.user || {};
  const users = usersData?.users || [];

  const userId = me._id;
  console.log(userId);

  if (error) console.log(error);

  // Query Categories
  const { categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const categories = categoryData?.searchCategories || [];
  
  const categoryListUntrimmed = categories.map(c => c.category);
  const categoryList = [...new Set(categoryListUntrimmed)];

  // Query All User Results
  const { loading: resultLoading, data: resultData } = useQuery(QUERY_USERRESULTS, {
    variables: { user: userId }
  });
  const allResults = resultData?.userResults || [];

  //Query User Results by Category
  const { loading: singleResultLoading, data: singleResultData } = useQuery(QUERY_USERRESULTS_BYCATEGORY, {
    variables: { user: userId, category: category }
  })
  const resultsByCategory = singleResultData?.userResultsByCategory || [];
  


  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!userId) {
    return (
      <h4 className="text-white">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }


  const getCategory = (e) => {
    setCategory(category => category = e.target.value);
  }
  
  const renderButtons = () => {
    return (
      <>
        {categoryList.map(category =>    
        <button
          onClick={getCategory}
          className='btn btn-primary'
          key={category}
          value={category}
        >
          {category}
        </button>
        )}
        <button
          onClick={getCategory}
          className='btn btn-primary'
          key='All Topics'
          value={'All Topics'}
          >
          All Topics
        </button>
      </>
    )
  }

  console.log('allResults:', allResults);
  console.log('resultsByCat:', resultsByCategory);

  return (
    <main>
      {/* Top in mobile view // Left in desktop view */}
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className="card">
               <h4>ChartJS here</h4>
            </div>
          </div>
     
          {/* Bottom in mobile view // Right in desktop view */}
          <div className='col-12 col-md-6'>
            <div className="card">
              <div className='row'>
                <div className='col-12'>
                  {renderButtons()}
                  <p>Your Scores for {category}:</p>
                <Score 
                  category={category} 
                  allResults={allResults} 
                  resultsByCategory={resultsByCategory}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="customProfile">
      
      </div>
    </div>
    </main>
  );
};

export default Home;
