import React from 'react'
import { Link } from 'react-router-dom'
import Navbars from '../assets/Navbars'

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-2 h-auto">
        <Navbars />
        <div className="relative w-full h-auto bg-white flex flex-row items-center justify-center px-10 mt-10">
          <div className="flex flex-col mx-auto justify-center ml-5 w-auto">
            <div className="mt-2 font-bold text-black text-xl md:text-5xl ">
              Prueba de Registro Estudiantil
            </div>
            <p className="mt-4 text-[#9095a0] text-md w-2/3 hidden md:block">
              Regístrate para iniciar Carrera. Completa tu perfil para
              encontrar materias disponibles según los créditos de tu semestre.
              <br />
              Descubre las materias disponibles y sus detalles. Revisa los requisitos y
              opiniones para tomar decisiones informadas.
              <br />
              Selecciona tus materias y confirma tu inscripción. ¡Estás a punto de
              completar tu registro estudiantil!
            </p>
            <div className="flex mt-12">
              <Link
                to="/sing-up"
                className="w-[145px] bg-vl-600 h-[52px] rounded-md overflow-hidden text-center"
              >
                <div className="p-2 font-normal text-white text-xl tracking-[0] leading-[28px]">
                  Únete ahora
                </div>
              </Link>
              <button className="ml-4 w-[142px] h-[52px] rounded-md overflow-hidden">
                <div className="p-2 font-normal text-vl-600 text-xl tracking-[0] leading-[28px]">
                  Aprende más
                </div>
              </button>
            </div>
          </div>
          <img
            className="w-[400px] h-auto object-cover"
            alt="ImageHome"
            src={process.env.PUBLIC_URL + "/img/task-manager.svg"}
          />
        </div>
      </div>
    </>
  )
}

export default Home
