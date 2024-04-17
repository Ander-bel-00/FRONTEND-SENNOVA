import React, { Fragment } from 'react';
import './css/Crear_Proyecto.css';
import { IoIosReturnLeft } from "react-icons/io";

function Crear_Proyecto() {
  return (
    <Fragment>
      <div>
        <IoIosReturnLeft className='icon-return-create'/>

        <div className='create-project-box'>
         <h2 className='text-center create-project-title'>Crear Proyecto</h2>
         <form>
           <div>
             <label htmlFor="nombre-proyecto" className='nombre-project-title'>Nombre del Proyecto*</label>
             <input type="text" id='nombre-proyecto' className='text-entry-box-nombre-proyecto'/>
            </div>

            <div>
              <label htmlFor="fecha-inicio-proyecto" className='fecha-inicio-project-title'>Fecha inicio del Proyecto*</label>
              <input type="date" id='fecha-inicio-proyecto' className='text-entry-box-fecha-inicio-proyecto'/>
            </div>

            <div>
              <label htmlFor="descripción-proyecto" className='descripcion-project-title'>Descripción del Proyecto*</label>
              <textarea name="text" id="descripcion-proyecto" cols="28" rows="9" className='text-entry-box-descripcion-proyecto'></textarea> 
            </div>

            <div>
              <label htmlFor="fecha-fin-proyecto" className='fecha-fin-project-title'>Fecha Fin del Proyecto*</label>
              <input type="date" id='fecha-fin-proyecto' className='tex-entry-box-fecha-fin-proyecto'/>
            </div>

            <input type="submit" value="Crear" className='text-center btn-crear-proyecto'/>
            <input type="submit" value="Cancelar" className='text-center btn-cancelar-proyecto'/>
         </form>        
        </div>
      </div>
    </Fragment>
  )
}

export default Crear_Proyecto;
