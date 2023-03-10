// Node Modules
import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Utilities
import { QUERY_ME, QUERY_QUESTIONS } from "../../utils/queries";
import { ADD_SCORE } from "../../utils/mutations";
// Components
import Question from "../../components/Question/index";
import Result from "../Result";
import "./index.css"

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [checkedIndex, setCheckedIndex] = useState(-1);

  const [addScore, { error: scoreError }] = useMutation(ADD_SCORE);

  const { topic } = useParams();
  const category = topic.slice(1);
  const retakeCategory = topic;

  // Query current user
  const { loading: meLoading, data: meData } = useQuery(QUERY_ME);

  const user = meData?.me || {};
  const userId = user._id;

  // Query questions by category
  const { loading, data } = useQuery(QUERY_QUESTIONS, {
    variables: { category },
  });

  const questions = data?.searchQuestions || [];

  // Submit answer handling
  const handleSubmit = () => {
    if (correct === null) {
      setError("Please choose an answer to continue.");
      return;
    }

    if (currentIndex < questions.length - 1) {
      if (correct) setScore((score) => 1 + score);

      setCorrect(null);
      setError("");
      setCurrentIndex((currentIndex) => 1 + currentIndex);
      setCheckedIndex(-1);
    } else if (currentIndex === questions.length - 1) {
      console.log("category", category);
      const finalScore = parseInt((score / questions.length) * 100);
      try {
        const { data } = addScore({
          variables: { user: userId, score: finalScore, category: category },
        });
      } catch (err) {
        console.error(err);
      }
      setCurrentIndex((currentIndex) => 1 + currentIndex);
    }
  };

  if (loading) {
    return (
      <main>
        <h2>Loading . . . . . . </h2>
      </main>
    );
  }

  // Go to results after last question
  if (currentIndex > questions.length - 1) {
    const finalScore = parseInt((score / questions.length) * 100);
    return (
      <Result
        finalScore={finalScore}
        total={questions.length}
        retakeCategory={retakeCategory}
      />
    );
  }

  console.log("QUESTIONS", questions);

  // Current question, current answer
  const selectedAnswers = [
    questions[currentIndex].incorrect_answers[0],
    questions[currentIndex].incorrect_answers[1],
    questions[currentIndex].incorrect_answers[2],
    questions[currentIndex].correct_answer,
  ];
  const selected = questions[currentIndex];

  const selectAnswer = (e) => {
    setCorrect(questions[currentIndex].correct_answer === e.target.value);
  };

  if (selected && selected.question) {
    const question = selected.question;
    const snippet = selected.snippet;
    const answers = selectedAnswers;
    return (
      <>
        <Question
          score={score}
          selectAnswer={selectAnswer}
          question={question}
          snippet={snippet}
          answers={answers}
          setCheckedIndex={setCheckedIndex}
          checkedIndex={checkedIndex}
          currentIndex={currentIndex}
        />
        <button
          onClick={() => handleSubmit()}
          type="submit"
          className="btn submitCustomCss mx-3"
        >
          Submit
        </button>
        {error && (
          <div className="row text-center text-light">
            <p>{error}</p>
          </div>
        )}
      </>
    );
  }

  return <h2>Something went wrong</h2>;
};

export default Quiz;
