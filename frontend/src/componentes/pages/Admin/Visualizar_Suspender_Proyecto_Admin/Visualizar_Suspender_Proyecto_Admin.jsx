import React, { Fragment } from 'react';
import "./css/Visualizar_Suspender_Proyecto_Admin.css";
import Header_ToolBar from '../../../common/Header_ToolBar';
import BotonBlanco from '../../../common/BotonReporte';
import { LuCalendarDays } from "react-icons/lu";
import Caja_Blanca from '../../../common/Caja_Blanca';
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Visualizar_Suspender_Proyecto_Admin() {
    const admininfoProyects = [
        {
          nombre_proyecto: "Innovación",
          fecha_inicio: "12 de Abril de 2024",
          fecha_fin: "25 de Julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
      ];
  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">
            <Header_ToolBar
             Header_Tools={
                <Fragment>
                    <div className="Header-tool-btn-go-cronograma-admin">
                        <BotonBlanco
                         icon={<LuCalendarDays />}
                         text={"Ir al Cronograma"}
                         clase={'btn-blanco btn-blanco--modify btn-azul'}
                        />
                    </div>
                </Fragment>
             }
            />
            <Caja_Blanca
             content={
                <table className="View-off-admin-table"> 
                 <thead>
                 <tr className="View-off-admin-table__tr">
                  <th className="View-off-admin-table__th">Nombre del Proyecto</th>
                  <th className="View-off-admin-table__th">
                    Fecha de inicio del Proyecto
                  </th>
                  <th className="View-off-admin-table__th">Fecha fin del Proyecto</th>
                  <th className="View-off-admin-table__th">
                    Descripcion del Proyecto
                  </th>
                  <th className="View-off-admin-table__th">Acciones</th>
                </tr>
                 </thead>
                 <tbody>
                 {admininfoProyects.map((admininfoProyect, index) => (
                  <tr key={index} className="View-off-table__tr">
                    <td className="View-off-admin-table__td">
                      {admininfoProyect.nombre_proyecto}
                    </td>
                    <td className="View-off-admin-table__td">
                      {admininfoProyect.fecha_inicio}
                    </td>
                    <td className="View-off-admin-table__td">
                      {admininfoProyect.fecha_fin}
                    </td>
                    <td className="View-off-admin-table__td">
                      {admininfoProyect.descripcion}
                    </td>
                    <td className="View-off-admin-table__td">
                      <div className="View-off-admin-table__td__btns">
                        <Link to={"/admin/"}>
                          <FaRegEdit className="View-off-admin-table__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="View-off-admin-table__td__btn" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
                 </tbody>
                </table>
             }
            />
      </div>
    </Fragment>
  )
}

export default Visualizar_Suspender_Proyecto_Admin;
