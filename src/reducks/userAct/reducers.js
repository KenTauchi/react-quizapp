import * as Actions from "./action";
import * as Resets from "../resetState/action";

import initialState from "../store/initialState";

export const userActReducer = (state = initialState.userAct, action) => {
  switch (action.type) {
    case Actions.CHECK_CORRECT:
      return {
        ...state,
        correct: action.payload,
      };
    case Actions.SHOW_NEXT:
      return {
        ...state,
        showNext: action.payload,
      };
    case Actions.SHOW_SCORE:
      return {
        ...state,
        showScore: action.payload,
      };
    case Actions.UPDATE_SCORE:
      return {
        ...state,
        score: action.payload ? state.score + 1 : state.score,
      };
    case Resets.RESET_STATE:
      return {
        ...state,
        correct: initialState.userAct.correct,
        showScore: initialState.userAct.showScore,
        score: initialState.userAct.score,
        showNext: initialState.userAct.showNext,
      };

    default:
      return state;
  }
};
