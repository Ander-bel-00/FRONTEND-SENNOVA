import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../../common/Caja_formularios";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Crear_Eventos_Admin.css";
import { GiReturnArrow } from "react-icons/gi";

function Crear_Eventos_Admin() {
  return (
    <div className="main-container__contenedor-hijo">
      <Link>
        <div className="add-creat-btn-return-admin">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
      </Link>
      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes-admin">
              <h3 className="mainsBoxes__tile-admin">Crear Eventos CTI</h3>

              <form className="form-add-event-container-admin">
                <label className="form-add-event-container__label-admin">
                  Tipo <p className="rojo-required">*</p>
                </label>
                <select className="form-add-event-container__input-admin">
                  <option selected>Seleccione el tipo de evento</option>
                  <option>Asistente</option>
                  <option>Ponente</option>
                </select>
                <label className="form-add-event-container__label-admin">
                  Nombre del evento <p className="rojo-required-">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Fecha de Fin del Evento <p className="rojo-required">*</p>
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
                  Fecha de Inicio del Evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                />

                <label className="form-add-event-container__label-admin">
                  Cantidad de participantes <p className="rojo-required">*</p>
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
