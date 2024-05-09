import React, { Fragment } from "react";
import "./css/Crear_Proyectos_Admin.css";
import Caja_formularios from "../../../common/Caja_formularios";
import { Link } from "react-router-dom";

function Crear_Proyectos_Admin() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Caja_formularios
          info={
            <Fragment>
              <div className="main-form-admin-proyecto">
                <h2 className="text-center create-project-admin-title">
                  Crear Proyecto
                </h2>

                <form className="form-add-pryect-admin-container">
                  <label
                    htmlFor="codigo-sgps"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Código SGPS (Sistema de gestión de proyectos SENNOVA){" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="codigo-sgps"
                    className="form-add-pryect-admin-container__col1__input"
                  />
                  <label
                    htmlFor="tipo proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Tipo proyecto <p className="rojo-required">*</p>
                  </label>

                  <select className="form-add-pryect-admin-container__select">
                    <option selected>Seleccione tipo de proyecto</option>
                    <option>Modernizacion</option>
                    <option>Innovación</option>
                    <option>Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-pryect-admin-container__col1__input"
                  />

                  <label
                    htmlFor="descripción-proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-admin-container__col1__textarea"
                  ></textarea>

                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    className="form-add-pryect-admin-container__col1__input"
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-proyecto"
                    className="form-add-pryect-admin-container__col1__input"
                  />

                  <div className="btns-crear-projecto-admin">
                    <button className="btn-crear-proyecto-admin" type="button">
                      Crear
                    </button>
                    <Link to={"/lider-semillero/Listar_Proyectos"}>
                      <button
                        type="button"
                        className="btn-cancelar-proyecto-admin"
                      >
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
    </Fragment>
  );
}

export default Crear_Proyectos_Admin;
