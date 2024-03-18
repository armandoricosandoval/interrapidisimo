import { Profesores } from "../../dataJsonSchools/Profesores";
import { DESELECT_SUBJECT, SELECT_SUBJECT } from "../types";


export const selectSubject = (subject) => {
  return (dispatch, getState) => {
    const state = getState();
    const selectedProfessors = state.student.selectedSubjects.map(subject => subject.profesor);

    const professorTeaching = Profesores.find(professor => professor.materias.some(materia => materia === subject.nombre));

    if (professorTeaching && selectedProfessors.includes(professorTeaching.nombre)) {
      alert("No puedes seleccionar una materia con el mismo profesor.");
    } else {
      dispatch({
        type: SELECT_SUBJECT,
        payload: subject
      });
    }
  };
};

export const deselectSubject = (subject) => {
  return {
    type: DESELECT_SUBJECT,
    payload: subject
  };
};