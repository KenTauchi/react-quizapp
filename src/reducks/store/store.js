import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { QuizSetReducer } from "../quizData/reducers";
import { userActReducer } from "../userAct/reducers";

import thunk from "redux-thunk";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      QuizData: QuizSetReducer,
      UserAct: userActReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
