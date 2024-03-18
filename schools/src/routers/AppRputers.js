import { Route, Routes } from "react-router-dom";
import { Footer } from "../assets/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import ProfileStudents from "../pages/ProfileStudents";
import SubjectSelection from "../pages/SubjectSelection";
import Students from "../pages/Students";


const AppRouters = () => {
  return (
    <>
    <div className="h-full max-h-screen mx-auto w-full">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Singup />} />
          <Route path="/profile-students" element={<ProfileStudents />} />
          <Route path="/integracion-de-materias" element={<SubjectSelection/>} />
          <Route path="/studentsList" element={<Students/>} />
        </Routes>
    </div>
      <Footer />
    </>
  );
};

export default AppRouters;
