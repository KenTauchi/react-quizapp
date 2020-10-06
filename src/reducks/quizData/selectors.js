import { createSelector } from "reselect";

const quizDataSelector = (reducer) => reducer.QuizData;

export const getIndex = createSelector(
  [quizDataSelector],
  (QuizData) => QuizData.currentIndex
);
export const getLength = createSelector(
  [quizDataSelector],
  (QuizData) => QuizData.quizLength
);
export const getQuiz = createSelector(
  [quizDataSelector],
  (QuizData) => QuizData.quizData.question
);

export const getQuizOption = createSelector(
  [quizDataSelector],
  (QuizData) => QuizData.quizData.option
);

export const getAnswer = createSelector(
  [quizDataSelector],
  (QuizData) => QuizData.quizData.answer
);

export const getTitle = createSelector(
  [quizDataSelector],
  (QuizData) => QuizData.title
);
