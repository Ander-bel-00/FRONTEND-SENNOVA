import React, { Fragment } from "react";
import "./css/Listar_Actividad.css";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import BotonBlanco from "../../common/BotonReporte";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import { FaFileArrowUp } from "react-icons/fa6";
import Header_ToolBar from "../../common/Header_ToolBar";
import Caja_Blanca from "../../common/Caja_Blanca";

function Listar_Actividad() {
  const Actividades = [
    {
      nombre: 'Desarrollo',
      tarea: 'Codificar',
      fecha: '25 de Julio de 2024',
      resultado: 'Sistema funcional',
      producto: 'Proyecto web',
      responsable: 'Arnold'
    },
    {
      nombre: 'Desarrollo',
      tarea: 'Codificar',
      fecha: '25 de Julio de 2024',
      resultado: 'Sistema funcional',
      producto: 'Proyecto web',
      responsable: 'Arnold'
    }
  ]
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} />

              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
              />

              <Search text={"Buscar Actividades"} />

              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Actividad"}
                link={""}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-activity-content-table">
              <thead>
                <tr className="list-activity-content-table-tr">
                  <th className="list-activity-content__table__tr__th">
                    Nombre Actividad
                  </th>
                  <th className="list-activity-content__table__tr__th">
                    Tarea
                  </th>
                  <th className="list-activity-content__table__tr__th">
                    Fecha
                  </th>
                  <th className="list-activity-content__table__tr__th">
                    Resultado
                  </th>
                  <th className="list-activity-content__table__tr__th">
                    Producto
                  </th>
                  <th className="list-activity-content__table__tr__th">
                    Responsable de la Actividad
                  </th>
                </tr>
              </thead>
              <tbody>
                {Actividades.map((Actividad, index) => (
                  <tr key={index} className="list-activity-content-table-tr">
                    <td className="list-activity-content-table-td">
                      {Actividad.nombre}
                    </td>
                    <td className="list-activity-content-table-td">
                      {Actividad.tarea}
                    </td>
                    <td className="list-activity-content-table-td">
                      {Actividad.fecha}
                    </td>
                    <td className="list-activity-content-table-td">
                      {Actividad.resultado}
                    </td>
                    <td className="list-activity-content-table-td">
                      {Actividad.producto}
                    </td>
                    <td className="list-activity-content-table-td">
                      {Actividad.responsable}
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

export default Listar_Actividad;
