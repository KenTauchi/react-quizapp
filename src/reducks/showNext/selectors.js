import { createSelector } from "reselect";

const showNextSelector = (reducer) => reducer.ShowNext;

export const getShowNext = createSelector(
  [showNextSelector],
  (ShowNext) => ShowNext.showNext
);
