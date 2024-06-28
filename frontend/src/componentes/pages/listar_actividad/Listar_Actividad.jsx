import React, { Fragment, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";

function Listar_Actividad() {
  const [listActivitys, setListActivitys] = useState([]);
  const [filteredActivitys, setFilteredActivitys] = useState([]);
  const [semilleroInfo, setSemilleroInfo] = useState({});

  useEffect(() => {
    const Obteneractividadsemilleros = async () => {
      try {
        const res = await clienteAxios.get(`/activity-semillero/`);
        const activities = res.data;
        setListActivitys(activities);
        setFilteredActivitys(activities);

        // Obtener información de los semilleros
        const semilleroPromises = activities.map(async (activity) => {
          const semilleroRes = await clienteAxios.get(`/semilleros/${activity.semillero}/`);
          return { semilleroId: activity.semillero, nombre_semillero: semilleroRes.data.nombre_semillero };
        });

        const semilleros = await Promise.all(semilleroPromises);
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

  const suspenderActividad = async (actividadId) => {
    try {
      const result = await Swal.fire({
        title: "Estás seguro de suspender la Actividad?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, suspender la Actividad",
      });

      if (result.isConfirmed) {
        await clienteAxios.delete(`/activity-semillero/${actividadId}/`);
        Swal.fire({
          title: "Actividad suspendido",
          text: "La Actividad ha sido suspendida exitosamente.",
          icon: "success",
        });
        setListActivitys((prev) => prev.filter((actividad) => actividad.id !== actividadId));
        setFilteredActivitys((prev) => prev.filter((actividad) => actividad.id !== actividadId));
      }
    } catch (error) {
      console.log("Hubo un error al intentar suspender la Actividad", error);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Ocurrió un error al intentar suspender la Actividad",
      });
    }
  };

  const handleFilter = (query) => {
    const filtered = listActivitys.filter(
      (activity) =>
        activity.nombre_actividad.toLowerCase().includes(query.toLowerCase()) ||
        activity.tarea.toLowerCase().includes(query.toLowerCase()) ||
        activity.responsable_actividad.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredActivitys(filtered);
  };

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

              <Search
                text={"Buscar Actividades"}
                onFilter={handleFilter}
                data={listActivitys}
              />

              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Actividad"}
                link={"../crear-actividad"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-activity-content-lider-table">
              <thead>
                <tr className="list-activity-content-lider-table-tr">
                  <th className="list-activity-content-lider__table__tr__th">Nombre Actividad</th>
                  <th className="list-activity-content-lider__table__tr__th">Tarea</th>
                  <th className="list-activity-content-lider__table__tr__th">Fecha de Inicio</th>
                  <th className="list-activity-content-lider__table__tr__th">Fecha de Fin</th>
                  <th className="list-activity-content-lider__table__tr__th">Resultado</th>
                  <th className="list-activity-content-lider__table__tr__th">Responsable de la Actividad</th>
                  <th className="list-activity-content-lider__table__tr__th">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivitys.length > 0 ? (
                  filteredActivitys.map((actividad) => (
                    <tr key={actividad.id} className="list-activity-content-lider-table-tr">
                      <td className="list-activity-content-lider-table-td">{actividad.nombre_actividad}</td>
                      <td className="list-activity-content-lider-table-td">{actividad.tarea}</td>
                      <td className="list-activity-content-lider-table-td">{actividad.fecha_inicio}</td>
                      <td className="list-activity-content-lider-table-td">{actividad.fecha_fin}</td>
                      <td className="list-activity-content-lider-table-td">{actividad.resultado}</td>
                      <td className="list-activity-content-lider-table-td">{actividad.responsable_actividad}</td>
                      <td className="list-activity-content-lider-table__td">

                        <div className="list-activity-content-lider-table__td__btns">
                          <Link to={`../visualizar-actividad/${actividad.id}`}>
                            <LiaEyeSolid className="list-activity-content-lider-table__td__btn" />
                          </Link>
                          <Link to={`../actualizar-actividad/${actividad.id}`}>
                            <FaRegEdit className="list-activity-content-lider-table__td__btn" />
                          </Link>
                          <Link>
                            <IoTrashOutline className="list-activity-content-lider-table__td__btn" onClick={() => suspenderActividad(actividad.id)} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8}>
                      <p className="text-center mt-20 font-bold">No se han encontrado actividades</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          }
        />
      </div>
    </Fragment>
  );
}

export default Listar_Actividad;
