import React from 'react';
import './css/Visualizar_Suspender_Proyecto.css';
import { IoIosReturnLeft } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";

function Visualizar_Suspender_Proyecto() {
  return (
    <div>
      <div  className='cronograma-link-1'>
      <IoIosReturnLeft className='icon-return'/>
      <LuCalendarDays className='icon-calendar-2' />
      <p className='cronograma-link-1__cronograma-text'>Ir a Cronograma</p>
      </div>

      <div className='visualize-lay-off-project-box'>
       <p className='visualize-lay-off-projecto-box__visualize-lay-off-project-title-1'>Nombre del Proyecto</p>
       <p className='visualize-lay-off-project-box__visualize-lay-off-project-title-2'>Fecha de Inicio del Proyecto</p>
       <p className='visualize-lay-off-project-box__visualize-lay-off-project-title-3'>Fecha Fin del Proyecto</p>
       <p className='visualize-lay-off-project-box__visualize-lay-off-project-title-4'>Descripción del Proyecto</p>
       <hr className='my-horizontal-line-title'/>
       <LiaClipboardListSolid className='icon-list-visus' />
       <IoTrashOutline className='icon-transh-visus' />
       <p className='name-project-visus'>.</p>
       <p className='start-date-project-visus'>.</p>
       <p className='final-date-project-visus'>.</p>
       <p className='description-project-visus'>.</p>
      </div>
    </div>
  )
}

export default Visualizar_Suspender_Proyecto;
