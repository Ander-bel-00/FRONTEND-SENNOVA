import React, { Fragment } from 'react';
import "./css/Actualizar_Actividad.css";
import { IoIosReturnLeft } from "react-icons/io";

function Actualizar_Actividad() {
  return (
   <Fragment>
    <div>
     <IoIosReturnLeft className='icon-return-update-activity'/> 
     <h1 className='text-center actualizar-actividades-titulo'>ACTUALIZAR ACTIVIDAD</h1>

         <div className='uptade-activity-box'>
          <form>
            <div>
                <label htmlFor="nombre-actividad" className='uptade-nombre-activity-title'>Nombre de la Actividad*</label>
                <input type="text" id='nombre-actividad' className='text-entry-box-nombre-update-actividad'/>
            </div>

            <div>
                <label htmlFor="tarea-activida" className='uptade-tarea-activity-title'>Tarea*</label>
                <input type="text" id='tarea-actividad' className='text-entry-box-tarea-uptade-actividad'/>
            </div>

            <div>
                <label htmlFor="fecha-entrega-actividad" className='update-fecha-activity-title'>Fecha*</label>
                <input type="date" id='fecha-entrega-actividad' className='text-entry-box-fecha-entrega-uptade-actividad'/>
            </div>

            <div>
                <label htmlFor="resultado-actividad" className='uptade-resultado-activity-title'>Resultado*</label>
                <input type="text" id='resultado-actividad' className='text-entry-box-resultado-uptade-actividad'/>
            </div>

            <div>
                <label htmlFor="producto-actividad" className='uptade-producto-activity-title'>Producto*</label>
                <input type="text" id='producto-actividad' className='text-entry-box-producto-uptade-actividad'/>
            </div>

            <div>
                <label htmlFor="responsable-actividad" className='uptade-responsable-activity-title'>Responsable de la Actividad*</label>
                <input type="text" id='responsable-actividad' className='text-entry-box-responsable-uptade-actividad'/>
            </div>

            <input type="submit" value="Actualizar" className='text-center btn-actualizar-actividad'/>
            <input type="submit" value="Cancelar" className='text-center btn-cancelar-actividad-uptd'/>
          </form>
         </div>

    </div>
   </Fragment>
  )
}

export default Actualizar_Actividad;
