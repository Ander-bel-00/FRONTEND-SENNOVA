import React, { Fragment } from "react";
import "./css/Visualizar_Suspender_Proyecto.css";
import { GiReturnArrow } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Caja_Blanca from "../../common/Caja_Blanca";
import Header_ToolBar from "../../common/Header_ToolBar";
import { Link } from "react-router-dom";
import BotonBlanco from "../../common/BotonReporte";
import BotonReturn from "../../common/BotonReturn";

function Visualizar_Suspender_Proyecto() {
  const infoProyects = [
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
              <div className="view-proyect-btn-return">
                <BotonReturn icon={<GiReturnArrow />} />
              </div>
              <div className="Header-tool-btn-go-cronograma">
                <BotonBlanco
                  icon={<LuCalendarDays />}
                  text={"Ir al Cronograma"}
                  link={"/lider-semillero/cronograma"}
                  clase={"btn-blanco btn-blanco--modify btn-azul"}
                />
              </div>
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="View-off-table">
              <thead>
                <tr className="View-off-table__tr">
                  <th className="View-off-table__th">Nombre del Proyecto</th>
                  <th className="View-off-table__th">
                    Fecha de inicio del Proyecto
                  </th>
                  <th className="View-off-table__th">Fecha fin del Proyecto</th>
                  <th className="View-off-table__th">
                    Descripcion del Proyecto
                  </th>
                  <th className="View-off-table__th">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {infoProyects.map((infoProyecto, index) => (
                  <tr key={index} className="View-off-table__tr">
                    <td className="View-off-table__td">
                      {infoProyecto.nombre_proyecto}
                    </td>
                    <td className="View-off-table__td">
                      {infoProyecto.fecha_inicio}
                    </td>
                    <td className="View-off-table__td">
                      {infoProyecto.fecha_fin}
                    </td>
                    <td className="View-off-table__td">
                      {infoProyecto.descripcion}
                    </td>
                    <td className="View-off-table__td">
                      <div className="View-off-table__td__btns">
                        <Link to={"/lider-semillero/actualizar-proyectos"}>
                          <FaRegEdit className="View-off-table__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="View-off-table__td__btn" />
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

export default Visualizar_Suspender_Proyecto;
