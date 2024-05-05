import React, { Fragment } from "react";
import "./css/Actualizar_Semillero.css";
import { GiReturnArrow } from "react-icons/gi";
import Caja_formularios from "../../common/Caja_formularios";
import BotonReturn from "../../common/BotonReturn";

function Actualizar_Semillero() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <div className="add-proyect-btn-return">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
        <Caja_formularios
          info={
            <Fragment>
              <div className="update-semillero-main">
                <h2 className="text-center actualizar-semillero-title">
                  ACTUALIZAR SEMILLERO DE INVESTIGACIÓN
                </h2>
                <form className="form-update-semillero-content">
                  <label
                    htmlFor="nombre-del-semillero"
                    className="form-update-semillero-content__col1__label"
                  >
                    Nombre del semillero <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-del-semillero"
                    className="form-update-semillero-content__col1__input"
                  />
                  <label
                    htmlFor="nombre-regional"
                    className="form-update-semillero-content__col1__label"
                  >
                    Regional <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-regional"
                    className="form-update-semillero-content__col1__input"
                  />
                  <label
                    htmlFor="centro-de-formacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Centro de Formación <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="centro-de-formacion"
                    className="form-update-semillero-content__col1__input"
                  />
                  <label
                    htmlFor="grupo-adscrito"
                    className="form-update-semillero-content__col1__label"
                  >
                    Grupo Adscrito <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="grupo-adscrito"
                    className="form-update-semillero-content__col1__input"
                  />
                  <label
                    htmlFor="sectores-de-aplicacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Sectores de Aplicación <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="sectores-de-aplicacion"
                    className="form-update-semillero-content__col1__input"
                  />
                  <label
                    htmlFor="integrantes-semillero"
                    className="form-update-semillero-content__col1__label"
                  >
                    Integrantes <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="integrantes-semillero"
                    className="form-update-semillero-content__col1__input"
                  />
                  <label
                    htmlFor="plan-estrategico-de-investigacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Plan Estrategico de Investigación{" "}
                    <p className="text-red-600">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="plan-estrategico-de-investigacion"
                    cols="28"
                    rows="9"
                    className="form-update-semillero-content__col1__textarea"
                  />
                  <label
                    htmlFor="linea-de-investigacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Línea de Investigación <p className="text-red-600">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="linea-de-investigacion"
                    cols="28"
                    rows="9"
                    className="form-update-semillero-content__col1__textarea"
                  ></textarea>

                  <div className="update-semillero-btns">
                    <input
                      type="submit"
                      value="Actualizar"
                      className="btn-actualizar-semillero"
                    />
                    <input
                      type="submit"
                      value="Cancelar"
                      className="btn-cancelar-actualizar-semillero"
                    />
                  </div>
                </form>
              </div>
            </Fragment>
          }
        />
      </div>
    </Fragment>
  );
}

export default Actualizar_Semillero;
