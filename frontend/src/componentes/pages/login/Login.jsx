import React from "react";
import "./css/Login.css";
import Logo_Tei from "./img/ef_logo_tei.png";

function Login() {
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
            <form class="form form-register" novalidate>
              <div className="caja">
                <label>
                  <i className="bx bx-key"></i>
                  <input
                    type="number"
                    placeholder="Número documento"
                    name="userName"
                    required
                  />
                </label>
              </div>

              <div className="caja2">
                <label>
                  <i class="bx bx-lock-alt"></i>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="userPassword"
                    required
                  />
                </label>
              </div>

              <input value="Ingresar" className="btn-login"/>
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
