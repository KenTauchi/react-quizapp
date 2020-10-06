import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { QuizSetReducer } from "../quizData/reducers";

import thunk from "redux-thunk";
import { showNextReducer } from "../showNext/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      QuizData: QuizSetReducer,
      ShowNext: showNextReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
