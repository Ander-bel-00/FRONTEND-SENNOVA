import React, { Fragment } from "react";
import "./css/Listar_Actividad_Admin.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";

function Listar_Actividad_Admin() {
  const adminActividades = [
    {
      nombre: "Desarrollo",
      tarea: "Codificar",
      fecha: "25 de Julio de 2024",
      resultado: "Sistema funcional",
      producto: "Proyecto web",
      responsable: "Arnold",
    },
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

              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Actividad"}
                link={"/admin/crear-actividad"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-activity-admin-content-table">
              <thead>
                <tr className="list-activity-admin-content-table-tr">
                  <th className="list-activity-admin-content__table__tr__th">
                    Nombre Actividad
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Tarea
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Fecha
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Resultado
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Producto
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Responsable de la Actividad
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminActividades.map((adminActividad, index) => (
                  <tr key={index} className="list-activity-admin-content-table-tr">
                    <td className="list-activity-admin-content-table-td">
                      {adminActividad.nombre}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {adminActividad.tarea}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {adminActividad.fecha}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {adminActividad.resultado}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {adminActividad.producto}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {adminActividad.responsable}
                    </td>
                    <td className="list-activity-admin-content-table__td">
                      <div className="list-activity-admin-content-table__td__btns">
                        <Link to={"/"}>
                          <LiaEyeSolid className="list-activity-admin-content-table__td__btn" />
                        </Link>
                        <Link to={"/admin/actualizar-actividad"}>
                          <FaRegEdit className="list-activity-admin-content-table__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="list-activity-admin-content-table__td__btn" />
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

export default Listar_Actividad_Admin;
