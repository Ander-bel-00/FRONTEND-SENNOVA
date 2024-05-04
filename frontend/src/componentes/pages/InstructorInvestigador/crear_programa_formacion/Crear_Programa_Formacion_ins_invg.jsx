import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import BotonReturn from '../../../common/BotonReturn';
import Caja_formularios from '../../../common/Caja_formularios';
import './css/Crear_Programa_Formacion_ins_invg.css';

function Crear_Programa_Formacion_ins_invg() {
  return (
    <div className="main-container__contenedor-hijo">


      <Caja_formularios
        info={
          <Fragment>
            <div className=" main-form-program-instructor">
              <h2 className="text-center create-program-title-instructor">
                Nuevo Programa de Formación
              </h2>

              <form className="form-add-program-container-instructor">

                <label
                  htmlFor="nombre"
                  className="form-add-program-container__col1__label-instructor"
                >
                  Nombre  <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="form-add-program-container__col1__input-instructor"
                />


                <label
                  htmlFor="version"
                  className="form-add-program-container__col1__label-instructor"
                >
                  Versión  <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="version"
                  className="form-add-program-container__col1__input-instructor"
                />


                <label
                  htmlFor="codigo"
                  className="form-add-program-container__col1__label-instructor"
                >
                  Código  <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="codigo"
                  className="form-add-program-container__col1__input-instructor"
                />



                <div className="btns-crear-program">

                  <button className="btn-crear-program" type="button">Crear</button>

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

export default Crear_Programa_Formacion_ins_invg;
