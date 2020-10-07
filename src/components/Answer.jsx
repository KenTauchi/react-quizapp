import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getIndex, getLength, getAnswer } from "../reducks/quizData/selectors";

import {
  showNextAction,
  showScoreAction,
  checkCorrectAction,
} from "../reducks/userAct/action";

function Answer(props) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const quizIndex = getIndex(selector);
  const quizLength = getLength(selector);
  const answer = getAnswer(selector);

  const showAction =
    quizIndex === quizLength ? showScoreAction(true) : showNextAction(true);

  return (
    <div>
      <button
        value={props.text}
        onClick={(event) => {
          dispatch(showAction);
          dispatch(
            checkCorrectAction(event.target.value === answer.toString())
          );
        }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Answer;
