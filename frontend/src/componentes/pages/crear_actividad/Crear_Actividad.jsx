import React, { Fragment } from 'react';
import "./css/Crear_Actividad.css"
import { IoIosReturnLeft } from "react-icons/io";

function Crear_Actividad() {
  return (
    <Fragment>
        <div>
         <IoIosReturnLeft className='icon-return-create-activity'/> 
         <h1 className='text-center crear-actividades-titulo'>ACTIVIDADES</h1>

         <div className='create-activity-box'>
          <h2 className='text-center create-activity-title'>Crear Actividad</h2>
          <form>
            <div>
                <label htmlFor="nombre-actividad" className='nombre-activity-title'>Nombre de la Actividad*</label>
                <input type="text" id='nombre-actividad' className='text-entry-box-nombre-actividad'/>
            </div>

            <div>
                <label htmlFor="tarea-activida" className='tarea-activity-title'>Tarea*</label>
                <input type="text" id='tarea-actividad' className='text-entry-box-tarea-actividad'/>
            </div>

            <div>
                <label htmlFor="fecha-entrega-actividad" className='fecha-activity-title'>Fecha*</label>
                <input type="date" id='fecha-entrega-actividad' className='text-entry-box-fecha-entrega-actividad'/>
            </div>

            <div>
                <label htmlFor="resultado-actividad" className='resultado-activity-title'>Resultado*</label>
                <input type="text" id='resultado-actividad' className='text-entry-box-resultado-actividad'/>
            </div>

            <div>
                <label htmlFor="producto-actividad" className='producto-activity-title'>Producto*</label>
                <input type="text" id='producto-actividad' className='text-entry-box-producto-actividad'/>
            </div>

            <div>
                <label htmlFor="responsable-actividad" className='responsable-activity-title'>Responsable de la Actividad*</label>
                <input type="text" id='responsable-actividad' className='text-entry-box-responsable-actividad'/>
            </div>

            <input type="submit" value="Crear" className='text-center btn-crear-actividad'/>
            <input type="submit" value="Cancelar" className='text-center btn-cancelar-actividad'/>
          </form>
         </div>
        </div>
    </Fragment>
  )
}

export default Crear_Actividad;
