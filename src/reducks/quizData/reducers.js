import * as Actions from "./action";
import * as Resets from "../resetState/action";

import initialState from "../store/initialState";

import { returnQuiz } from "./utils";

export const QuizSetReducer = (state = initialState.quizData, action) => {
  switch (action.type) {
    case Actions.QUIZ_IMPORT:
      return {
        ...state,
        data: returnQuiz(action.payload.quizData, action.payload.currentIndex),
        quizLength: action.payload.quizData.length,
        currentIndex: action.payload.currentIndex + 1,
      };
    case Actions.ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case Resets.RESET_STATE:
      return {
        ...state,
        data: initialState.quizData.data,
        quizLength: initialState.quizData.quizLength,
        currentIndex: initialState.quizData.currentIndex,
        title: initialState.quizData.title,
      };

    default:
      return state;
  }
};
