import React from 'react';
import './css/Listar_Proyectos.css';
import { BiSolidReport } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";

function Listar_Proyectos() {
  return (
    <div className='reporte-btn'>
       <BiSolidReport className='icon-report' />
       <p className='reporte-btn__reporte-text'>Reporte</p>
       

        <div className='busqueda-option'>
            <FiSearch className='icon-search'/>
            <p className='busqueda-option__busqueda-text'>Buscar proyecto</p>
        </div>

        <div className='cronograma-link'>
            <LuCalendarDays className='icon-calendar' />
            <p className='cronograma-link__cronograma-text'>Ir a Cronograma</p>
        </div>

        <div className='crear-box'>
            <GoPlus className='icon-plus'/>
            <p className='crear-box__crear-text'>Crear</p>
         </div>

         <div className='list-project-box'>
           <p className='list-project-box__list-project-title-1'>Nombre del Proyecto</p>
           <p className='list-project-box__list-project-title-2'>Fecha de Inicio del Proyecto</p>
           <p className='list-project-box__list-project-title-3'>Fecha Fin del Proyecto</p>
           <p className='list-project-box__list-project-title-4'>Descripción del Proyecto</p>
           <hr className='my-horizontal-line-1'/>
           <LiaEyeSolid className='icon-eyesolid' />
           <LiaClipboardListSolid className='icon-list' />
           <IoTrashOutline className='icon-transh' />
           <p className='name-project'>.</p>
           <p className='start-date-project'>.</p>
           <p className='final-date-project'>.</p>
           <p className='description-project'>.</p>
           <hr className='my-horizontal-line-2'/>
         </div>
    </div>
  )
}

export default Listar_Proyectos;
