import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { movieReducer, modalReducer, filterReducer } from "./reducers";

const store = createStore(
  combineReducers({
    movies: movieReducer,
    filter: filterReducer,
    modal: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

export default store;
