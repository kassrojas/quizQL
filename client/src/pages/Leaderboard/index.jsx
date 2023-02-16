import React from "react";
import "./index.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALLRESULTS } from "../../utils/queries";

const Leaderboard = () => {
  const { resultsLoading, data: resultsData } = useQuery(QUERY_ALLRESULTS);
  const result = resultsData?.allResults || [];
  console.log(result);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 flex">
          <h2 className="text-white-leaderboard">
            &#x2737; Leaderboard &#x2737;
          </h2>
          <hr />
          <p className="text-white">Best Scores Of All Users</p>
        </div>
        <div className="col-12 scores">
          <ul className="list-group list-group-flush">
            {/* map through result scores in descending order */}
            {result.map((result) => (
              <li key={result._id} className="list-group-item custom-li fs-5">
                {result.user != null ? ` ${result.user.username}: ` : " Anon:"}
                {result.category} {result.score}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
