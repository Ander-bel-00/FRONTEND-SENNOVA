import { IoIosReturnLeft } from "react-icons/io";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Caja_formularios from "../../../common/Caja_formularios";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Crear_Eventos_ins_invg.css";

function Crear_Eventos_ins_invg() {
  return (
    <div className="main-container__contenedor-hijo">
      
      <Link>
        <div className="add-creat-btn-return-instructor">
          <BotonReturn
            link={"/instructor-investigador/Listar-eventos"}
            icon={<IoIosReturnLeft />}
          />
        </div>
      </Link>

      <h2 class="mainssTitle-instructor"> Nuevos Eventos CTI</h2>

      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes-instructor">
              <h3 className="mainsBoxes-instructor__tile">Añadir Información</h3>
              <form className="form-add-event-container-instructor">
                <div className="firstColumns-instructor">
                  <div>
                    <label className="form-add-event-container-instructor__label">
                      Nombre del evento*
                    </label>
                    <br />
                    <input
                      type="text" className="form-add-event-container-instructor__input"
                    />

                  </div>
                  <div>
                    <label className="form-add-event-container-instructor__label">
                      Fecha de Fin del Evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container-instructor__input"
                    />
                  </div>
                  <div>
                    <label className="form-add-event-container-instructor__label">
                      Lugar del Evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container-instructor__input"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnEvents-instructor__cancelar"
                    value={"Cancelar"}
                  />
                </div>
                {/* segunda columna */}
                <div className="secondColumns-instructor">
                  <div>
                    <label className="form-add-event-container-instructor__label">
                      Fecha de Inicio del Evento*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container-instructor__input"
                    />
                  </div>
                  <div>
                    <label className="form-add-event-container-instructor__label">
                      Cantidad de participantes*
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-add-event-container-instructor__input"
                    />
                  </div>

                  <label className="form-add-event-container-instructor__label-select">
                    Tipo*
                  </label>
                  <select className="form-add-event-container-instructor__input">
                    <option className="secondColumns-instructor__op1">Asistente</option>
                    <option className="secondColumns-instructor__op2">Potente</option>
                  </select>
                  <input
                    type="submit"
                    className="btnEvents-instructor__crear--green"
                    value={"Crear"}
                  />
                </div>
              </form>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Eventos_ins_invg;
