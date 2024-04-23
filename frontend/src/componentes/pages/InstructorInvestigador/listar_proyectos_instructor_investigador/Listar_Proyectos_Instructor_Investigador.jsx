import React, { Fragment } from "react";
import "./css/Listar_Proyectos_Instructor_Investigador.css";
import { LiaEyeSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import { FaFileArrowUp } from "react-icons/fa6";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";

function Listar_Proyectos_Instructor_Investigador() {

    const invglists =[
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
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} />
              <Search text={"Buscar proyecto"} />
              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                link={"/instructor-investigador/cronograma"}
              />
              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Añadir Información"}
                link={"/instructor-investigador/Crear_Proyecto_Instructor_Investigador"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-project-instructor-table">
              <thead className="list-project-instructor-table__thead">
                <tr className="list-project-instructor-table__tr">
                    <th className="list-project-instructor-table__th">
                        Nombrel del Proyecto
                    </th>
                    <th className="list-project-instructor-table__th">
                        Fecha Inicio del Proyecto
                    </th>
                    <th className="list-project-instructor-table__th">
                        Fecha Fin del Proyecto
                    </th>
                    <th className="list-project-instructor-table__th">
                        Descripción del Proyecto
                    </th>
                    <th className="list-project-instructor-table__th">Acción</th>
                </tr>
              </thead>
              <tbody>
                {invglists.map((invglist, index) => ( 
                    <tr key={index} className="list-project-instructor-table__tr">
                        <td className="list-project-instructor-table__td">
                            {invglist.nombre_proyecto}
                        </td>
                        <td className="list-project-instructor-table__td">
                            {invglist.fecha_inicio}
                        </td>
                        <td className="list-project-instructor-table__td">
                            {invglist.fecha_fin}
                        </td>
                        <td className="list-project-instructor-table__td">
                            {invglist.descripcion}
                        </td>
                        <td className="list-project-instructor-table__td">
                            <div className="list-project-instructor-table__td__btns">
                            <Link to={"/instructor-investigador/Visualizar_Suspender_Proyecto_Instructor_Investigador"}
                            >
                              <LiaEyeSolid className="list-project-instructor-table__td__btn" />
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

export default Listar_Proyectos_Instructor_Investigador;