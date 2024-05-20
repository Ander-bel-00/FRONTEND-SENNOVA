import React, { Fragment } from "react";
import "./css/ModificarUsuario.css";
import { FaRegEdit } from "react-icons/fa";
import Caja_formularios from "../../common/Caja_formularios";
import { BiSolidReport } from "react-icons/bi";
import Button_Blanco from "../../common/BotonReporte";
import BotonReturn from "../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";

function ModificarUsuario() {
  return (
    <div className="main-container__contenedor-hijo">
      <div className="add-proyect-btn-return">
        <BotonReturn icon={<GiReturnArrow />} />
      </div>
      <Caja_formularios
        info={
          <Fragment>
            <div className="update-user-main-container">
              <h1 className="update-users-box__title">Rol Usuario</h1>
              <form className="update-users-box__form-container">
                <label
                  htmlFor="tipo_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Tipo de documento <p className="rojo-required">*</p>
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
                <label
                  htmlFor="numero_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Número de documento <p className="rojo-required">*</p>
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
                  Nombres <p className="rojo-required">*</p>
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
                  Apellidos <p className="rojo-required">*</p>
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
                  Número telefónico <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                />

                <label
                  htmlFor="Correo_Sena"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo SENA <p className="rojo-required">*</p>
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
                  Correo Personal <p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                />
                <label
                  htmlFor="Estado"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Estado <p className="rojo-required">*</p>
                </label>
                <select className="update-users-box__form-container__options-col1__input">
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
                <br />
                <button className="update-users-box__form-container__btn-update">
                  Modificar
                </button>
              </form>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default ModificarUsuario;
