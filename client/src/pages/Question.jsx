// Node Modules
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Utilities
import { QUERY_QUESTIONS } from '../utils/queries';


const Question = ({questions}) => {

  return (
    <main>
     <div className="card">
        <div className="card-body">
          <h4>{questions[0].question}</h4>
        </div>
        <img src={questions[0].snippet} />
        <div>
          <ul>
            <li>{questions[0].incorrect_answers[0]}</li>
            <li>{questions[0].incorrect_answers[1]}</li>
            <li>{questions[0].incorrect_answers[2]}</li>
            <li>{questions[0].correct_answer}</li>
          </ul>
        </div>
      </div>
    </main>
    
  )
}

export default Question;
