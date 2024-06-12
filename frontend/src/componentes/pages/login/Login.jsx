import React, { useEffect, useState } from "react";
import "./css/Login.css";
import Logo_Tei from "./img/ef_logo_tei.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import LogoSennova from '../Landing/img/sennova-logo.png'
import CDITI from '../Landing/img/CDITI2.png';
import CDITI2 from '../Landing/img/CDITI2.png';
import LT_Sena from '../Landing/img/sena-logo.svg';
import logo_app from '../Landing/img/logo-app.svg';
import sennova from '../Landing/img/sennova.svg';
import teinnova from '../Landing/img/teinnova.svg';
import LogoTeinnovaHome from "../../layouts/Sidenav/img/Teinnova-logo-blanco.png";


function Login() {
  const navigate = useNavigate(); // Utilizar navigate de React-router-dom para realizar navegación:
  const { handleLogin } = useAuth(); // Llamar la función handleLogin del Hook useAuth.
  // Función para guardar y actualizar los datos recibidos en el formulario de Login.
  const [formData, setFormData] = useState({
    documento: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga

  const { documento, password } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Comienza la carga al enviar el formulario
    try {
      await handleLogin(navigate, formData);
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data.non_field_errors)) {
        setErrors(error.response.data.non_field_errors);
      } else {
        setErrors([error.response.data.non_field_errors]);
      }
    } finally {
      setIsLoading(false); // Finaliza la carga después de la operación
    }
  };

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (

    <main className="container-main-login" >

<section className='header__logos' style={{background: "#fff", borderBottom: "5px solid #70B22D"}}>
          <img className='header__sennova' src={sennova} alt="" />

          <img className='header__img-sena' src={LT_Sena} alt="" />
          <div className='header-imgs'>
            <img className='header__img-sennova' src={LogoSennova} alt="" />
            <img className='header__img-cditi' src={CDITI} alt="" />
            <img className='header__img-cditi' src={teinnova} alt="" />
            </div>
        </section>

        
       <div className="main-login">
        
      <div className="container-form register">
        <div className="information">
          <div className="info-childs">
            <img
              className="logo"
              src={logo_app}
              width=""
              height=""
              alt="logo_tei"
            >
            </img>
            <img
              className='logoTeinnova' src={LogoTeinnovaHome} alt="Logo Teinnova"
            >
            </img>
          </div>
        </div>
        

        <div className="form-information">
          <div class="form-information-childs">
            <h2 className="login-title">Iniciar Sesión</h2>
            <form class="form form-register" onSubmit={onSubmit}>
              <div className="caja">
                <label for="documento">Nº Documento</label>
                <input
                  type="number"
                  placeholder="Número documento"
                  name="documento"
                  value={documento}
                  required
                  onChange={onChange}
                  id="documento"
                />
              </div>

              <div className="caja2">
                <i class="bx bx-lock-alt"></i>
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  value={password}
                  onChange={onChange}
                  id="password"
                />

                {errors.map((error, i) => (
                  <div key={i} className="text-red-600 ml-6">
                    {error}
                  </div>
                ))}
              </div>

              {isLoading ? (
                <div className="loading-container">
                  {" "}
                  {/* Nuevo contenedor para alinear los elementos */}
                  <div className="loading"></div> {/* Rueda giratoria */}
                </div>
              ) : (
                <button className="btn-login" type="submit">
                  Ingresar
                </button>
              )}

              
              <br />
              <div class="recuperacion_contrasena">
                <a href="#">
                  <u>Restablecer Contraseña.</u>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Link className="ir-inicio" to="/">Ir al Inicio</Link>
    </div>
   

    </main>
   
  );
}

export default Login;
