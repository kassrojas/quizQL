// Node Modules
import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Utilities
import { QUERY_ME, QUERY_QUESTIONS } from '../utils/queries';
import { ADD_SCORE } from "../utils/mutations";
// Components
import Question from './Question';
import Result from "./Result";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');

  const [addScore, { error: scoreError }] = useMutation(ADD_SCORE);

  const { topic } = useParams();
  const category = topic.slice(1);

  const { loading: meLoading, data: meData } = useQuery(QUERY_ME);
  
  const user = meData?.me || {};
  const userId = user._id;

  const { loading, data } = useQuery(QUERY_QUESTIONS, {
    variables: { category },
  });

  const questions = data?.searchQuestions || [];

  const resetQuiz = () => {
    setCurrentIndex(currentIndex => currentIndex = 0);
  }

  console.log('index', currentIndex);
  console.log('length', questions.length);
  
  const handleSubmit = () => {
    if (correct === null) {
      setError('Please choose an answer to continue.');
      return;
    }
    
    if (currentIndex < questions.length - 1) {
      if (correct) setScore(score => 1 + score);

      setCorrect(false);
      setError('')
      setCurrentIndex(currentIndex => 1 + currentIndex);

    } else if (currentIndex === questions.length - 1) {
      console.log('category', category)
      try {
        const { data } = addScore({
          variables: { user: userId, score: score, category: category }
        }) 
      } catch (err) {
        console.error(err);
      }
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
  
  if (currentIndex > questions.length - 1) {
    return <Result score={score} total={questions.length} reset={resetQuiz} />
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
  
  const selectAnswer = (e) => {
    console.log('ANSWER', questions[currentIndex].correct_answer);
    console.log('SELECTED', e.target.value);
    setCorrect(questions[currentIndex].correct_answer === e.target.value);
  };
  
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
        {error && (
          <div className="row text-center text-light">
            <p>{error}</p>
          </div>
        )}
      </>
    )
  }

  return <h2>Something went wrong</h2>;

}

export default Quiz;
