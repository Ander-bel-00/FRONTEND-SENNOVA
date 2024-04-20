import React, { Fragment } from "react";
import "./css/Visualizar_Suspender_Proyecto_Instructor_Investigador.css";
import { IoIosReturnLeft } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import BotonReturn from "../../../common/BotonReturn";
import Caja_Blanca from "../../../common/Caja_Blanca";


function Visualizar_Suspender_Proyecto_Instructor_Investigador() {
  const invginfoProyects = [
    {
      nombre_proyecto: "Innovación",
      fecha_inicio: "12 de Abril de 2024",
      fecha_fin: "25 de Julio de 2024",
      descripcion: "Este proyecto se esta llevando",
    },
  ];
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonReturn  link={"/instructor-investigador/Listar_Proyectos_Instructor_Investigador"} icon={<IoIosReturnLeft />} />
              <div className="Header-tool-btn-go-cronograma">
                <BotonBlanco
                  icon={<LuCalendarDays />}
                  text={"Ir al Cronograma"}
                />
              </div>
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="View-off-investigator-table">
              <thead>
                <tr className="View-off-investigator-table__tr">
                  <th className="View-off-investigator-table__th">
                    Nombre del Proyecto
                  </th>
                  <th className="View-off-investigator-table__th">
                    Fecha Inicio del Proyecto
                  </th>
                  <th className="View-off-investigator-table__th">
                    Fecha Fin del Proyecto
                  </th>
                  <th className="View-off-investigator-table__th">
                    Descripción del Proyecto
                  </th>
                </tr>
              </thead>
              <tbody>
                {invginfoProyects.map((invginfoProyect, index) => (
                  <tr key={index} className="View-off-investigator-table__tr">
                    <td className="View-off-investigator-table__td">
                      {invginfoProyect.nombre_proyecto}
                    </td>
                    <td className="View-off-investigator-table__td">
                      {invginfoProyect.fecha_inicio}
                    </td>
                    <td className="View-off-investigator-table__td">
                      {invginfoProyect.fecha_fin}
                    </td>
                    <td className="View-off-investigator-table__td">
                      {invginfoProyect.descripcion}
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

export default Visualizar_Suspender_Proyecto_Instructor_Investigador;
