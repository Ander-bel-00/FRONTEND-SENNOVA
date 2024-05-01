import { IoIosReturnLeft } from "react-icons/io";
import "./css/Crear_Eventos.css";
import Caja_formularios from "../../common/Caja_formularios";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";

function Crear_Eventos() {
  return (
    <div className="main-container__contenedor-hijo">
      <Link>
        <div className="add-creat-btn-return">
          <BotonReturn
            link={"/lider-semillero/Listar-eventos"}
            icon={<IoIosReturnLeft />}
          />
        </div>
      </Link>
      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes">
              <h3 className="mainsBoxes__tile">Crear Eventos CTI</h3>

              <form className="form-add-event-container">
                <label className="form-add-event-container__label">
                  Tipo <p className="rojo-required">*</p>
                </label>
                <select className="form-add-event-container__input">
                  <option className="secondColumns__op1" selected>
                    Seleccione el tipo de evento
                  </option>
                  <option>Asistente</option>
                  <option>Ponente</option>
                </select>
                <label className="form-add-event-container__label">
                  Nombre del evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Fecha de Fin del Evento <p className="rojo-required">*</p>
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
                  Fecha de Inicio del Evento <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <label className="form-add-event-container__label">
                  Cantidad de participantes <p className="rojo-required">*</p>
                </label>

                <input
                  type="text"
                  className="form-add-event-container__input"
                />

                <div className="btns-crear-evento">
                  <button type="button" className="btnEvents__crear--green">
                    Crear
                  </button>

                  <Link to={"/lider-semillero/Listar-eventos"}>
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
