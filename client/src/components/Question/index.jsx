// Node Modules
import React, { useState, useEffect } from "react";

const Question = (props) => {
  useEffect(() => {
    const shuffle = (answers) => {
      let currentIndex = answers.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [answers[currentIndex], answers[randomIndex]] = [
          answers[randomIndex],
          answers[currentIndex],
        ];
      }
      return answers;
    };
    const shuffledAnswers = shuffle(props.answers);
  }, []);

  const handleChange = (event, index) => {
    props.selectAnswer(event);
    props.setCheckedIndex(index);
  };

  return (
    <main>
      <div className="card">
        <div className="card-body">
          <h4>{`${props.currentIndex + 1}. ${props.question}`}</h4>
        </div>
        <div height="900">
          {props.snippet ? (
            <img src={props.snippet} className="flex-grow" />
          ) : (
            <></>
          )}
        </div>

        <div>
          <ul>
            {props.answers.map((answer, index) => (
              <div className="form-check">
                <input
                  onChange={(event) => handleChange(event, index)}
                  className="d-flex justify-content-center form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="answer1"
                  value={answer}
                  checked={index === props.checkedIndex}
                />
                <label className="form-check-label" for="exampleRadios1">
                  {answer}
                </label>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Question;
