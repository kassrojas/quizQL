// Node Modules
import React, { useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import { QUERY_CATEGORIES, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';
// import { QUERY_USERS, SEARCH_USERS } from '../utils/queries';
// Components
// import UserList from '../components/UserList';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // const [searchUsers, { data: searchData }] = useLazyQuery(SEARCH_USERS);
  // const users = data?.users || [];
  // const searchResults = searchData?.searchUsers || [];
  // const inputRef = useRef();

  // const renderUserList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return <UserList users={users} title="List of Users" />
  //   }
  // }

  // const renderUsername = () => {
  //   if (!Auth.loggedIn()) return null;
  //   return Auth.getProfile().data.username;
  // }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await searchUsers({
  //     variables: {
  //       term: inputRef.current.value
  //     }
  //   });
  // }

  const { userLoading, data: userData } = useQuery(QUERY_ME);
  const user = userData?.me || {};
  const { categoryLoading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const categories = categoryData?.searchCategories || [];
  
  const categoryListUntrimmed = categories.map(c => c.category);
  const categoryList = [...new Set(categoryListUntrimmed)];
 

  const renderButtons = () => {
    return categoryList.map(category =>
      <button
        className='btn btn-primary'
        key={category}
      >
        {category}
      </button>
      )
  }

  return (
    <main>
      {/* Top in mobile view // Left in desktop view */}
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className="card">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Category</p>
                </div>
            </div>
          </div>
     
          {/* Bottom in mobile view // Right in desktop view */}
          <div className='col-12 col-md-6'>
            <div className="card">
              <div className='row'>
                <div className='col-12'>
                  {renderButtons()}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Home;
