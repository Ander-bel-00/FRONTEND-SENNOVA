import React, { Fragment } from "react";
import "./css/Listar_Actividad_apr_invg.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import Search from "../../../common/Search";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Listar_Actividad_apr_invg() {
  const aprinvgActividades = [
    {
      nombre: "Desarrollo",
      tarea: "Codificar",
      fecha: "25 de Julio de 2024",
      resultado: "Sistema funcional",
      producto: "Proyecto web",
      responsable: "Arnold",
    },
  ];

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco
                icon={<FaFileArrowUp />}
                text={"Reporte"}
                clase={"btn-blanco btn-blanco--modify btn-verde"}
              />

              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />

              <Search text={"Buscar Actividades"} />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-activity-aprendiz-content-table">
              <thead>
                <tr className="list-activity-aprendiz-content-table-tr">
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Nombre Actividad
                  </th>
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Tarea
                  </th>
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Fecha
                  </th>
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Resultado
                  </th>
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Producto
                  </th>
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Responsable de la Actividad
                  </th>
                  <th className="list-activity-aprendiz-content__table__tr__th">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {aprinvgActividades.map((aprinvgActividad, index) => (
                  <tr key={index} className="list-activity-aprendiz-content-table-tr">
                    <td className="list-activity-aprendiz-content-table-td">
                      {aprinvgActividad.nombre}
                    </td>
                    <td className="list-activity-aprendiz-content-table-td">
                      {aprinvgActividad.tarea}
                    </td>
                    <td className="list-activity-aprendiz-content-table-td">
                      {aprinvgActividad.fecha}
                    </td>
                    <td className="list-activity-aprendiz-content-table-td">
                      {aprinvgActividad.resultado}
                    </td>
                    <td className="list-activity-aprendiz-content-table-td">
                      {aprinvgActividad.producto}
                    </td>
                    <td className="list-activity-aprendiz-content-table-td">
                      {aprinvgActividad.responsable}
                    </td>
                    <td className="list-activity-aprendiz-content-table__td">
                      <div className="list-activity-aprendiz-content-table__td__btns">
                        <Link to={"/aprendiz-investigador/visualizar-actividad"}>
                          <LiaEyeSolid className="list-activity-aprendiz-content-table__td__btn" />
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

export default Listar_Actividad_apr_invg;
