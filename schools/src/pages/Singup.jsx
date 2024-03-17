import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/authActions";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const history = useNavigate();

  useEffect(() => {
    if (authState.acount) {
      history("/login");
    }
  }, [authState, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signup(email, password));
  };

  return (
    <div className="flex container mx-auto max-w-lg w-full ">
    <div className="w-full px-5  bg-white rounded-lg lg:rounded-l-none flex flex-col justify-center items-center mt-10 p-5">
    
        <div className="mt-8 font-bold text-black text-3xl ">
          Create an account.
        </div>
        <form
          className="bg-white mb-4 w-full max-w-[400px] mx-auto"
          onSubmit={handleSubmit}
        >
          <fieldset className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
              placeholder="Enter email"
              name="email"
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </fieldset>
          <fieldset className="mb-4">
            <label className="block mb-2 text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </fieldset>
          <button
            className="mt-4 box-border w-full h-[44px] bg-[#6355d8] rounded-[6px] overflow-hidden text-white"
            type="submit"
          >
            {"Sign Up"}
          </button>
        </form>

        <hr className="mb-4 border-t" />
        <div className="text-sm text-center  mx-auto text-black-600 hover:text-red-500">
          <Link to="/login" className="font-bold text-[#6355d8] text-sm ">
            Sign In
          </Link>
          <div className="font-normal text-[#171a1f] text-sm">
            Don't have an account?
          </div>

        </div>
      
    </div>
    </div>
  );
};

export default Singup;
