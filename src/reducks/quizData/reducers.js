import * as Actions from "./action";
import initialState from "../store/initialState";

import { returnQuiz } from "./utils";

export const QuizSetReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.QUIZ_IMPORT:
      return {
        ...state,
        quizData: returnQuiz(
          action.payload.quizData,
          action.payload.currentIndex
        ),
        quizLength: action.payload.quizData.length,
        currentIndex: action.payload.currentIndex + 1,
        showNext: false,
      };
    case Actions.ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
};
