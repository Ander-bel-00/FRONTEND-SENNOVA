import React, { Fragment } from "react";
import "./css/Actualizar_Proyecto_Admin.css";
import { IoIosReturnLeft } from "react-icons/io";
import BotonReturn from "../../../common/BotonReturn";
import { Link } from "react-router-dom";
import Caja_formularios from "../../../common/Caja_formularios";

function Actualizar_Proyectos_Admin() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn
              link={"/"}
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>
        <Caja_formularios
          info={
            <Fragment>
              <div className="update-proyect-admin-main">
                <h2 className="text-center actualizar-project-admin-title">
                  ACTUALIZAR PROYECTO DE INVESTIGACIÓN
                </h2>
                <form className="form-update-proyects-admin-content">
                  <label
                    htmlFor="nombre-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Nombre del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-del-proyecto"
                    className="form-update-proyects-admin-content__col1__input"
                  />
                   <label
                    htmlFor="descripción-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Descripción del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-del-proyecto"
                    cols="28"
                    rows="9"
                    className="form-update-proyects-admin-content__col1__textarea"
                  ></textarea>
                  <label
                    htmlFor="fecha-inicio-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-del-proyecto"
                    className="form-update-proyects-admin-content__col1__input"
                  />
                  <label
                    htmlFor="fecha-fin-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-del-proyecto"
                    className="form-update-proyects-admin-content__col1__input"
                  />

                  <div className="update-proyects-admin-btns">
                  <input
                      type="submit"
                      value="Actualizar"
                      className="btn-actualizar-admin-proyecto"
                    />
                    <input
                      type="submit"
                      value="Cancelar"
                      className="btn-cancelar-actualizar-admin-proyect"
                    />
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

export default Actualizar_Proyectos_Admin;
