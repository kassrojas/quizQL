import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLRESULTS } from "../../utils/queries";

const Leaderboard = () => {

    const { resultsLoading, data: resultsData } = useQuery(QUERY_ALLRESULTS);
    const results = resultsData?.allResults || [];
    console.log(results);

  return (
    <>
      <h1 className="text-white">Leaderboard</h1>
      <ul className="list-group">
        {/* map through result scores in descending order */}
        {results.map((result) =>
          <li key={result._id} className="list-group-item">
            {result.user != null ? ` ${result.user.username}:` : ' Anon:'}
            {result.score}
          </li>
        )}
      </ul>
    </>
  );
};

export default Leaderboard;
