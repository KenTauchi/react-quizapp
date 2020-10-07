import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { QuizDataKen, QuizDataRina } from "../quizDataFile";
import { quizImportAction, addTitle } from "../reducks/quizData/action";
import { resetStateAction } from "../reducks/resetState/action";

export const dataToSend = (data, index) => {
  return {
    quizData: data,
    currentIndex: index,
  };
};

function Home() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div>
      <h1>Please pick quiz</h1>
      <button
        onClick={() => {
          dispatch(resetStateAction());
          dispatch(quizImportAction(dataToSend(QuizDataKen, 0)));
          dispatch(addTitle("Ken's Quiz"));
          dispatch(push("/ken"));
        }}
      >
        Ken
      </button>
      <button
        onClick={() => {
          dispatch(resetStateAction());
          dispatch(quizImportAction(dataToSend(QuizDataRina, 0)));
          dispatch(addTitle("Rina's Quiz"));
          dispatch(push("/rina"));
        }}
      >
        Rina
      </button>
    </div>
  );
}

export default Home;
