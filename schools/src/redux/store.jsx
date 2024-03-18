// store.js
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./authReducer";
import studentReducer from "./estudentsReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  student:studentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
