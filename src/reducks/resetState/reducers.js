import * as Actions from "../resetState/action";
import initialState from "../store/initialState";

export const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.RESET_STATE:
      return {
        ...state,
        quizData: initialState.quizData,
        userAct: initialState.quizData,
      };

    default:
      return state;
  }
};
