import React, { Fragment, useEffect, useState } from "react";
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
import clienteAxios from '../../../../config/axios';

function Listar_Actividad_Admin() {
  const [ListActivitys, setListActivitys] = useState([]);
  
  useEffect(() => {

    const ObtenerActividades = async () => {
      try {
          const res = await clienteAxios.get(`/activity-semillero/`)
          setListActivitys(res.data);
        
      }
       catch (error){
      console.error('Error al obtener las actividades del semillero.', error);
    }

  }

  ObtenerActividades();
}, []);



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
                    Fecha Inicio
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Fecha Fin
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
                    Semillero
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {ListActivitys.map((actividad) => (
                  <tr key={actividad.id} className="list-activity-admin-content-table-tr">
                    <td className="list-activity-admin-content-table-td">
                      {actividad.nombre_actividad}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.tarea}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.fecha_inicio}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.fecha_fin}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.resultado}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.producto}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.responsable_actividad}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {actividad.semillero}
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
