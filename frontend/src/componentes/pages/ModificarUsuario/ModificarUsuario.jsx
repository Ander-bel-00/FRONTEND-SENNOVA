import React, { Fragment } from "react";
import "./css/ModificarUsuario.css";
import { FaRegEdit } from "react-icons/fa";
import Caja_formularios from "../../common/Caja_formularios";

import { BiSolidReport } from "react-icons/bi";
import Button_Blanco from "../../common/BotonReporte";

function ModificarUsuario() {
  return (
    <div className="main-container__contenedor-hijo">
      <Caja_formularios
        info={
          <Fragment>
            <h1 className="update-users-box__title">Rol Usuario</h1>
            <form className="update-users-box__form-container">
              <div className="update-users-box__form-container__options-col1">
                <label
                  htmlFor="tipo_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Tipo de documento
                </label>
                <select className="update-users-box__form-container__options-col1__input">
                  <option value="cedula_de_ciudadania">
                    Cédula de Ciudadania
                  </option>
                  <option value="tarjeta_identidad">
                    Tarjeta de Identidad
                  </option>
                  <option value="cedula_extranjeria">
                    Cédula de Extranjería
                  </option>
                </select>
                {/* <FaRegEdit className="inline-block update-users-box__form-container__options-col1__icon" /> */}
                <label
                  htmlFor="numero_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Número de documento
                </label>
                <input
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                />
                <label
                  htmlFor="nombres"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Nombres
                </label>
                <input
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                />
                <label
                  htmlFor="apellidos"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                />
                <label
                  htmlFor="numero_telefonico"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Número telefónico
                </label>
                <input
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                />
              </div>

              <div className="update-users-box__form-container__options-column2">
                <label
                  htmlFor="Correo_Sena"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo SENA
                </label>
                <input
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                />
                <label
                  htmlFor="Correo_Personal"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo Personal
                </label>
                <input
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                />
                <label
                  htmlFor="Estado"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Estado
                </label>
                <select className="update-users-box__form-container__options-col1__input">
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
                <button className="update-users-box__form-container__btn-update">
                  Modificar
                </button>
              </div>
            </form>
          </Fragment>
        }
      />
    </div>
  );
}

export default ModificarUsuario;
