import { GiReturnArrow } from "react-icons/gi";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";
import "./css/Crear_Programa_Formacion.css";

function Crear_Programa_Formacion() {
  return (
    <div className="main-container__contenedor-hijo">
      <div className="add-proyect-btn-return">
        <BotonReturn icon={<GiReturnArrow />} />
      </div>

      <Caja_formularios
        info={
          <Fragment>
            <div className="inputBoxes">
              <h3 className="inputBoxes__titlecaja">
                Crear Programa de formación
              </h3>
              <form className="inputBoxes__olderbox">
                <label className="unputBoxes__label">
                  Código <p className="rojo-required">*</p>
                </label>

                <input type="text" className="unputBoxes__input" />

                <label className="unputBoxes__label">
                  Versión <p className="rojo-required">*</p>
                </label>

                <input type="text" className="unputBoxes__input" />

                <label className="unputBoxes__label">
                  Nombre <p className="rojo-required">*</p>
                </label>

                <input type="text" className="unputBoxes__input" />

                <div />
              </form>
              {/* Botones principales */}
              <div className="buttonsCreating">
                <button className="buttonsCreating__crear--green">Crear</button>
                <Link to={"../visualizar-programa-formacion"}>
                  <button className="buttonsCreating__cancelar" type="button">
                    Cancelar
                  </button>
                </Link>
              </div>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Programa_Formacion;
