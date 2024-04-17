import React, { Fragment } from 'react';
import "./css/Listar_Actividad.css";
import { BiSolidReport } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";

function Listar_Actividad() {
  return (
    <Fragment>
        <div className="reporte-list-activity-btn">
         <BiSolidReport className="icon-report-list-activity" />
         <p className="reporte-list-activity-btn__reporte-list-activity-text">Reporte</p>
         <div className="busqueda-list-activity-option">
           <FiSearch className="icon-search-list-activity" />
           <p className="busqueda-list-activity-option__busqueda-list-activity-text">Buscar proyecto</p>
         </div>
         <div className="cronograma-list-activity-link">
           <LuCalendarDays className="icon-calendar-list-activity" />
           <p className="cronograma-lista-activity-link__cronograma-list-activity-text">Ir a Cronograma</p>
         </div>
         <div className="crear-list-activity-box">
           <GoPlus className="icon-plus-list-activity" />
           <p className="crear-list-activity-box__crear-list-activity-text">Crear</p>
         </div>
        </div>
    </Fragment>
  )
}

export default Listar_Actividad;
