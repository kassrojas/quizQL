import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_USERRESULTS } from "../../utils/queries";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


const Result = (props) => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};
  const userId = user._id;


  const { resultsLoading, data: resultsData } = useQuery(QUERY_USERRESULTS, {
    variables: { userId },
  });

  const result = resultsData?.userResults || [];
  console.log(result);


  return (
    <>
      <div className="resultsPage">
        <h1>Result for {user.username}</h1>
        <h3> Score: {props.score}/{props.total || 10}</h3>
        <button onClick={props.resetQuiz} className="btn btn-custom">
          Retake Quiz
          </button>
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


export default Result;

