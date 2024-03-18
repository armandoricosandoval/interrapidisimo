import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAsync, loginWithGoogleAsync } from "../redux/authActions";
import GoogleLogo from "../assets/GoogleLogo";

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
    <div className="flex container mx-auto w-full ">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 ">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                      Sign up
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Sign up and get our newest news.</p>
                  </div>
                </div>
              </div>
              <form
                className="bg-white mb-4 w-full max-w-[500px] mx-auto"
                onSubmit={handleSubmit}
              >
                <fieldset className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold"
                    htmlFor="email"
                  >
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
                  <label
                    className="block mb-2 text-sm font-bold"
                    htmlFor="password"
                  >
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
                  Inicia Sesión
                </button>
              </form>
              <div>
                <button className="mt-4 box-border w-full h-[44px] bg-vl-400 rounded-[6px] overflow-hidden text-white" onClick={loginByGoogle}>
                  <div className="flex items-center justify-center gap-2 ">
                    <span className="ml-4 "> Entrar con Google  </span>
                    <GoogleLogo />
                  </div>
                </button>
              </div>
              <hr className="mb-4 border-t mt-5" />
              <div className="text-sm text-center mx-auto text-black-600 hover:text-red-500">
              <span>Si no tienes cuenta, Registrate </span>
                <Link to="/sing-up" className="font-bold text-[#6355d8] text-sm">
                   aquí.
                </Link>               
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
