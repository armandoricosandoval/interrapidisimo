import { DESELECT_SUBJECT, SELECT_SUBJECT } from "../types";


export const selectSubject = (subject) => {
  return {
    type: SELECT_SUBJECT,
    payload: subject
  };
};

export const deselectSubject = (subject) => {
  return {
    type: DESELECT_SUBJECT,
    payload: subject
  };
};