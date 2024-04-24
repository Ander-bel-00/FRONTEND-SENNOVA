import React, { Fragment } from "react";
import "./css/Crear_Proyecto.css";
import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../common/Caja_formularios";
import BotonReturn from "../../common/BotonReturn";
import { Link } from "react-router-dom";

function Crear_Proyecto() {

  // const history = useHistory()
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Link>
          <div className="add-proyect-btn-return">
            <BotonReturn
              // onClick={() => history.goBack()}
              icon={<IoIosReturnLeft />}
              link={"/lider-semillero/Listar_proyectos"}
            />
          </div>
        </Link>

        <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-proyecto">
                <h2 className="text-center create-project-title">
                  Crear Proyecto
                </h2>

                <form className="form-add-pryect-container">

                  <label
                    htmlFor="tipo proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                   Tipo proyecto  <p className="rojo-required">*</p>
                  </label>

                  <select className="form-add-pryect-container__select">
                  <option selected>Seleccione tipo de proyecto</option>
                    <option>Modernizacion</option>
                    <option>Innovación</option>
                    <option>Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Nombre del Proyecto  <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-pryect-container__col1__input"
                  />
                  <label htmlFor="descripción-proyecto" className="form-add-pryect-container__col1__label">

                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-container__col1__textarea"
                  ></textarea>



                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    className="form-add-pryect-container__col1__input"
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-proyecto"
                    className="form-add-pryect-container__col1__input"
                  />

                  <div className="btns-crear-projecto">

                    <button className="btn-crear-proyecto">Crear</button>

                    <Link to={"/lider-semillero/Listar_Proyectos"}>
                      <input
                        type="submit"
                        value="Cancelar"
                        className="btn-cancelar-proyecto"
                      />
                    </Link>
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

export default Crear_Proyecto;
