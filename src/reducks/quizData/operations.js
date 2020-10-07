import { quizImportAction } from "./action";
import { push } from "connected-react-router";

export const getQuizData = (dataObj) => {
  return async (dispatch, getState) => {
    const dataSet = await dataObj;

    dispatch(quizImportAction(dataSet));
  };
};
