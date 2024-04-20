import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import BotonReturn from '../../../common/BotonReturn';
import Caja_formularios from '../../../common/Caja_formularios';
import './css/Crear_Programa_Formacion_ins_invg.css';

function Crear_Programa_Formacion_ins_invg() {
  return (
    <div className="main-container__contenedor-hijo">

      <Link>
        <div className="add-creat-btn-return-instructor ">
          <BotonReturn
            link={'/instructor-investigador/Visualizar-programa-formacion'}
            icon={<IoIosReturnLeft />}
          />
        </div>
      </Link>

      <h2 class='mainsTitles-instructor'> Programa de Formación</h2>

      <Caja_formularios
        info={
          <Fragment>
            <div className='inputBoxes-instructor'>
              <h3 className='inputBoxes-instructor__titlecaja'>Añadir Información</h3>
              <form className="inputBoxes-instructor__olderbox">
                <div >
                  <label className='unputBoxes-instructor__label'>Código*</label>
                  <br />
                  <input type='text' className='unputBoxes-instructor__input' />
                </div>
                <div>
                  <label className='unputBoxes-instructor__label'>Versión*</label>
                  <br />
                  <input type='text' className='unputBoxes-instructor__input' />
                </div>
                <div>
                  <label className='unputBoxes-instructor__label'>Nombre*</label>
                  <br />
                  <input type='text' className='unputBoxes-instructor__input' />
                </div>
                <div />
              </form>
              {/* Botones principales */}
              <div className='buttonsCreating-instructor'>
                <button className='buttonsCreating-instructor__cancelar'> Cancelar</button>
                <button className='buttonsCreating-instructor__crear--green'>  Crear</button>
              </div>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Programa_Formacion_ins_invg;
