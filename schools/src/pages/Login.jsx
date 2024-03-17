import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync, loginWithGoogleAsync } from "../redux/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const history = useNavigate();

  useEffect(() => {
    if (authState.success) {
      history("/profile-students");
    }
  }, [authState, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
  };

  const loginByGoogle = async () => {
    dispatch(loginWithGoogleAsync());
  };

  return (
    <div className="flex flex-row justify-center items-center h-auto bg-white mx-auto gap-3 lg:gap-0">
      <img
        className="relative w-1/2 lg:w-[750px] lg:max-h-screen mr-auto"
        alt="ImageLogin"
        src="https://c.animaapp.com/zUkxeuy8/img/image-55.png"
      />
      <div className="w-full px-5 lg:w-1/2 bg-white rounded-lg lg:rounded-l-none flex flex-col justify-center items-center">
        <div className="mt-8 font-bold text-black text-3xl">Hello.</div>
        <div className="mt-2 text-[#9095a0] text-xl">Welcome back</div>
        {authState.error && (
          <p className="text-xl text-orange ">{authState.error}</p>
        )}
        <form
          className="bg-white mb-4 w-full max-w-[500px] mx-auto"
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
            {"Sign In"}
          </button>
        </form>

        <img
          onClick={() => loginByGoogle()}
          className="mt-4 w-[32px] h-[32px] mx-auto justify-center text-center mb-5"
          alt="Google"
          src="https://c.animaapp.com/zUkxeuy8/img/google-1.svg"
        />
        <hr className="mb-4 border-t" />
        <div className="text-sm text-center mx-auto text-black-600 hover:text-red-500">
          <Link to="/sing-up" className="font-bold text-[#6355d8] text-sm">
            Sign up
          </Link>
          <div className="font-normal text-[#171a1f] text-sm">
            Don't have an account?
          </div>

          <div className="mt-4 font-bold text-[#6e7787] text-sm">
            OR CONTINUE WITH
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
