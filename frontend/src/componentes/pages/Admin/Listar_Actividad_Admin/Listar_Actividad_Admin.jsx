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
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";
import * as XLSX from "xlsx"; //se agrego la importación del generar reporte en excel

function Listar_Actividad_Admin() {
  const [listActivitys, setListActivitys] = useState([]);
  const [FilteredActivitys, setFilteredActivitys] = useState([]);
  const [semilleroInfo, setSemilleroInfo] = useState({});

  useEffect(() =>{
    const Obteneractividadsemilleros = async () => {
      try {
        const res = await clienteAxios.get(`/activity-semillero/`);
        const activities = res.data;
        setListActivitys(activities);
        setFilteredActivitys(activities);

        // Obtener información de los semilleros
        const semilleroPromises = activities.map(async (activity) => {
          if (!activity.semillero) {
            console.warn(
              `Actividad con ID ${activity.id} no tiene semillero asignado.`
            );
            return null;
          }

          const semilleroRes = await clienteAxios.get(
            `/semilleros/${activity.semillero}/`
          );
          return {
            semilleroId: activity.semillero,
            nombre_semillero: semilleroRes.data.nombre_semillero,
          };
        });

        const semilleros = (await Promise.all(semilleroPromises)).filter(
          Boolean
        );
        const semilleroMap = semilleros.reduce((map, semillero) => {
          map[semillero.semilleroId] = semillero.nombre_semillero;
          return map;
        }, {});

        setSemilleroInfo(semilleroMap);
      } catch (error) {
        console.error("Error al obtener las actividades del Semillero:", error);
      }
    };

    Obteneractividadsemilleros();
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
                onClick={exportToExcel} // se agrego la parte del generar reporte en excel 
              />

              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                link={"../cronograma"}
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />

              <Search text={"Buscar Actividades"}   onFilter={handleFilter} />

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
                    Fecha de Inicio
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Fecha de Fin
                  </th>
                  <th className="list-activity-admin-content__table__tr__th">
                    Resultado
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
                {listActivitys.map((actividad) => (
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
                      {actividad.responsable_actividad}
                    </td>
                    <td className="list-activity-admin-content-table-td">
                      {semilleroInfo[actividad.semillero] || "No asignado"}
                    </td>
                    <td className="list-activity-admin-content-table__td">
                      <div className="list-activity-admin-content-table__td__btns">
                        <Link to={`../visualizar-actividad/${actividad.id}`}>
                          <LiaEyeSolid className="list-activity-admin-content-table__td__btn" />
                        </Link>
                        <Link to={`../actualizar-actividad/${actividad.id}`}>
                          <FaRegEdit className="list-activity-admin-content-table__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline
                            className="list-activity-admin-content-table__td__btn"
                            onClick={() => suspenderActividades(actividad.id)}
                          />
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
