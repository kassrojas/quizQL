import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERRESULTS } from "../../utils/queries";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Results = (props) => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};
  const userId = user._id;


  const { resultsLoading, data: resultsData } = useQuery(QUERY_USERRESULTS, {
    variables: { userId },
  });
  const results = resultsData?.userResults || [];
  console.log(results);

  return (
    <>
      <div className="resultsPage">
        <h1>Results for {user.username}</h1>
        <h3> Score: {props.score}/{props.total || 10}</h3>
        <Link to="/quiz" className="btn btn-custom">
          Retake Quiz
        </Link>{" "}
        <Link to="/topics" className="btn btn-custom">
          Take New Quiz
        </Link>{" "}
        <Link to="/leaderboard" className="btn btn-custom">
          View Leaderboard
        </Link>
      </div>
    </>
  );
};

export default Results;
