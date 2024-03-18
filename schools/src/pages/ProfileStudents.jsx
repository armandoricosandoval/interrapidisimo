import { useSelector } from "react-redux";
import Sidebar from "../assets/Sidebar";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const ProfileStudents = () => {
  const authState = useSelector((state) => state.auth);
  const subjects = useSelector(state => state.student.selectedSubjects);
  const [precioEuros, setPrecioEuros] = useState({});

  useEffect(() => {
    const fetchConversion = async () => {
      try {
        const precioDolares = subjects.map(subject => subject.precio_por_credito);
        const preciosPromesas = precioDolares.map(precio => convertirADolaresAEuros(precio));
        const preciosEnEuros = await Promise.all(preciosPromesas);

        const preciosEuros = {};
        subjects.forEach((subject, index) => {
          preciosEuros[subject.nombre] = preciosEnEuros[index];
        });

        setPrecioEuros(preciosEuros);
      } catch (error) {
        console.error('Error al convertir a euros:', error);
      }
    };

    fetchConversion();
  }, [subjects]);

  const convertirADolaresAEuros = async (precioDolares) => {
    try {
      const response = await axios.get('https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR');
      const tasaConversion = response.data.rates.EUR; // Obtener la tasa de conversión de USD a EUR
      const precioEuros = precioDolares * tasaConversion;
      return precioEuros.toFixed(2); // Redondear a 2 decimales
    } catch (error) {
      console.error('Error al convertir a euros:', error);
      return null; // Manejar el error según sea necesario en tu aplicación
    }
  };

  return (
    <>
      <div className="flex flex-row mx-auto">
        <Sidebar />
        <div
          id="ProfileRoot"
          className=" bg-white flex flex-col gap-12 w-full items-start pt-8 pb-5 px-8 mx-auto"
        >
          <div className="flex flex-row justify-between w-full items-start">
            <div className="flex flex-row gap-5 w-1/2 items-start">
              <div
                id="Avatar"
                className="bg-[#cfcbf3] flex flex-row w-16 items-start rounded-[32px]"
              >
                <div className="bg-[url(https://file.rendit.io/n/C8iqydi42IDJTNEZdzA3.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end w-16 h-16 items-start pt-px px-px">
                  <div className="border-solid border-white bg-[#dee1e6] mt-12 w-4 h-4 border-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col mt-1 w-3/5  items-start">
                <div className="text-sm  leading-[22px] text-[#6e7787]">
                  Estudiante
                </div>
                <div className="text-2xl leading-[36px] text-[#171a1f]">
                  {authState.currentUser && authState.currentUser.email}
                </div>
              </div>
            </div>
            <button
              id="IconButton"
              className="bg-[#eaecef] flex flex-row mt-3 w-8 h-8 cursor-pointer items-start pt-2 px-2 rounded-lg"
            >
              <img
                src="https://file.rendit.io/n/9HwMIqgFKlFkioijPTHs.svg"
                alt="Edit"
                id="Edit"
                className="w-5"
              />
            </button>
          </div>
          {subjects.length === 0 && <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                ¡Bienvenido a Tu Perfil!
                <strong className="font-extrabold text-red-700 sm:block"> Gestionar Tus Materias y Créditos. </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                ¡Es hora de comenzar tu trayectoria académica! Aquí puedes ver las materias en las que estás inscrito y gestionar tus créditos. ¡No pierdas más tiempo y comienza ahora!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  to="/integracion-de-materias"
                >
                  Empezar
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  to="/comunidad"
                >
                  Más Información
                </Link>
              </div>
            </div>
          </div>}
          {subjects.length > 0 &&
            <div className="bg-white mx-auto">
              <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Te Felicitamos por tu selección de materias</h2>
                  <p className="mt-4 text-gray-500 sm:text-xl">
                    A continuación, encontrarás los detalles de cada materia inscrita, incluyendo el número de créditos y otros detalles importantes. Recuerda que siempre puedes gestionar tus materias desde la sección de integración de materias y realizar cualquier ajuste necesario.
                  </p>
                </div>

                <div className="mt-8 sm:mt-12">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {subjects.map(materia => (
                      <div key={materia.nombre} className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">{materia.creditos} créditos</dt>
                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{materia.nombre}</dd>
                        <dd className="text-gray-500">$ {materia.precio_por_credito} por crédito</dd>
                        <dd className="text-gray-500">Precio por crédito (EUR): {precioEuros[materia.nombre]}</dd>
                        <dd className="text-gray-500">Profesor: {materia.profesor}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

          }
        </div>
      </div>
    </>
  );
};

export default ProfileStudents;
