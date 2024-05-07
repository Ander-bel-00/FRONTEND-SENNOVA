import { TbArrowBack } from "react-icons/tb";
import "./css/Actualizar_Eventos.css";
import { GiReturnArrow } from "react-icons/gi";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";
import "./css/Actualizar_Eventos.css";

function Actualizar_Eventos() {
  return (
    <div className="main-container__contenedor-hijo">
      <div className="add-proyect-btn-return">
        <BotonReturn icon={<GiReturnArrow />} />
      </div>
      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="caja-vs-evento">
              <h3 className="caja-vs-evento__tile">Actualizar Evento</h3>
              <form className="form-vs-evento-container">
                <div>
                  <label className="form-vs-evento-container__label">
                    Nombres <p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label">
                    Cantidad <p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label">
                    Lugar del Evento <p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
                </div>

                <div>
                  <label className="form-add-event-container__label">
                    Fecha de Inicio del Evento <p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label">
                    Fecha de Fin del Evento <p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
                </div>

                <label className="form-vs-evento-container__label">
                  Tipo de Evento <p className="text-red-600">*</p>
                </label>
                <select className="form-vs-evento-container__input">
                  <option className="columnTwo__op1">Asistente</option>
                  <option className="columnTwo__op2">Potente</option>
                </select>
                <div className="update-event-btns">
                  <button
                    type="button"
                    className="btn-vs-evento-container__crear--green"
                  >
                    Actualizar
                  </button>

                  <Link to={"/lider-semillero/Listar-eventos"}>
                    <button
                      type="button"
                      className="btn-vs-evento-container__cancelar"
                    >
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

export default Actualizar_Eventos;
