import React, { Fragment } from "react";
import "./css/Actualizar_Proyectos.css";
import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../common/Caja_formularios";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";

function Actualizar_Proyectos() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
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
              <div className="main-form-update-proyecto">
                <h2 className="text-center actualizar-project-title">
                  ACTUALIZAR PROYECTO DE INVESTIGACIÓN
                </h2>
                <form className="form-update-proyects-content">
                  <label
                    htmlFor="tipo proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Tipo Proyecto <p className="rojo-required">*</p>
                  </label>

                  <select className="form-update-proyects-content_select">
                    <option select>Seleccione tipo de proyecto</option>
                    <option>Modernizacion</option>
                    <option>Innovació</option>
                    <option>Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre-del-proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
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
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-del-proyecto"
                    cols="28"
                    rows="9"
                    className="form-update-proyects-content__col1__textarea"
                  ></textarea>

                  <label
                    htmlFor="fecha-inicio-del-proyecto"
                    className="form-update-proyects-content__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
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
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-del-proyecto"
                    className="form-update-proyects-content__col1__input"
                  />

                  <div className="btns-actualizar-projecto">
                    <button className="btn-actualizar-projecto">Actualizar</button>
                    <input
                      type="submit"
                      value="Cancelar"
                      className="btn-cancelar-update-proyect"
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

export default Actualizar_Proyectos;
