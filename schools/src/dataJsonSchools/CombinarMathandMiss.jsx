import React from 'react'
import { Profesores } from './Profesores';
import { Materias } from './Materias';

const CombinarMathandMiss = () => {
    function combinarProfesorEnMaterias() {
        Profesores.forEach(profesor => {
            profesor.materias.forEach(materiaNombre => {
                const materia = Materias.find(materia => materia.nombre === materiaNombre);
                if (materia) {
                    materia.profesor = profesor.nombre;
                }
            });
        });
    }
  return (
    <div>{combinarProfesorEnMaterias()}</div>
  )
}

export default CombinarMathandMiss