import React, { Fragment } from "react";
import "./css/Crear_Actividad.css";
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";

function Crear_Actividad() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn
              link={"/lider-semillero/Listar_Actividad"}
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>

        <Caja_formularios
          info={
            <Fragment>
              <div className="create-activity-box">
                <h2 className="text-center create-activity-title">
                  Crear Actividad
                </h2>
                <form className="form-create-activity-content">
                  <label
                    htmlFor="nombre-actividad"
                    className="form-create-activity-content__col1__label"
                  >
                    Nombre de la Actividad <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-actividad"
                    className="form-create-activity-content__col1__input"
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-create-activity-content__col1__label"
                  >
                    Fecha Inicio <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-entrega-actividad"
                    className="form-create-activity-content__col1__input"
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-create-activity-content__col1__label"
                  >
                    Fecha final <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-entrega-actividad"
                    className="form-create-activity-content__col1__input"
                  />

                  <label
                    htmlFor="tarea-activida"
                    className="form-create-activity-content__col1__label"
                  >
                    Tarea <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="tarea-actividad"
                    className="form-create-activity-content__col1__input"
                    required
                  />
                  <label
                    htmlFor="resultado-actividad"
                    className="form-create-activity-content__col1__label"
                  >
                    Resultado <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="resultado-actividad"
                    className="form-create-activity-content__col1__input"
                  />
                  <label
                    htmlFor="responsable-actividad"
                    className="form-create-activity-content__col1__label"
                  >
                    Responsable de la Actividad{" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="responsable-actividad"
                    className="form-create-activity-content__col1__input"
                  />

                  <label
                    htmlFor="producto-actividad"
                    className="form-create-activity-content__col1__label"
                  >
                    Producto
                  </label>
                  <input
                    type="file"
                    id="producto-actividad"
                    className="form-create-activity-content__col1__input"
                  />

                  <div className="btns-crear-actividad">
                    <Link to={"/lider-semillero/Listar_Actividad"}>
                      <button
                        className="btn-cancelar-actividad-uptd"
                        type="button"
                      >
                        Cancelar
                      </button>
                    </Link>
                    <button className="btn-create-actividad" type="button">Crear</button>
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

export default Crear_Actividad;
