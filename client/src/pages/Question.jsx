// Node Modules
import React, { useState } from "react";

const Question = (props) => {
  return (
    <main>
      <div className="card">
        <div className="card-body">
          <h4>{props.question}</h4>
        </div>
        {/* TODO: condition to show snippet only if exists */}
        <div height="900">
          <img src={props.snippet} className="flex-grow" />
        </div>

        <div>
          <ul>
            <div className="form-check">
              <input onChange={props.selectAnswer} className="form-check-input" type="radio" name="exampleRadios" id="answer1" value={props.answerA} />
              <label className="form-check-label" for="exampleRadios1">
                {props.answerA}
              </label>
            </div>
            <div className="form-check">
              <input onChange={props.selectAnswer} className="form-check-input" type="radio" name="exampleRadios" id="answer2" value={props.answerB} />
              <label className="form-check-label" for="exampleRadios2">
                {props.answerB}
              </label>
            </div>
            <div className="form-check">
              <input onChange={props.selectAnswer} className="form-check-input" type="radio" name="exampleRadios" id="answer3" value={props.answerC} />
              <label className="form-check-label" for="exampleRadios2">
                {props.answerC}
              </label>
            </div>
            <div className="form-check">
              <input onChange={props.selectAnswer} className="form-check-input" type="radio" name="exampleRadios" id="answer4" value={props.answerD} />
              <label className="form-check-label" for="exampleRadios2">
                {props.answerD}
              </label>
            </div>
          </ul>
        </div>
      </div>
    </main>

  )
}

export default Question;
