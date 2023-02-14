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
