// authReducer.js
import {
  GET_AUTH_SUCCESS,
  SET_AUTH_ERROR,
  SET_AUTH_LOADING,
  SET_AUTH_SUCCESS,
  SET_CURRENT_USER,
} from "./types";

const initialState = {
  currentUser: null,
  loading: false,
  error: "",
  success: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_AUTH_LOADING:
      return { ...state, loading: action.payload };
    case SET_AUTH_ERROR:
      return { ...state, error: action.payload, success: "" };
    case SET_AUTH_SUCCESS:
      return { ...state, success: action.payload, error: "" };
    case GET_AUTH_SUCCESS:
      return { ...state, acount: action.payload, error: "" };
    default:
      return state;
  }
};

export default authReducer;
