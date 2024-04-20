import React, { Fragment } from "react";
import "./css/Actualizar_Proyectos.css";
import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../common/Caja_formularios";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";

function Actualizar_Proyectos() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn
              link={"/lider-semillero/Listar_Proyectos"}
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>
        <Caja_formularios
          info={
            <Fragment>
              <h2 className="text-center actualizar-project-title">
                ACTUALIZAR PROYECTO DE INVESTIGACIÓN
              </h2>
              <form className="form-update-proyects-content">
                <div className="form-update-proyects-content__col1">
                  <label
                    htmlFor="nombre-del-proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Nombre del Proyecto*
                  </label>
                  <input
                    type="text"
                    id="nombre-del-proyecto"
                    className="form-update-proyects-content__col1__input"
                  />
                  <label
                    htmlFor="descripción-del-proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Descripción del Proyecto*
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-del-proyecto"
                    cols="28"
                    rows="9"
                    className="form-update-proyects-content__col1__textarea"
                  ></textarea>
                </div>

                <div className="form-update-proyects-content__column2">
                  <label
                    htmlFor="fecha-inicio-del-proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Fecha inicio del Proyecto*
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-del-proyecto"
                    className="form-update-proyects-content__col1__input"
                  />
                  <label
                    htmlFor="fecha-fin-del-proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Fecha Fin del Proyecto*
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-del-proyecto"
                    className="form-update-proyects-content__col1__input"
                  />

                  <input
                    type="submit"
                    value="Actualizar"
                    className="btn-actualizar-proyecto"
                  />
                  <input
                    type="submit"
                    value="Cancelar"
                    className="btn-cancelar-actualizar-proyect"
                  />
                </div>
              </form>
            </Fragment>
          }
        />
      </div>
    </Fragment>
  );
}

export default Actualizar_Proyectos;