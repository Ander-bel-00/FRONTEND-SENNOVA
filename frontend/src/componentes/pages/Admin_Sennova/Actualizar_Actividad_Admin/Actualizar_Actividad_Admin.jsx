import React, { Fragment } from 'react';
import "./css/Actualizar_Actividad_Admin.css"
import { IoIosReturnLeft } from "react-icons/io";
import BotonReturn from "../../../common/BotonReturn";
import { Link } from 'react-router-dom';
import Caja_formularios from '../../../common/Caja_formularios';


function Actualizar_Actividad_Admin() {
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
            <div className="update-activity-admin-main">
            <h1 className="text-center actualizar-actividades-admin-title">
                  ACTUALIZAR ACTIVIDAD
                </h1>
                <form className="form-update-activity-admin-content">
                  <label
                    htmlFor="nombre-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Nombre de la Actividad <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-actividad"
                    className="form-update-activity-admin-content__col1__input"
                  />
                   <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Fecha <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__input"
                  />
                     <label
                    htmlFor="producto-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Producto <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="producto-actividad"
                    className="form-update-activity-admin-content__col1__input"
                  />
                   <label
                    htmlFor="tarea-activida"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Tarea <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="tarea-actividad"
                    className="form-update-activity-admin-content__col1__input"
                  />
                  <label
                    htmlFor="resultado-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Resultado <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="resultado-actividad"
                    className="form-update-activity-admin-content__col1__input"
                  />
                   <label
                    htmlFor="responsable-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Responsable de la Actividad{" "}
                    <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="responsable-actividad"
                    className="form-update-activity-admin-content__col1__input"
                  />

                    <div className="update-activity-admin-btns">
                      <button className="btn-actualizar-actividad-admin">
                        Actualizar
                      </button>
                      <Link to={"/admin/listar-actividad"}>
                      <button className="btn-cancelar-actividad-uptd-admin" type="button">
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
  )
}

export default Actualizar_Actividad_Admin;

