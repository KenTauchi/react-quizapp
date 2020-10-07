import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { push } from "connected-react-router";

import { QuizDataKen, QuizDataRina } from "../quizDataFile";

import {
  getIndex,
  getLength,
  getQuiz,
  getQuizOption,
  getTitle,
} from "../reducks/quizData/selectors";

import {
  getCheckCorrect,
  getShowScore,
  getShowNext,
} from "../reducks/userAct/selectors";

import { quizImportAction } from "../reducks/quizData/action";
import { updateScoreAction, showNextAction } from "../reducks/userAct/action";

import { Answer } from "../components";

function Quiz() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const title = getTitle(selector);
  const quizIndex = getIndex(selector);
  const quizLength = getLength(selector);
  const question = getQuiz(selector);
  const options = getQuizOption(selector);
  const showNext = getShowNext(selector);
  const showScore = getShowScore(selector);
  const correct = getCheckCorrect(selector);

  const whichQuiz = title === "Ken's Quiz" ? QuizDataKen : QuizDataRina;
  const sendData = {
    quizData: whichQuiz,
    currentIndex: quizIndex,
  };

  const updater = updateScoreAction(correct);

  console.log(selector);

  return quizLength === 0 ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h2>Welcome to {title}</h2>
      <div>
        <h3>{question}</h3>
        <span>
          No.{quizIndex} of {quizLength}
        </span>
        {options.map((ans, index) => (
          <Answer key={index} text={ans} />
        ))}
      </div>
      {showNext ? (
        <button
          onClick={() => {
            dispatch(quizImportAction(sendData));
            dispatch(updater);
            dispatch(showNextAction(false));
          }}
        >
          Next
        </button>
      ) : (
        ""
      )}

      {showScore ? (
        <button
          onClick={() => {
            dispatch(push("/score"));
            dispatch(updater);
          }}
        >
          See Score
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Quiz;
