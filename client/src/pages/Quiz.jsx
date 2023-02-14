// Node Modules
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Utilities
import { QUERY_CATEGORIES, QUERY_QUESTIONS } from "../utils/queries";

function Quiz() {
  const { topic } = useParams();
  const category = topic.slice(1);

  /*const { loading, data } = useQuery(QUERY_QUESTIONS, {
    variables: { category: x },
  });*/
  const { data } = useQuery(QUERY_QUESTIONS, {
    variables: { category: topic },
  });
  console.log("data " + data?.searchQuestions);
  const questions = data?.searchQuestions || {};

  console.log(questions);

  const [question, setQuestion] = useState(questions[0].question);
  const [answerA, setAnswerA] = useState(questions[0].correct_answer);
  const [answerB, setAnswerB] = useState(questions[0].incorrect_answers[0]);
  const [answerC, setAnswerC] = useState(questions[0].incorrect_answers[1]);
  const [answerD, setAnswerD] = useState(questions[0].incorrect_answers[2]);
  const [snippet, setSnippet] = useState(questions[0].snippet);

  /*if (loading) {
    return (
      <main>
        <h2>Loading . . . . . . </h2>
      </main>
    );
  }*/

  return (
    <main>
      <div className="card">
        <div className="card-body">
          <h4>{question}</h4>
        </div>
        <img src={snippet} />
        <div>
          <ul>
            <li>{answerA}</li>
            <li>{answerB}</li>
            <li>{answerC}</li>
            <li>{answerD}</li>
          </ul>
          {/* <button onClick={handleAnswer} className="btn btn-primary" type="submit">
            Submit
          </button> */}
        </div>
      </div>
    </main>
  );
}

export default Quiz;
