import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div  className='mt-5 flex flex-row mx-auto justify-center items-center'>
        <div className="text-center">
            <img 
            className="w-full h-full object-cover"
            src={process.env.PUBLIC_URL + "/img/404-not-found.svg"}
            alt="error 404" />
            <h2>¿Entraste a una ruta invalida?</h2>
        <p> Vuelve al <Link to='/' className="text-vl-600">Inicio</Link></p>
        </div>        
      </div>
    </div>
  );
};

export default NotFoundPage;
