import { useSelector } from "react-redux";
import Sidebar from "../assets/Sidebar";
import { Link } from "react-router-dom";

const ProfileStudents = () => {
  const authState = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex flex-row mx-auto">
        <Sidebar />
        <div
          id="ProfileRoot"
          className=" bg-white flex flex-col gap-12 w-full items-start pt-8 pb-5 px-8"
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
          <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center">
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
          </div>

        </div>
      </div>
    </>
  );
};

export default ProfileStudents;
