export const QUIZ_IMPORT = "QUIZ_IMPORT";
export const ADD_TITLE = "ADD_TITLE";

export const quizImportAction = (quizData) => {
  return {
    type: "QUIZ_IMPORT",
    payload: quizData,
  };
};

export const addTitle = (titleText) => {
  return {
    type: "ADD_TITLE",
    payload: titleText,
  };
};
