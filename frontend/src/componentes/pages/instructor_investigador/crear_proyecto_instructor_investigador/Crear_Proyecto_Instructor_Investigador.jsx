import React, { Fragment } from 'react';
import "./css/Crear_Proyecto_Instructor_Investigador.css";
import { IoIosReturnLeft } from "react-icons/io";
import Caja_formularios from "../../../common/Caja_formularios";
import BotonReturn from "../../../common/BotonReturn";
import { Link } from 'react-router-dom';

function Crear_Proyecto_Instructor_Investigador() {
  return (
    <Fragment>
        <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Link>
          <div className="add-proyect-btn-return">
            <BotonReturn
              link={"/instructor-investigador/Listar_Proyectos_Instructor_Investigador"}
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>

        <Caja_formularios
         info={
           <Fragment>
             <h2 className="text-center create-project-instructor-title">
               Crear Proyecto
             </h2>
             <form className="form-add-pryect-intructor-container">
                <div className="form-add-pryect-instructor-container__col1">
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Nombre del Proyecto*
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                  />
                  <label htmlFor="descripción-proyecto">
                    Descripción del Proyecto*
                  </label>
                  <textarea
                    name="text"
                    id="descripcion-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-instructor-container__col1__textarea"
                  ></textarea>
                </div>

                <div className="form-add-pryect-intructor-container__column2">
                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Fecha inicio del Proyecto*
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Fecha Fin del Proyecto*
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                  />

                  <input
                    type="submit"
                    value="Crear"
                    className="btn-crear-proyecto"
                  />
                  <input
                    type="submit"
                    value="Cancelar"
                    className="btn-cancelar-proyecto"
                  />
                </div>
              </form>
           </Fragment>
         }
        />
      </div>
    </Fragment>
  )
}

export default Crear_Proyecto_Instructor_Investigador;
