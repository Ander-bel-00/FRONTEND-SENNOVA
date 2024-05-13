import { GiReturnArrow } from "react-icons/gi";
import "./css/Crear_Eventos.css";
import Caja_formularios from "../../common/Caja_formularios";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";

function Crear_Eventos() {
  return (
    <div className="main-container__contenedor-hijo">
      
        <BotonReturn  />
     
      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes">
              <h3 className="mainsBoxes__tile">Crear Eventos CTI</h3>

              <form className="form-add-event-container">
                <label className="form-add-event-container__label">
                  Tipo de Evento<p className="rojo-required">*</p>
                </label>
                <select className="form-add-event-container__input">
                  <option className="secondColumns__op1" selected>
                    Seleccione el tipo de evento
                  </option>
                  <option className="secondColumns__op1">Asistente</option>
                  <option className="secondColumns__op2">Ponente</option>
                </select>
                <label className="form-add-event-container__label">
                  Nombre del evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Fecha Inicio del Evento<p className="rojo-required">*</p>
                </label>

                <input
                  type="date"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                 Fecha Fin del Evento<p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Cantidad de Participantes <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Ponente <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Lugar del Evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Semillero<p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Evidencia del Producto <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <div className="btns-crear-evento">
                  <button type="button" className="btnEvents__crear--green">
                    Crear
                  </button>

                  <Link to={"/lider_semillero/Listar-eventos"}>
                    <button type="button" className="btnEvents__cancelar">
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

export default Crear_Eventos;
