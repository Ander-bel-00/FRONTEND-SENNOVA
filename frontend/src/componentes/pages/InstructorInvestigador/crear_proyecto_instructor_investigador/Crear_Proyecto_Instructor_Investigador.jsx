import React, { Fragment } from "react";
import "./css/Crear_Proyecto_Instructor_Investigador.css";
import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../../common/Caja_formularios";
import BotonReturn from "../../../common/BotonReturn";
import { Link } from "react-router-dom";

function Crear_Proyecto_Instructor_Investigador() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Link>
          <div className="add-proyect-btn-return">
            <BotonReturn
              link={
                "/instructor-investigador/Listar_Proyectos_Instructor_Investigador"
              }
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>

        <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-instructor-proyecto">
                <h2 className="text-center create-project-instructor-title">
                  Añadir Información
                </h2>

                <form className="form-add-pryect-instructor-container">
                  <label
                    htmlFor="tipo proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Tipo proyecto <p className="rojo-required">*</p>
                  </label>

                  <select className="form-add-pryect-instructor-container__select">
                    <option selected>Seleccione tipo de proyecto</option>
                    <option>Modernizacion</option>
                    <option>Innovación</option>
                    <option>Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                  />
                  <label htmlFor="descripción-proyecto">
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-instructor-container__col1__textarea"
                  ></textarea>

                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                  />

                  <div className="btns-crear-instructor-projecto">
                    <button type="button" className="btn-crear-instructor-projecto">Crear</button>
                    <button type="button" className="btn-cancelar-instructor-proyecto">Cancelar</button>
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

export default Crear_Proyecto_Instructor_Investigador;
