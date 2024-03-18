import React from 'react'
import { Link } from 'react-router-dom'
import Navbars from '../assets/Navbars'

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-2 max-h-screen h-full">
        <Navbars />
        <div className="relative w-full h-[547px] bg-white flex flex-row items-center justify-center px-10">
          <div className="flex flex-col mx-auto justify-center ml-24 w-1/2">
            <div className="mt-10 font-bold text-black text-5xl ">
              Prueba de Registro Estudiantil
            </div>
            <p className="mt-4 text-[#9095a0] text-md w-2/3">
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
                to="/singup"
                className="w-[145px] bg-vl-600 h-[52px] rounded-[6px] overflow-hidden text-center"
              >
                <div className="p-2 font-normal text-white text-xl tracking-[0] leading-[28px]">
                  Únete ahora
                </div>
              </Link>
              <button className="ml-4 w-[142px] h-[52px] rounded-[6px] overflow-hidden">
                <div className="p-2 font-normal text-vl-600 text-xl tracking-[0] leading-[28px]">
                  Aprende más
                </div>
              </button>
            </div>
          </div>
          <img
            className="w-1/2 max-h-xl h-full mt-10"
            alt="ImageHome"
            src={process.env.PUBLIC_URL + "/img/task-manager.svg"}
          />
        </div>
      </div>
    </>
  )
}

export default Home
