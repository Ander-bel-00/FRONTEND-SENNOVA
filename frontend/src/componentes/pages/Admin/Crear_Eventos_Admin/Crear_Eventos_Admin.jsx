import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../../common/Caja_formularios";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Crear_Eventos_Admin.css";


function Crear_Eventos_Admin() {
  return (
    <div className="main-container__contenedor-hijo">
  
       
          <BotonReturn  />
       
   
      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes-admin">
              <h3 className="mainsBoxes__tile-admin">Crear Eventos CTI</h3>

              <form className="form-add-event-container-admin">
                <label className="form-add-event-container__label-admin">
                  Tipo de Evento<p className="rojo-required">*</p>
                </label>
                <select className="form-add-event-container__input-admin">
                  <option selected>Seleccione el tipo de evento</option>
                  <option>Asistente</option>
                  <option>Ponente</option>
                </select>
                <label className="form-add-event-container__label-admin">
                  Nombre del evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Fecha Inicio del Evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="date"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Fecha Fin del Evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="date"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Cantidad de Participantes <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Ponente <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Lugar del Evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Semillero <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Evidencia del Producto <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <div className="btns-crear-evento-admin">
                  <button
                    type="button"
                    className="btnEvents__crear--green-admin"
                  >
                    Crear
                  </button>

                  <Link to={"/admin/listar-eventos"}>
                    <button type="button" className="btnEvents__cancelar-admin">
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
  );
}

export default Crear_Eventos_Admin;
