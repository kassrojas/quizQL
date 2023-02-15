import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_USERRESULTS } from "../../utils/queries";
import React from "react";
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
      <main>
        <div className="container">
          <div className="resultsPage">
            <h1>
              Result for <a href="/me">{user.username} </a>
              <hr />
            </h1>
            <h1 className="my-4">
              Score: {props.score}/{props.total || 10}
            </h1>
            <div className="row justify-content-center">
              <a>
                <button onClick={props.resetQuiz} className="btn btn-custom">
                  Retake Quiz
                </button>
              </a>
              <a href="/topics">
                <button className="btn btn-custom">Take New Quiz</button>
              </a>
              <a href="/leaderboard">
                <button className="btn btn-custom">View Leaderboard</button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Result;
