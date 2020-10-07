import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { getScore } from "../reducks/userAct/selectors";

function Score() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const score = getScore(selector);
  console.log(selector);

  return (
    <div>
      <h1>Your Score</h1>
      <h2>{score}</h2>
      <button
        onClick={() => {
          dispatch(push("/"));
        }}
      >
        Back to home
      </button>
    </div>
  );
}

export default Score;
