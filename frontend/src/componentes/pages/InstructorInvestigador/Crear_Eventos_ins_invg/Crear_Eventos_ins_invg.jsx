import { IoIosReturnLeft } from "react-icons/io";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Crear_Eventos_ins_invg.css";

function Crear_Eventos_ins_invg() {
  return (
    <div className="main-container__contenedor-hijo">
      
      

      <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-event-instructor">
                <h2 className="text-center create-event-title-instructor">
                  Nuevos Eventos CTI
                </h2>

                <form className="form-add-event-container-instructor">
                <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Tipo de Evento<p className="rojo-required">*</p>
                  </label>
                  <select className="form-add-event-container-instructor__select">
                  <option selected>Seleccione el tipo de evento</option>
                    <option>Asistente</option>
                    <option>Ponente</option> 
                  </select>
                <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                    Nombre del Evento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Fecha Inicio del Evento<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                    Fecha Fin del Evento<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Cantidad de Participantes <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Ponente <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Lugar del Evento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Semillero <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-add-event-container__col1__input-instructor"
                  />

                  <label
                    className="form-add-event-container__col1__label-instructor"
                  >
                   Evidencia del Producto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-add-event-container__col1__input-instructor"
                  />
                  
                  <div className="btns-crear-evento">

                    <button className="btn-crear-evento" type="button">Crear</button>

                    <Link to={"/instructor-investigador/listar_proyectos"}>
                      <button
                        type="button"
                        className="btn-cancelar-evento"
                      >Cancelar</button>
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

export default Crear_Eventos_ins_invg;
