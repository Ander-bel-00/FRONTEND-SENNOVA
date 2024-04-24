import React, { Fragment } from "react";
import "./css/Crear_Actividad_Instructor_Investigador.css";
import { IoIosReturnLeft } from "react-icons/io";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import { Link } from "react-router-dom";

function Crear_Actividad_Instructor_Investigador() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn
              icon={<IoIosReturnLeft />}
              link={
                "/instructor-investigador/Listar_Actividad_Instructor_Investigador"
              }
            />
          </div>
        </Link>

        <Caja_formularios
          info={
            <Fragment>
              <div className="create-activity-instructor-box">
                <h2 className="text-center create-activity-instructor-title">
                  Añadir Información
                </h2>
                <form className="form-create-activity-instructor-content">
                  <label
                    htmlFor="nombre-actividad"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Nombre de la Actividad <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Fecha <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-entrega-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />
                  <label
                    htmlFor="producto-actividad"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Producto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="producto-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />

                  <label
                    htmlFor="tarea-activida"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Tarea <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="tarea-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />
                  <label
                    htmlFor="resultado-actividad"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Resultado <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="resultado-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />
                  <label
                    htmlFor="responsable-actividad"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Responsable de la Actividad{" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="esponsable-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />
                  <label
                    htmlFor="producto-actividad"
                    className="form-create-activity-instructor-content__col1__label"
                  >
                    Producto
                  </label>
                  <input 
                    type="file" 
                    id="producto-actividad"
                    className="form-create-activity-instructor-content__col1__input"
                  />
                  <div className="btns-crear-instructor-actividad">
                    <Link to={"/instructor-investigador/"}>
                      <button
                        className="btn-cancelar-instructor-actividad-uptd"
                        type="button"
                      >
                        Cancelar
                      </button>
                    </Link>
                    <button
                      className="btn-crear-instructor-actividad"
                      type="button"
                    >
                      Crear
                    </button>
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

export default Crear_Actividad_Instructor_Investigador;
