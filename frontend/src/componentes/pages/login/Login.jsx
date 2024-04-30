import React, { useEffect, useState } from "react";
import "./css/Login.css";
import Logo_Tei from "./img/ef_logo_tei.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
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
    <div className="main-login">
      <div className="container-form register">
        <div className="information">
          <div className="info-childs">
            <img
              className="logo"
              src={Logo_Tei}
              width=""
              height=""
              alt="logo_tei"
            ></img>
          </div>
        </div>

        <div className="form-information">
          <div class="form-information-childs">
            <h2 className="login-title">Iniciar Sesión</h2>
            <form class="form form-register" onSubmit={onSubmit}>
              <div className="caja">
                <input
                  type="number"
                  placeholder="Número documento"
                  name="documento"
                  value={documento}
                  required
                  onChange={onChange}
                />
              </div>

              <div className="caja2">
                <i class="bx bx-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  required
                  value={password}
                  onChange={onChange}
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
    </div>
  );
}

export default Login;
