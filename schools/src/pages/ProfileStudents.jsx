import { useSelector } from "react-redux";
import Sidebar from "../assets/Sidebar";

const ProfileStudents = () => {
  const authState = useSelector((state) => state.auth);
  return (
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
                Customer
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
        
      </div>
    </div>
  );
};

export default ProfileStudents;
