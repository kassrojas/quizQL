// Node Modules
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Utilities
import { QUERY_CATEGORIES, QUERY_QUESTIONS } from "../utils/queries";
import Question from './Question'
import Results from "./Results";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const { topic } = useParams();
  const category = topic.slice(1);

  const { loading, data } = useQuery(QUERY_QUESTIONS, {
    variables: { category },
  });

  const questions = data?.searchQuestions || [];

  const selectAnswer = (e) => {
    console.log('ANSWER', questions[currentIndex].correct_answer);
    console.log('SELECTED', e.target.value);
    setCorrect(questions[currentIndex].correct_answer === e.target.value);
  };

  const handleSubmit = () => {
    if (currentIndex < questions.length - 1) {
      if (correct) setScore(score => 1 + score);
      setCorrect(false);
      setCurrentIndex(currentIndex => 1 + currentIndex);
    }
  }

  if (loading) {
    return (
      <main>
        <h2>Loading . . . . . . </h2>
      </main>
    )
  }

  if (questions.length > 0 && currentIndex >= questions.length - 1) {
    return <Results score={score} total={questions.length} />
  }

  console.log('QUESTIONS', questions);

  // Shuffle order of answers
  const answers = [
    questions[currentIndex].incorrect_answers[0],
    questions[currentIndex].incorrect_answers[1],
    questions[currentIndex].incorrect_answers[2],
    questions[currentIndex].correct_answer
  ]

  const shuffle = (answers) => {
    let currentIndex = answers.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]
      ]
    }
    return answers;
  }

  const shuffledAnswers = shuffle(answers);
  const selected = questions[currentIndex];

  if (selected && selected.question) {
    const question = selected.question;
    const snippet = selected.snippet;
    const answerA = shuffledAnswers[0];
    const answerB = shuffledAnswers[1];
    const answerC = shuffledAnswers[2];
    const answerD = shuffledAnswers[3];
    return (
      <>
        <Question
          score={score}
          selectAnswer={selectAnswer}
          question={question}
          snippet={snippet}
          answerA={answerA}
          answerB={answerB}
          answerC={answerC}
          answerD={answerD}
        />
        <button onClick={() => handleSubmit()} type="submit" className="btn btn-primary">Submit</button>
      </>
    )
  }

  return <h2>Something went wrong</h2>;

}

export default Quiz;
