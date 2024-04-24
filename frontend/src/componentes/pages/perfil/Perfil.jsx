import Caja_formularios from "../../common/Caja_formularios";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./css/Perfil.css";

function Perfil() {
  return (
    <div className="main-container__contenedor-hijo">
      

      <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-perfil">
                <h2 className="text-center create-perfil-title">
                  Perfil
                </h2>

                <form className="form-add-perfil-container">

                <label
                    htmlFor="tipo-documento"
                    className="form-add-perfil-container__col1__label"
                  >
                    Tipo de Documento <p className="rojo-required">*</p>
                  </label>
                  <select className="form-add-perfil-container__select">
                  <option selected>Seleccione tipo de Documento</option>
                    <option>Cédula de Ciudadania C.C.</option>
                    <option>Tarjeta de Identidad T.I.</option> 
                    <option>Cédula de Extranjeria C.E.</option>
                  </select>
                  


                  <label
                    htmlFor="numero-documento"
                    className="form-add-perfil-container__col1__label"
                  >
                    Número de Documento  
                  </label>
                  <input
                    type="text"
                    id="numero-documento"
                    className="form-add-perfil-container__col1__input"
                  />


                  <label
                    htmlFor="nombres"
                    className="form-add-perfil-container__col1__label"
                  >
                    Nombres  
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    className="form-add-perfil-container__col1__input"
                  />

                    <label
                    htmlFor="apellidos"
                    className="form-add-perfil-container__col1__label"
                  >
                    Apellidos  
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    className="form-add-perfil-container__col1__input"
                  />

                <   label
                    htmlFor="numero-telefonico"
                    className="form-add-perfil-container__col1__label"
                  >
                    Número telefónico  <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="numero-telefonico"
                    className="form-add-perfil-container__col1__input"
                  />

                    <label
                    htmlFor="correo-sena"
                    className="form-add-perfil-container__col1__label"
                  >
                    Correo SENA  
                  </label>
                  <input
                    type="text"
                    id="correo-sena"
                    className="form-add-perfil-container__col1__input"
                  />

                <label
                    htmlFor="correo-personal"
                    className="form-add-perfil-container__col1__label"
                  >
                    Correo Personal  <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="correo-personal"
                    className="form-add-perfil-container__col1__input"
                  />


                <label
                    htmlFor="estado"
                    className="form-add-perfil-container__col1__label"
                  >
                    Estado 
                  </label>
                  <input
                    type="text"
                    id="estado"
                    className="form-add-perfil-container__col1__input"
                  />

                  <div className="btns-crear-perfil">

                    <button className="btn-crear-perfil" type="button">Actualizar</button>

                  </div>
                </form>
              </div>
            </Fragment>
          }
        />
    </div>
  );
}

export default Perfil;
