import React, { useEffect, useState } from "react";
import "./css/Login.css";
import Logo_Tei from "./img/ef_logo_tei.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function Login() {

  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [formData, setFormData] = useState({
    documento: '',
    password: ''
  });

  const [errors, setErrors] = useState([]);

  const { documento, password } = formData;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await handleLogin(navigate, formData);
    } catch (error) {
      console.log(error);
      // if (Array.isArray(error.response.data)) {
      //   setErrors(error.response.data);
      // } else {
      //   setErrors([error.response.data.message]);
      // }
    }
  };


  
  return (

    <div className="main-login">
      {/* Reutilización de código SHD. */}

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
                <label>
                  
                  <input
                    type="number"
                    placeholder="Número documento"
                    name="documento"
                    value={documento}
                    required
                    onChange={onChange}
                  />
                </label>
              </div>

              <div className="caja2">
                <label>
                  <i class="bx bx-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    required
                    value={password}
                    onChange={onChange}
                  />
                </label>
              </div>

              <input value="Ingresar" className="btn-login" type="submit"/>
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
