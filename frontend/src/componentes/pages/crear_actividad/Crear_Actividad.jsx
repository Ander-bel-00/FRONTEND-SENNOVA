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
        <h1 className="text-center crear-actividades-titulo">ACTIVIDADES</h1>
        <Caja_formularios
          info={
            <Fragment>
              <div className="create-activity-box">
                <h2 className="text-center create-activity-title">
                  Crear Actividad
                </h2>
                <form className="form-create-activity-content">
                  <div className="form-create-activity-content__col1">
                    <label
                      htmlFor="nombre-actividad"
                      className="form-create-activity-content__col1__label"
                    >
                      Nombre de la Actividad*
                    </label>
                    <input
                      type="text"
                      id="nombre-actividad"
                      className="form-create-activity-content__col1__input"
                    />
                    <label
                      htmlFor="fecha-entrega-actividad"
                      className="create-fecha-activity-content__col1__label"
                    >
                      Fecha*
                    </label>
                    <input
                      type="date"
                      id="fecha-entrega-actividad"
                      className="form-create-activity-content__col1__input"
                    />
                   <label
                      htmlFor="producto-actividad"
                      className="create-fecha-activity-content__col1__label"
                    >
                      Producto*
                    </label>
                    <input
                      type="text"
                      id="producto-actividad"
                      className="form-create-activity-content__col1__input"
                    />
                    <input
                    type="submit"
                    value="Cancelar"
                    className="btn-cancelar-actividad-uptd"
                    />
                  </div>

                  <div className="form-create-activity-content__column2">
                    <label
                      htmlFor="tarea-activida"
                      className="create-fecha-activity-content__col1__label"
                    >
                      Tarea*
                    </label>
                    <input
                      type="text"
                      id="tarea-actividad"
                      className="form-create-activity-content__col1__input"
                    />
                    <label
                      htmlFor="resultado-actividad"
                      className="create-fecha-activity-content__col1__label"
                    >
                      Resultado*
                    </label>
                    <input
                      type="text"
                      id="resultado-actividad"
                      className="form-create-activity-content__col1__input"
                    />
                    <label
                      htmlFor="responsable-actividad"
                      className="create-fecha-activity-content__col1__label"
                    >
                      Responsable de la Actividad*
                    </label>
                    <input
                      type="text"
                      id="responsable-actividad"
                      className="form-create-activity-content__col1__input"
                    />
                    <input
                    type="submit"
                    value="Actualizar"
                    className="btn-actualizar-actividad"
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

export default Crear_Actividad;