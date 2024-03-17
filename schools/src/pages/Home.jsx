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
            RevisioScholars
          </div>
          <p className="mt-4 text-[#9095a0] text-md w-2/3">
            Sign up to kickstart your research journey. Complete your profile to
            find expert writers tailored to your needs.
            <br />
            Discover detailed profiles of expert writers. Check ratings and
            reviews for informed decisions.
            <br />
            Share your research and get proposals from writers. You're about to
            enhance your research document!
          </p>
          <div className="flex mt-12">
            <Link
              to="/login"
              className="w-[145px] bg-vl-600 h-[52px] rounded-[6px] overflow-hidden text-center"
            >
              <div className="p-2 font-normal text-white text-[18px] tracking-[0] leading-[28px]">
                Join us now
              </div>
            </Link>
            <button className="w-[142px] h-[52px] rounded-[6px] overflow-hidden">
              <div className="p-2 font-normal text-vl-600 text-[18px] tracking-[0] leading-[28px]">
                Learn more
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