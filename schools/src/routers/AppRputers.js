import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../assets/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import ProfileStudents from "../pages/ProfileStudents";
import SubjectSelection from "../pages/SubjectSelection";
import Students from "../pages/Students";
import NotFoundPage from "../pages/NotFoundPage";


const AppRouters = () => {
  return (
    <>
    <div className="h-auto mx-auto w-full relative pb-32">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Singup />} />
          <Route path="/profile-students" element={<ProfileStudents />} />
          <Route path="/integracion-de-materias" element={<SubjectSelection/>} />
          <Route path="/studentsList" element={<Students/>} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
    </div>
      <Footer />
    </>
  );
};

export default AppRouters;
