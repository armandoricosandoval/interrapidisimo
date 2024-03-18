import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";


const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <div
      id="SidebarRoot"
      className="border-solid border-[#bcc1ca]  bg-white flex flex-col gap-8 w-48 h-[791px] items-start py-6 border"
    >
      <img
        src={process.env.PUBLIC_URL + "/img/Logoalterno2.png"}
        alt="Image1"
        id="Image1"
        className="ml-3 w-32"
      />
      <div
        id="SidebarMenu"
        className="bg-black/0 flex flex-col justify-between ml-0 gap-3 w-full font-['Poppins'] items-start"
      >
        <div className="bg-black/0 flex flex-row gap-3 w-full items-start">
          <div className="bg-[#6355d8] w-1 h-10" />
          <div className="flex flex-row mt-2 gap-2 w-3/4 font-['Poppins'] items-start">
            <img
              src="https://file.rendit.io/n/xlIhE3OJoLS7HmuwZfyI.svg"
              alt="Layout"
              id="Layout"
              className="w-6"
            />
            <Link
              to="/profile-students"
              className="text-sm font-bold leading-[22px] text-[#6355d8] mt-px"
            >
              Dashboard
            </Link>
          </div>
        </div>
        <div className="bg-black/0 flex flex-row gap-2 w-full h-10 items-start pt-2 px-4">
          <img
            src="https://file.rendit.io/n/82K6JByIvIK4m1jxjDiR.svg"
            alt="Folder"
            id="Folder"
            className="w-6"
          />
          <Link
              to="/profile-students"
              className="text-sm font-bold leading-[22px] text-[#6355d8] mt-px"
            >
            Materias Inscritas
          </Link>
        </div>
        <div className="bg-black/0 flex flex-row gap-2 w-full h-10 items-start pt-2 px-4">
          <img
            src="https://file.rendit.io/n/u1IbFOV2esNGajZXpNJe.svg"
            alt="Meeting"
            id="Meeting"
            className="w-6"
          />
          <Link
            to="/studentsList"
            className="text-sm leading-[22px] text-[#565e6c] mt-px"
          >
            Comunidad Estudiantil
          </Link>
        </div>
        
        <div className="bg-black/0 flex flex-row gap-2 w-full h-10 font-['Poppins'] items-start pt-2 px-4">
          <img
            src="https://file.rendit.io/n/FsIiCIS3l1WC4nbz2MyX.svg"
            alt="FChat"
            id="FChat"
            className="w-6"
          />
          <div className="text-sm leading-[22px] text-[#565e6c] mt-px">
            Mensajes
          </div>
        </div>
        <div className="bg-black/0 flex flex-row gap-2 w-full h-10 font-['Poppins'] items-start pt-2 px-4">
          <img
            src="https://file.rendit.io/n/Du1nH20XkuUkSDS9qnnW.svg"
            alt="FilterOrganization"
            id="FilterOrganization"
            className="w-6"
          />
          <Link
            to="/integracion-de-materias"
            className="text-sm leading-[22px] text-[#565e6c] mt-px"
          >
            Integración de Materias
          </Link>
        </div>
        <div className="bg-black/0 flex flex-row gap-2 w-full h-10 font-['Poppins'] items-start pt-2 px-4">
          <img
            src="https://file.rendit.io/n/IjRmgMwiXNYSzufULbf0.svg"
            alt="SettingsGear"
            id="SettingsGear"
            className="w-6"
          />
          <div className="text-sm leading-[22px] text-[#565e6c] mt-px">
            Settings
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(logout());
            history("/");
          }}
          className="bg-black/0 flex flex-row gap-2 w-full h-10 font-['Poppins'] items-start pt-2 px-4"
        >
          <img
            src="https://file.rendit.io/n/9UvRtMSIFWCCA5tiSt9U.svg"
            alt="Logout"
            id="Logout"
            className="w-6"
          />
          <div className="text-sm leading-[22px] text-[#565e6c] mt-px">
            Sing out
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
