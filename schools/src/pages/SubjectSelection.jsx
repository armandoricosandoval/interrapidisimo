import { useSelector, useDispatch } from 'react-redux';
import { deselectSubject, selectSubject } from '../redux/actions/estudesselectionActions';
import Sidebar from '../assets/Sidebar';
import { Materias } from '../dataJsonSchools/Materias';
import { useEffect } from 'react';
import CombinarMathandMiss from '../dataJsonSchools/CombinarMathandMiss';


const SubjectSelection = () => {
    const subjects = useSelector(state => state.student.selectedSubjects);
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);


    
    useEffect(() => {
        
        CombinarMathandMiss()
    }, [])
    

    const handleSelect = (subject) => {

        if (subjects?.length === 3) {
            alert("Solo puedes seleccionar hasta 3 materias.");
        } else {
            dispatch(selectSubject(subject));
        }
    };

    const handleDeselect = (subject) => {
        dispatch(deselectSubject(subject));
    };

    // Renderiza la lista de materias con botones de selección/deselección

    return (
        <div className="flex flex-row mx-auto h-auto max-h-screen ">
            <Sidebar />

            <article className="py-5 rounded-xl sm:max-w-md lg:max-w-xl w-full border border-gray-700 bg-gray-800 p-4 h-full max-h-xl justify-center mt-10 ml-24">
                <div className="flex items-center gap-4">
                    <img
                        alt=""
                        src="https://file.rendit.io/n/C8iqydi42IDJTNEZdzA3.png"
                        className="size-16 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="text-lg font-medium text-black">Estudiante</h3>

                        <div className="text-2xl leading-[36px] text-[#171a1f]">
                            {authState.currentUser && authState.currentUser.email}
                        </div>
                    </div>
                </div>

                <ul className="mt-4 space-y-2 ">
                    {subjects?.map((subject, index) => (
                        <li key={index} onClick={() => handleDeselect(subject)} className='text-gray-700 hover:bg-gray-50 focus:relative cursor-auto'>
                            <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-blue-600">
                                <strong className="font-medium text-vl-500">{subject.nombre}</strong>
                                <button
                                    className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                    title="Delete Product"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                                <p className="mt-1 text-base font-medium text-gray-300">
                                    Créditos: {subject.creditos}
                                </p>
                                <p className="mt-1 text-xs font-medium text-gray-300">
                                    Precio por crédito: ${subject.precio_por_credito} USD
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            <div>
                <article className="py-5 rounded-xl sm:max-w-md lg:max-w-3xl w-full border border-gray-700 bg-gray-800 p-4 h-auto justify-center mt-10 ml-24">
                    <h3 className="text-lg font-medium text-black">Listado De Materias:</h3>

                    <ul className="mt-4 space-y-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {Materias.map((subject, index) => (
                            <li key={index} onClick={() => handleSelect(subject)} className='text-gray-700 hover:bg-gray-50 focus:relative cursor-auto'>
                                <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-blue-600">

                                    <strong className="font-medium text-vl-500">{subject.nombre}</strong>
                                    <button
                                        className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                        title="Edit Product"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            />
                                        </svg>
                                    </button>
                                    <p className="mt-1 text-base font-medium text-gray-300">
                                        Créditos: {subject.creditos}
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-gray-300">
                                        Precio por crédito: ${subject.precio_por_credito} USD
                                    </p>

                                </div>

                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>


    );
};

export default SubjectSelection;
