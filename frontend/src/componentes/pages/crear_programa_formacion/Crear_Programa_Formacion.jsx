import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from '../../common/Caja_formularios';
import './css/Crear_Programa_Formacion.css';

function Crear_Programa_Formacion() {
  return (
    <div className="main-container__contenedor-hijo">

      <Link>
        <div className="add-creat-btn-return ">
          <BotonReturn
            link={"/lider-semillero/Visualizar-programa-formacion"}
            icon={<IoIosReturnLeft />}
          />
        </div>
      </Link>

      <h2 class='mainsTitles'> Programa de Formación</h2>

      <Caja_formularios
        info={
          <Fragment>
            <div className='inputBoxes'>
              <h3 className='inputBoxes__titlecaja'>Insertar Información</h3>
              <form className="inputBoxes__olderbox">
                <div >
                  <label className='unputBoxes__label'>Código*</label>
                  <br />
                  <input type='text' className='unputBoxes__input' />
                </div>
                <div>
                  <label className='unputBoxes__label'>Versión*</label>
                  <br />
                  <input type='text' className='unputBoxes__input' />
                </div>
                <div>
                  <label className='unputBoxes__label'>Nombre*</label>
                  <br />
                  <input type='text' className='unputBoxes__input' />
                </div>
                <div />
              </form>
              {/* Botones principales */}
              <div className='buttonsCreating'>
                <button className='buttonsCreating__cancelar'> Cancelar</button>
                <button className='buttonsCreating__crear--green'>  Crear</button>
              </div>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Programa_Formacion;