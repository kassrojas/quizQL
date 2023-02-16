import React from "react";
import './index.css';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLRESULTS } from "../../utils/queries";

const Leaderboard = () => {

    const { resultsLoading, data: resultsData } = useQuery(QUERY_ALLRESULTS);
    const result = resultsData?.allResults || [];
    console.log(result);

  return (
    
   
      <div className="container">
        <div className="row">
        <div className="clo-12 flex">
      <h1 className="text-white-leaderboard">Leaderboard</h1>
      </div>
      <div className="col-12 scores">
      <ul className="list-group">
        {/* map through result scores in descending order */}
        {result.map((result) =>
          <li key={result._id} className="list-group-item">
            {result.user != null ? ` ${result.user.username}: ` : `Anon`}
            {result.score}
            {` | ${result.category}`}
          </li>
        )}
      </ul>
      </div>
      </div>
     
     
     </div>
     
   
  );
};

export default Leaderboard;
