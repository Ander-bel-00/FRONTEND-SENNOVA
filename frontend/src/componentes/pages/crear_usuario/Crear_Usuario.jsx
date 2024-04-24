import React, { Fragment, useState } from "react";
import "./css/Crear_usuario.css";
import { Link } from "react-router-dom";
import Caja_formularios from "../../common/Caja_formularios";

function Crear_Usuario() {
  // Función para declarar un estado que almacenará el rol seleccionado
  const [rolUsuario, setRolUsuario] = useState("instructor investigador");
  // Función para mostrar campos adicionales en el formulario solo si se selecciona aprendiz investigador
  const [mostrarCamposAprendiz, setMostrarCamposAprendiz] = useState(false);

  // Fucnión para manejar eventos de obtneción del rol según elseleccionado en el select.
  const handleRolChange = (e) => {
    // Obtener el rol del value del option seleccioando dentro del select.
    const selectedRol = e.target.value;
    setRolUsuario(selectedRol);
    // Mostrar campos adicionales solo si se selecciona el rol de "aprendiz-investigador"
    setMostrarCamposAprendiz(selectedRol === "aprendiz investigador");
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Caja_formularios
        info={
          <Fragment>
            <div className="user-add-main">
              <h2 className="text-center user-add-title">Crear Investigador</h2>
              <div className="rol-selection">
                <select
                  id="rol-usuario"
                  value={rolUsuario}
                  onChange={handleRolChange}
                  className="form-add-user-container__col1__input"
                >
                  <option value="instructor investigador">
                    Instructor Investigador
                  </option>
                  <option value="aprendiz investigador">
                    Aprendiz Investigador
                  </option>
                </select>
              </div>
              <form className="form-add-user-container">
                <label
                  htmlFor="nombre-proyecto"
                  className="form-add-user-container__col1__label"
                >
                  Tipo de Documento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="form-add-user-container__col1__input"
                />
                <label
                  htmlFor="nombre-proyecto"
                  className="form-add-user-container__col1__label"
                >
                  Nombres <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="form-add-user-container__col1__input"
                />
                <label
                  htmlFor="nombre-proyecto"
                  className="form-add-user-container__col1__label"
                >
                  Estado de Usuario <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="form-add-user-container__col1__input"
                />

                <label
                  htmlFor="nombre-proyecto"
                  className="form-add-user-container__col1__label"
                >
                  Número de Documento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="form-add-user-container__col1__input"
                />

                <label
                  htmlFor="nombre-proyecto"
                  className="form-add-user-container__col1__label"
                >
                  Apellidos <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="form-add-user-container__col1__input"
                />
                <label
                  htmlFor="nombre-proyecto"
                  className="form-add-user-container__col1__label"
                >
                  Rol de Usuario <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="form-add-user-container__col1__input"
                  value={"instructor investigador"}
                  readOnly
                />
                {/* Campos adicionales solo si se selecciona el rol de "aprendiz investigador" */}

                {mostrarCamposAprendiz && (
                  <Fragment>
                    <label
                      htmlFor="campo-adicional-1"
                      className="form-add-user-container__col1__label"
                    >
                      Programa de Formación <p className="rojo-required">*</p>
                    </label>
                    <input
                      type="text"
                      id="campo-adicional-1"
                      className="form-add-user-container__col1__input"
                    />

                    <label
                      htmlFor="campo-adicional-1"
                      className="form-add-user-container__col1__label"
                    >
                      Número de Ficha <p className="rojo-required">*</p>
                    </label>
                    <input
                      type="text"
                      id="campo-adicional-1"
                      className="form-add-user-container__col1__input"
                    />

                    <label
                      htmlFor="campo-adicional-1"
                      className="form-add-user-container__col1__label"
                    >
                      Incio Lectiva De La Ficha{" "}
                      <p className="rojo-required">*</p>
                    </label>
                    <input
                      type="date"
                      id="campo-adicional-1"
                      className="form-add-user-container__col1__input"
                    />

                    <label
                      htmlFor="campo-adicional-1"
                      className="form-add-user-container__col1__label"
                    >
                      Fin Lectiva De La Ficha <p className="rojo-required">*</p>
                    </label>
                    <input
                      type="date"
                      id="campo-adicional-1"
                      className="form-add-user-container__col1__input"
                    />
                  </Fragment>
                )}
                <div className="user-add-btns">
                  <button type="button" className="btn-crear-usuario">
                    Crear
                  </button>

                  <Link to={"/lider-semillero/usuarios-getAll"}>
                    <button type="button" className="btn-cancelar-usuario">
                      Cancelar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Usuario;
