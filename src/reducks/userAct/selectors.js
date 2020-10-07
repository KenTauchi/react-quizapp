import { createSelector } from "reselect";

const userActSelector = (reducer) => reducer.UserAct;

export const getCheckCorrect = createSelector(
  [userActSelector],
  (userAct) => userAct.correct
);

export const getShowNext = createSelector(
  [userActSelector],
  (userAct) => userAct.showNext
);

export const getShowScore = createSelector(
  [userActSelector],
  (userAct) => userAct.showScore
);

export const getScore = createSelector(
  [userActSelector],
  (userAct) => userAct.score
);
