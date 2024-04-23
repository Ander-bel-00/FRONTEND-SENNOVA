import React, { Fragment, useState } from "react";
import "./css/Crear_usuario.css";
import { Link } from "react-router-dom";
import Caja_formularios from "../../common/Caja_formularios";

function Crear_Usuario() {
  const [rolUsuario, setRolUsuario] = useState("instructor-investigador");

  const handleRolChange = (e) => {
    setRolUsuario(e.target.value);
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="rol-selection">
        <label htmlFor="rol-usuario">Selecciona el rol de usuario:</label>
        <select
          id="rol-usuario"
          value={rolUsuario}
          onChange={handleRolChange}
          className="form-add-user-container__col1__input"
        >
          <option value="instructor-investigador">
            Instructor Investigador
          </option>
          <option value="aprendiz-investigador">Aprendiz Investigador</option>
        </select>
      </div>

      {rolUsuario === "instructor-investigador" ? (
        <Caja_formularios
          info={
            <Fragment>
              <h2 className="text-center user-add-title">Crear Investigador</h2>
              <form className="form-add-user-container">
                <div className="form-add-user-container__col1">
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-user-container__col1__label"
                  >
                    Tipo de Documento*
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
                    Nombres*
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
                    Estado de Usuario*
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-user-container__col1__input"
                  />
                  <Link to={"/lider-semillero/usuarios-getAll"}>
                    <input
                      type="submit"
                      value="Cancelar"
                      className="btn-cancelar-usuario"
                    />
                  </Link>
                </div>

                <div className="form-add-user-container__column2">
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-user-container__col1__label"
                  >
                    Número de Documento*
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
                    Apellidos*
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
                    Rol de Usuario*
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-user-container__col1__input"
                    value={"instructor investigador"}
                    readOnly
                  />
                  <input
                    type="submit"
                    value="Crear"
                    className="btn-crear-usuario"
                  />
                </div>
              </form>
            </Fragment>
          }
        />
      ) : (
        <div className="aprendiz-form-box">
          <form className="form-add-aprendiz-container">
            <div className="form-add-aprendiz-container__col1">
              <h2 className="text-center Aprendiz-form-title">
                Aprendiz Investigador
              </h2>
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Tipo de Documento*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Número de Documento*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Nombres*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Apellidos*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Estado de usaurio*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Rol de usuario*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
                value={"aprendiz investigador"}
                readOnly
              />
            </div>

            <div className="form-add-aprendiz-container__column2">
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Progarama de Formación*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="nombre-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Número de Grupo*
              </label>
              <input
                type="text"
                id="nombre-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />
              <label
                htmlFor="fecha-inicio-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Inicio Lectivo de la Ficha*
              </label>
              <input
                type="date"
                id="fecha-inicio-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />

              <label
                htmlFor="fecha-fin-proyecto"
                className="form-add-aprendiz-container__col1__label"
              >
                Fin Lectivo de la Ficha*
              </label>
              <input
                type="date"
                id="fecha-fin-proyecto"
                className="form-add-aprendiz-container__col1__input"
              />

              <input
                type="submit"
                value="Crear"
                className="btn-crear-usuario-aprendiz-invg"
              />
              <Link to={"/lider-semillero/Listar_Proyectos"}>
                <input
                  type="submit"
                  value="Cancelar"
                  className="btn-cancelar-usaurio-aprendiz-invg"
                />
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Crear_Usuario;
