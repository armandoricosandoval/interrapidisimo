import { SELECT_SUBJECT, DESELECT_SUBJECT } from './types';

const initialState = {
  selectedSubjects: []
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SUBJECT:

      return {
        ...state,
        selectedSubjects: [...state.selectedSubjects, action.payload]
      };
    case DESELECT_SUBJECT:
      return {
        ...state,
        selectedSubjects: state.selectedSubjects.filter(subject => subject !== action.payload)
      };
    default:
      return state;
  }
};

export default studentReducer;