import * as Actions from "./action";

const INITIAL_STATE = {
  showNext: false,
};

export const showNextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SHOW_NEXT:
      return {
        ...state,
        showNext: action.payload,
      };

    default:
      return state;
  }
};
