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

                  <label className="form-vs-evento-container__label">
                   Tipo de Evento <p className="text-red-600">*</p>
                  </label>
                  <select className="form-vs-evento-container__input">
                    <option>Seleccione el tipo de evento</option>
                    <option>Asistente</option>
                    <option>Potente</option>
                  </select>

                  <label className="form-vs-evento-container__label">
                    Nombre del evento  <p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
              
                  <label className="form-vs-evento-container__label">
                      Fecha Inicio del Evento <p className="text-red-600">*</p>
                  </label>
                  <br/>
                  <input
                    type="date"
                    className="form-vs-evento-container__input"
                  />
        
                  <label className="form-vs-evento-container__label">
                    Fecha Fin del Evento <p className="text-red-600">*</p>
                  </label>
                  <br/>
                  <input
                    type="date"
                    className="form-vs-evento-container__input"
                  />

                  <label className="form-add-event-container__label">
                   Cantidad de Participantes <p className="text-red-600">*</p>
                  </label>
                  <br/>
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
            
                  <label className="form-vs-evento-container__label">
                    Ponente<p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />

                  <label className="form-vs-evento-container__label">
                    Lugar del Evento<p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />

                  <label className="form-vs-evento-container__label">
                    Semillero<p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />
                  
                  <label className="form-vs-evento-container__label">
                    Evidencia del Producto<p className="text-red-600">*</p>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-vs-evento-container__input"
                  />

                <div className="update-event-btns">
                </div>

                <label className="form-vs-evento-container__label">
                  Tipo de Evento <p className="text-red-600">*</p>
                </label>
                <select className="form-vs-evento-container__input">
                  <option className="columnTwo__op1">Asistente</option>
                  <option className="columnTwo__op2">Potente</option>
                </select>
                <div className="form-vs-event-btns">
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
