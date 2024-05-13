import React, { Fragment } from "react";
import "./css/Actualizar_Semillero.css";
import { GiReturnArrow } from "react-icons/gi";
import Caja_formularios from "../../common/Caja_formularios";
import BotonReturn from "../../common/BotonReturn";

function Actualizar_Semillero() {
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
       
          <BotonReturn />
       
        
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
                  <select className="form-update-semillero-content__col1__input">
                    <option selected>Seleccione el centro de formación</option>
                    <option>Centro De Atención Al Sector Agropecuario </option>
                    <option>Centro De comercio Y Servicio</option>
                    <option>Centro De Diseño E Innovación Tecnológica Industrial</option>
                  </select>
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
                    Grupo de Investigación Adscrito <p className="text-red-600">*</p>
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
                  <select className="form-add-semillero-content__col1__input">
                    <option selected>Seleccione el sector de aplicación</option>
                    <option>Ingeniería y Tecnología</option>
                    <option>Educación</option>
                    <option>Comercial - Agrícola</option>
                    <option>Industrias Culturales y Creativas</option>
                    <option>Industria Farmacéutica - Salud</option>
                    <option>Todos los demás donde se puedan aplicar Tecnologías de la Información y de las Comunicaciones</option>
                  </select>
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
                    Plan Estratégico de Investigación{" "}
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
                  <select className="form-add-semillero-content__col1__input">
                    <option selected>Seleccione la línea de investigación</option>
                    <option>Telemática y Desarrollo de TIC</option>
                    <option>Educación, Pedagogía, Transformación Social e Innovación</option>
                    <option>Sistemas Productivos, Organizacionales e Industriales</option>
                    <option>Sistemas Electrónicos, Automatización y Control de Procesos</option>
                    <option>Diseño de la Moda, Manufactura Textil y Cuero</option>
                    <option>Tecnologías para el Hábitat, las Energías Renovables y el Desarrollo Sostenible</option>
                    <option>Diseño y Fabricación de Sistemas Mecánicos y Autotrónicos</option>
                  </select>
                  
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
