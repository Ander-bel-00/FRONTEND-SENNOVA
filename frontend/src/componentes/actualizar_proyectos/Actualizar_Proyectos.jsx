import React, { Fragment } from 'react';
import './css/Actualizar_Proyectos.css';
import { IoIosReturnLeft } from "react-icons/io";


function Actualizar_Proyectos() {
  return (
    <Fragment>
       <div>
       <IoIosReturnLeft className='icon-return-actualizar'/>
       <div className='actualizar-project-box'>
         <h2 className='text-center actualizar-project-title'>ACTUALIZAR PROYECTO DE INVESTIGACIÓN</h2>
         <form>
            <div>
                <label htmlFor="nombre-del-proyecto" className='nombre-project-inv-title'>Nombre del Proyecto*</label>
                <input type="text" id='nombre-del-proyecto' className='text-entry-box-nombre-proyecto'/>
            </div>

            <div>
            <label htmlFor="fecha-inicio-del-proyecto" className='fecha-inicio-project-inv-title'>Fecha inicio del Proyecto*</label>
              <input type="date" id='fecha-inicio-del-proyecto' className='text-entry-box-fecha-inicio-del-proyecto'/>
            </div>

            <div>
            <label htmlFor="descripción-del-proyecto" className='descripcion-project-inv-title'>Descripción del Proyecto*</label>
              <textarea name="text" id="descripcion-del-proyecto" cols="28" rows="9" className='text-entry-box-descripcion-del-proyecto'></textarea>
            </div>

            <div>
            <label htmlFor="fecha-fin-del-proyecto" className='fecha-fin-project-inv-title'>Fecha Fin del Proyecto*</label>
              <input type="date" id='fecha-fin-del-proyecto' className='tex-entry-box-fecha-fin-del-proyecto'/>
            </div>

            <input type="submit" value="Crear" className='text-center btn-crear-proyecto-inv'/>
            <input type="submit" value="Cancelar" className='text-center btn-cancelar-proyecto'/>
         </form>
         </div>
       </div>
    </Fragment>
  )
}

export default Actualizar_Proyectos




