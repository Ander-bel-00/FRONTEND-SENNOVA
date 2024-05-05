import React, { Fragment } from "react";
import "./css/Visualizar_Proyecto_apr_invg.css";
import { LuCalendarDays } from "react-icons/lu";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { GiReturnArrow } from "react-icons/gi";
import BotonReturn from "../../../common/BotonReturn";

function Visualizar_Proyecto_apr_invg() {
  const aprinvginfoProyects = [
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
              <div className="user-btn-return">
                <BotonReturn icon={<GiReturnArrow />} />
              </div>
              <div className="Header-tool-btn-go-cronograma">
                <BotonBlanco
                  icon={<LuCalendarDays />}
                  text={"Ir al Cronograma"}
                  clase={"btn-blanco btn-blanco--modify btn-azul"}
                />
              </div>
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="View-off-aprendiz-table">
              <thead>
                <tr className="View-off-aprendiz-table__tr">
                  <th className="View-off-aprendiz-table__th">
                    Nombre del Proyecto
                  </th>
                  <th className="View-off-aprendiz-table__th">
                    Fecha Inicio del Proyecto
                  </th>
                  <th className="View-off-aprendiz-table__th">
                    Fecha Fin del Proyecto
                  </th>
                  <th className="View-off-aprendiz-table__th">
                    Descripción del Proyecto
                  </th>
                </tr>
              </thead>
              <tbody>
                {aprinvginfoProyects.map((aprinvginfoProyect, index) => (
                  <tr key={index} className="View-off-aprendiz-table__tr">
                    <td className="View-off-aprendiz-table__td">
                      {aprinvginfoProyect.nombre_proyecto}
                    </td>
                    <td className="View-off-aprendiz-table__td">
                      {aprinvginfoProyect.fecha_inicio}
                    </td>
                    <td className="View-off-aprendiz-table__td">
                      {aprinvginfoProyect.fecha_fin}
                    </td>
                    <td className="View-off-aprendiz-table__td">
                      {aprinvginfoProyect.descripcion}
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

export default Visualizar_Proyecto_apr_invg;
