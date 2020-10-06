import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getIndex,
  getLength,
  getQuiz,
  getQuizOption,
} from "../reducks/quizData/selectors";
import { getShowNext } from "../reducks/showNext/selectors";

import { Answer } from "../components";

import { QuizDataKen, QuizDataRina } from "../quizDataFile";
import { quizImportAction } from "../reducks/quizData/action";

import { getTitle } from "../reducks/quizData/selectors";
import { showNextAction } from "../reducks/showNext/action";

function Quiz() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const quizIndex = getIndex(selector);
  const quizLength = getLength(selector);
  const question = getQuiz(selector);
  const options = getQuizOption(selector);

  const showNext = getShowNext(selector);
  const title = getTitle(selector);

  const whichQuiz = title === "Ken's Quiz" ? QuizDataKen : QuizDataRina;
  const sendData = {
    quizData: whichQuiz,
    currentIndex: quizIndex,
  };

  console.log(selector);

  return (
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
        {showNext ? (
          <button
            onClick={() => {
              dispatch(quizImportAction(sendData));
              dispatch(showNextAction(false));
            }}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Quiz;
