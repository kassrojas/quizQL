// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utils
import Auth from '../utils/auth';



 // redirect to personal profile page if username is yours
 if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
  return <Navigate to="/home" replace />;
}


const landingPage = () => {

return <h1 className='text-white'>Test</h1>
}

export default landingPage;