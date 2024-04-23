import React, { Fragment } from "react";
import "./css/Listar_Proyectos_apr_invg.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Search from "../../../common/Search";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


function Listar_Proyectos_apr_invg() {
    const aprlists = [ 
        {
            nombre_proyecto: "Innovación",
            fecha_inicio: "12 de Abril de 2024",
            fecha_fin: "25 de Julio de 2024",
            descripcion: "Este proyecto se esta llevando",
          }
    ];
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} />
              <Search text={"Buscar proyecto"} />
               <BotonBlanco
                 icon={<LuCalendarDays />}
                 text={"Ir al Cronograma"}
               />
            </Fragment>
          }
        />
        <Caja_Blanca
        content={
            <table className="list-project-aprendiz-table">
                <thead className="list-project-aprendiz-table__thead">
                    <tr className="list-project-aprendiz-table__tr">
                        <th className="list-project-aprendiz-table__th">
                           Nombre del Proyecto
                        </th>
                        <th className="list-project-aprendiz-table__th">
                          Fecha Inicio del Proyecto
                        </th>
                        <th className="list-project-aprendiz-table__th">
                           Fecha Fin del Proyecto
                        </th>
                        <th className="list-project-aprendiz-table__th">
                           Descripción del Proyecto
                        </th>
                        <th className="list-project-aprendiz-table__th">
                            Accion
                        </th>
                    </tr>
                </thead>
                <tbody>
                {aprlists.map ((aprlist, index) => (
                    <tr key={index} className="list-project-aprendiz-table__tr">
                       <td className="list-project-aprendiz-table__td">
                         {aprlist.nombre_proyecto}
                       </td>
                       <td className="list-project-aprendiz-table__td">
                         {aprlist.fecha_inicio}
                       </td>
                       <td className="list-project-aprendiz-table__td">
                         {aprlist.fecha_fin}
                       </td>
                       <td className="list-project-aprendiz-table__td">
                          {aprlist.descripcion}
                       </td>
                       <td className="list-project-aprendiz-table__td">
                        <div className="list-project-aprendiz-table__td__btns">
                           <Link
                             to={"/aprendiz-investigador/Visualizar_Proyecto_apr_invg"}
                           >
                             <LiaEyeSolid className="list-project-aprendiz-table__td__btn" />
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
  );
}

export default Listar_Proyectos_apr_invg;
