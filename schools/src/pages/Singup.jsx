import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogleAsync, signup } from "../redux/authActions";
import GoogleLogo from "../assets/GoogleLogo";

const Singup = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log('authState :', authState);
  const history = useNavigate();
  const [message, setMessage] = useState(authState.error)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    carrera: '',
    telefono: '',
    direccion: ''
  });

  useEffect(() => {
    if (authState.acount) {
      history("/login");
    }
    if (authState.success) {
      history("/profile-students");
    }
  }, [authState, history]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signup(formData.email, formData.contraseña));
    localStorage.setItem('userData', JSON.stringify(formData));
    } catch (error) {
      setMessage(error)
    }
    
  };

  const loginByGoogle = () => {
    dispatch(loginWithGoogleAsync());
  };


  return (
    <div className="flex container mx-auto w-full p-1">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-full sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl">
                      Registrarse
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Regístrate y podras administrar tus materias y creditos estudiantiles.</p>
                  </div>
                </div>
              {message && <p className="text-2xl text-orange font-Helvetica font-bold mx-auto text-center">{message}</p>}
              </div>
              <form className="bg-white mb-4 max-w-[800px] mx-auto mt-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <fieldset className="mb-4">
                      <label className="block mb-2 text-sm font-bold" htmlFor="nombre">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Enter nombre"
                        name="nombre"
                        type="text"
                        required
                        onChange={handleChange}
                        value={formData.nombre}
                      />
                    </fieldset>
                    <fieldset className="mb-4">
                      <label className="block mb-2 text-sm font-bold" htmlFor="apellido">
                        Apellido
                      </label>
                      <input
                        id="apellido"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Enter apellido"
                        name="apellido"
                        type="text"
                        required
                        onChange={handleChange}
                        value={formData.apellido}
                      />
                    </fieldset>
                    <fieldset className="mb-4">
                      <label className="block mb-2 text-sm font-bold" htmlFor="carrera">
                        Carrera
                      </label>
                      <input
                        id="carrera"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Enter carrera"
                        name="carrera"
                        type="text"
                        required
                        onChange={handleChange}
                        value={formData.carrera}
                      />
                    </fieldset>
                  </div>
                  <div className="col-span-1">
                    <fieldset className="mb-4">
                      <label className="block mb-2 text-sm font-bold" htmlFor="telefono">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Enter telefono"
                        name="telefono"
                        type="text"
                        required
                        onChange={handleChange}
                        value={formData.telefono}
                      />
                    </fieldset>
                    <fieldset className="mb-4">
                      <label className="block mb-2 text-sm font-bold" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Enter email"
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </fieldset>
                    <fieldset className="mb-4">
                      <label className="block mb-2 text-sm font-bold" htmlFor="contraseña">
                        Contraseña
                      </label>
                      <input
                        id="contraseña"
                        className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                        placeholder="Enter contraseña"
                        name="contraseña"
                        type="password"
                        required
                        onChange={handleChange}
                        value={formData.contraseña}
                      />
                    </fieldset>
                  </div>
                  <fieldset className="mb-4 col-span-2">
                    <label className="block mb-2 text-sm font-bold" htmlFor="direccion">
                      Dirección
                    </label>
                    <input
                      id="direccion"
                      className="w-full p-3 text-md border rounded shadow focus:outline-none focus:shadow-outline"
                      placeholder="Enter direccion"
                      name="direccion"
                      type="text"
                      required
                      onChange={handleChange}
                      value={formData.direccion}
                    />
                  </fieldset>
                </div>
                <button
                  className="mt-4 box-border w-full h-[44px] bg-[#6355d8] rounded-[6px] overflow-hidden text-white font-sans"
                  type="submit"
                >
                  Crear cuenta
                </button>
              </form>
              <div>
                <button className=" box-border w-full h-[44px] bg-vl-400 rounded-[6px] overflow-hidden text-white" onClick={loginByGoogle}>
                  <div className="flex items-center justify-center gap-2 ">
                    <span className="ml-4 "> Entrar con Google </span>
                    <GoogleLogo />
                  </div>
                </button>
              </div>
            </div>
            <div className="order-first hidden w-full h-full object-fill lg:block p-2">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
