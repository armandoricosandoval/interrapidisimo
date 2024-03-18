import React from 'react'
import Sidebar from '../assets/Sidebar'

const studentsData = [
    {
        id: 1,
        nombre: 'Rachel',
        apellido: 'Mike Wazowski',
        materias: ['Materia 1', 'Materia 2', 'Materia 3'],
        carrera: 'Ingeniería Informática',
        progreso: 0.5 
    },
    {
        id: 2,
        nombre: 'John',
        apellido: 'Doe',
        materias: ['Materia 4', 'Materia 5', 'Materia 6'],
        carrera: 'Administración de Empresas',
        progreso: 0.8
    },
    {
        id: 3,
        nombre: 'Manuel',
        apellido: 'Key',
        materias: ['Materia 4', 'Materia 5', 'Materia 6'],
        carrera: 'Ingenieria de Sistemas',
        progreso: 0.3
    },
    
];

const Students = () => {
    return (
        <div className="flex flex-row mx-auto">
            <Sidebar />
            <div
                id="ProfileRoot"
                className=" bg-white flex w-full items-start pt-8 pb-5 px-8 mx-auto justify-center"
            >
                <div className="min-h-screen bg-gray-500">
                <div className="p-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="table-auto w-full">
                        <thead className="bg-blue-500 text-white shadow-lg">
                            <tr>
                                <th className="py-3 px-4 text-left">Estudiante</th>
                                <th className="py-3 px-4 text-left">Nombres</th>
                                <th className="py-3 px-4 text-left">Materias</th>
                                <th className="py-3 px-4 text-left">Carrera</th>
                                <th className="py-3 px-4 text-left">Progreso</th>
                                <th className="py-3 px-4 w-1/12">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-100">
                                    <td className="px-4 py-3">
                                        <img className="inline rounded-full w-1/12 mr-2.5 shadow-md" src={`https://picsum.photos/seed/${student.id}/200`} alt="..." />{student.nombre}
                                    </td>
                                    <td className="px-4 py-3">{student.apellido}</td>
                                    <td className="px-4 py-3">{student.materias.join(', ')}</td>
                                    <td className="px-4 py-3">{student.carrera}</td>
                                    <td>
                                        <div className="bg-gray-200 h-1.5 rounded-lg overflow-hidden">
                                            <div className={`w-${student.progreso * 100}/12 bg-red-500 h-1.5`}></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">&#8943;</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
                </div>


            </div>
        </div>
    )
}

export default Students