import { createSelector } from "reselect";

const quizDataSelector = (reducer) => reducer.QuizData;

export const getIndex = createSelector(
  [quizDataSelector],
  (quizData) => quizData.currentIndex
);
export const getLength = createSelector(
  [quizDataSelector],
  (quizData) => quizData.quizLength
);
export const getQuiz = createSelector(
  [quizDataSelector],
  (quizData) => quizData.data.question
);

export const getQuizOption = createSelector(
  [quizDataSelector],
  (quizData) => quizData.data.option
);

export const getAnswer = createSelector(
  [quizDataSelector],
  (quizData) => quizData.data.answer
);

export const getTitle = createSelector(
  [quizDataSelector],
  (quizData) => quizData.title
);
