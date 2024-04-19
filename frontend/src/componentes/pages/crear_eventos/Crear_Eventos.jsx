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
        <div className="add-event-btn-return">
          <BotonReturn
            link={"/lider-semillero/Listar-eventos"}
            icon={<IoIosReturnLeft />}
          />
        </div>
      </Link>
      <h2 class="mainssTitle"> Nuevos Eventos CTI</h2>

      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            
              <h3 className="mainsBoxes__tile">Crear Eventos CTI</h3>
              <form className="form-add-event-container">
                <div className="firstColumns">
                  <div>
                    <label className="form-add-event-container__label">
                      Nombre del evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container__input"
                    />
                  </div>
                  <div>
                    <label className="form-add-event-container__label">
                      Fecha de Fin del Evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container__input"
                    />
                  </div>
                  <div>
                    <label className="form-add-event-container__label">
                      Lugar del Evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container__input"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnEvents__cancelar"
                    value={"Cancelar"}
                  />
                </div>
                {/* segunda columna */}
                <div className="secondColumns">
                  <div>
                    <label className="form-add-event-container__label">
                      Fecha de Inicio del Evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container__input"
                    />
                  </div>
                  <div>
                    <label className="form-add-event-container__label">
                      Cantidad de participantes*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container__input"
                    />
                  </div>

                  <label className="form-add-event-container__label-select">
                    Tipo*
                  </label>
                  <select className="form-add-event-container__input">
                    <option className="secondColumns__op1">Asistente</option>
                    <option className="secondColumns__op2">Potente</option>
                  </select>
                  <input
                    type="submit"
                    className="btnEvents__crear--green"
                    value={"Crear"}
                  />
                </div>
              </form>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Eventos;
