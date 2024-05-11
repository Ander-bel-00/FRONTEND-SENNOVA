import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from '../../../common/Caja_formularios';
import './css/Crear_Programa_Formacion_Admin.css';

function Crear_Programa_Formacion_Admin() {
  return (
    <div className="main-container__contenedor-hijo">
     
        <BotonReturn />
      

      <Caja_formularios
        info={
          <Fragment>
            <div className='inputBoxes-admin'>
              <h3 className='inputBoxes__titlecaja-admin'>Crear Programa de formación</h3>
              <form className="inputBoxes__olderbox-admin">

                <label className='unputBoxes__label-admin'>Código <p className="rojo-required">*</p></label>

                <input type='text' className='unputBoxes__input-admin' />


                <label className='unputBoxes__label-admin'>Versión <p className="rojo-required">*</p></label>

                <input type='text' className='unputBoxes__input-admin' />


                <label className='unputBoxes__label-admin'>Nombre <p className="rojo-required">*</p></label>

                <input type='text' className='unputBoxes__input-admin' />

                <div />
              </form>
              {/* Botones principales */}
              <div className='buttonsCreating-admin'>
                <button className='buttonsCreating__crear--green-admin'>  Crear</button>
                <button className='buttonsCreating__cancelar-admin'> Cancelar</button>

              </div>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Programa_Formacion_Admin;