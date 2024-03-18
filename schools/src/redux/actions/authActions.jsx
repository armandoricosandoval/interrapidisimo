// authActions.js
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { firebaseAppAuth } from "../../firebase/firebase";
import {
  GET_AUTH_SUCCESS,
  SET_AUTH_ERROR,
  SET_AUTH_LOADING,
  SET_AUTH_SUCCESS,
  SET_CURRENT_USER,
} from "../types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setAuthLoading = (loading) => ({
  type: SET_AUTH_LOADING,
  payload: loading,
});

export const setAuthError = (error) => ({
  type: SET_AUTH_ERROR,
  payload: error,
});

export const setAuthSuccess = (success) => ({
  type: SET_AUTH_SUCCESS,
  payload: success,
});
export const setRegisterAuthSuccess = (success) => ({
  type: GET_AUTH_SUCCESS,
  payload: success,
});

// Async action to handle login
export const loginAsync = (email, password) => async (dispatch) => {
  dispatch(setAuthLoading(true));

  try {
    const res = await signInWithEmailAndPassword(
      firebaseAppAuth,
      email,
      password
    );
    dispatch(setCurrentUser(res.user));
    dispatch(setAuthSuccess("Login successful."));
  } catch (error) {
    dispatch(setAuthError("Error al registrar"));
  } finally {
    dispatch(setAuthLoading(false));
  }
};
// Async action to handle login
export const signup = (email, password) => async (dispatch) => {
  dispatch(setAuthLoading(true));

  try {
    await createUserWithEmailAndPassword(firebaseAppAuth, email, password);
    dispatch(setRegisterAuthSuccess("singup successful."));
  } catch (error) {
    dispatch(setAuthError("Error al registrar"));
  } finally {
    dispatch(setAuthLoading(false));
  }
};

// Async action to handle Google login
export const loginWithGoogleAsync = () => async (dispatch) => {
  dispatch(setAuthLoading(true));

  try {
    const res = await signInWithPopup(
      firebaseAppAuth,
      new GoogleAuthProvider()
    );
    dispatch(setCurrentUser(res.user));
    dispatch(setAuthSuccess("Login successful."));
  } catch (error) {
    dispatch(setAuthError("Error al registrar con Google."));
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const logout = () => async (dispatch) => {
  try {
    signOut(firebaseAppAuth);
    dispatch(setCurrentUser(null));
    dispatch(setAuthSuccess(""));
  } catch (error) {
    dispatch(setAuthError("Error al registrar con Google."));
  } finally {
    dispatch(setAuthLoading(false));
  }
};
