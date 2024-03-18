import { Route, Routes } from "react-router-dom";
import { Footer } from "../assets/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import ProfileStudents from "../pages/ProfileStudents";


const AppRouters = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Singup />} />
          <Route path="/profile-students" element={<ProfileStudents />} />
        </Routes>
      <Footer />
    </>
  );
};

export default AppRouters;
