// Node Modules
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Utilities
import { QUERY_QUESTIONS } from '../utils/queries';
import Question from "./Question";


// const handleAnswer = () => {
// 
// }

const Quiz = () => {
  const { topic } = useParams();
  const category = topic.slice(1);

  const { loading, data } = useQuery(QUERY_QUESTIONS, {
    variables: { category },
  });
  const questions = data?.searchQuestions || {};

  if (loading) {
    return (
      <main>
        <h2>Loading . . . . . . </h2>
      </main>
    )
  }
  
  return (
    <>
   <Question questions={questions} />
   <button type="button" class="btn btn-primary">Submit</button>
   </>
  )
}

export default Quiz;
