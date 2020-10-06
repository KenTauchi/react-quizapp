import React from "react";
import { useDispatch } from "react-redux";

import { showNextAction } from "../reducks/showNext/action";

function Answer(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(showNextAction(true))}>
        {props.text}
      </button>
    </div>
  );
}

export default Answer;
