export const CHECK_CORRECT = "CHECK_CORRECT";
export const checkCorrectAction = (action) => {
  return {
    type: "CHECK_CORRECT",
    payload: action,
  };
};

export const SHOW_NEXT = "SHOW_NEXT";
export const showNextAction = (action) => {
  return {
    type: "SHOW_NEXT",
    payload: action,
  };
};

export const SHOW_SCORE = "SHOW_SCORE";
export const showScoreAction = (action) => {
  return {
    type: "SHOW_SCORE",
    payload: action,
  };
};

export const UPDATE_SCORE = "UPDATE_SCORE";
export const updateScoreAction = (action) => {
  return {
    type: "UPDATE_SCORE",
    payload: action,
  };
};
