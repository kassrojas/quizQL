// Node Modules
import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
// Utilities
import { QUERY_QUESTIONS } from '../utils/queries';


const Quiz = () => {
  const { topic } = useParams();
  const category = topic.slice(1);

  const { loading, data } = useQuery(QUERY_QUESTIONS, {
    variables: { category },
  });
  const question = data?.searchQuestions || {};

  console.log(topic);
  console.log(question);

  return (
    <main>
      <h4>Hello</h4>
    </main>
    
  )
}

export default Quiz;
