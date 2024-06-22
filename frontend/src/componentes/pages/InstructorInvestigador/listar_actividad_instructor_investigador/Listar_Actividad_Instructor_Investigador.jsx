import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Actividad_Instructor_Investigador.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import clienteAxios from "../../../../config/axios";

function Listar_Actividad_Instructor_Investigador() {

  const [listarActividades, setListarActividades] = useState([]);
  const [filtrarActividades, setfiltrarActividades] = useState([]);
  const [semilleroInformacion, setSemilleroInformacion] = useState({});

  useEffect(() => {
    const Obteneractividades = async () => {
      try {
        const res = await clienteAxios.get(`/activity-semillero/`);
        const activities = res.data;
        setListarActividades(activities);
        setfiltrarActividades(activities);

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

        setSemilleroInformacion(semilleroMap);

      } catch (error) {
        console.error("Error al obtener las actividades del Semillero:", error);
      }
    };
    Obteneractividades();
  }, []);

  const handleFilter = (query) => {
    const filtered = listarActividades.filter(
      (activity) =>
        activity.nombre_actividad.toLowerCase().includes(query.toLowerCase()) ||
        activity.tarea.toLowerCase().includes(query.toLowerCase()) ||
        activity.responsable_actividad.toLowerCase().includes(query.toLowerCase())
    );
    setfiltrarActividades(filtered);
  };
  



  // const invgActividades = [
  //   {
  //     nombre: "Desarrollo",
  //     tarea: "Codificar",
  //     fecha: "25 de Julio de 2024",
  //     resultado: "Sistema funcional",
  //     producto: "Proyecto web",
  //     responsable: "Arnold",
  //   },
  //   {
  //     nombre: "Desarrollo",
  //     tarea: "Codificar",
  //     fecha: "25 de Julio de 2024",
  //     resultado: "Sistema funcional",
  //     producto: "Proyecto web",
  //     responsable: "Arnold",
  //   },
  // ];

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
                link={"/instructor-investigador/cronograma"}
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />

              <Search 
                text={"Buscar Actividades"} 
                onFilter={handleFilter}
                data={listarActividades}
              />

              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Actividad"}
                link={"/instructor_investigador/crear-actividad"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-activity-instructor-content-table">
              <thead>
                <tr className="list-activity-instructor-content-table-tr">
                  <th className="list-activity-instructor-content__table__tr__th">
                    Nombre Actividad
                  </th>
                  <th className="list-activity-instructor-content__table__tr__th">
                    Tarea
                  </th>
                  <th className="list-activity-instructor-content__table__tr__th">
                    Fecha Inicio
                  </th>
                  <th className="list-activity-instructor-content__table__tr__th">
                    Fecha Fin
                  </th>
                  <th className="list-activity-instructor-content__table__tr__th">
                    Resultado
                  </th>
                  <th className="list-activity-instructor-content__table__tr__th">
                    Responsable de la Actividad
                  </th>
                  <th className="list-activity-instructor-content__table__tr__th">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtrarActividades.map((actividades) => (
                  <tr
                    key={actividades.id}
                    className="list-activity-instructor-content-table-tr"
                  >
                    <td className="list-activity-instructor-content-table-td">
                      {actividades.nombre_actividad}
                    </td>
                    <td className="list-activity-instructor-content-table-td">
                      {actividades.tarea}
                    </td>
                    <td className="list-activity-instructor-content-table-td">
                      {actividades.fecha_inicio}
                    </td>
                    <td className="list-activity-instructor-content-table-td">
                      {actividades.fecha_fin}
                    </td>
                    <td className="list-activity-instructor-content-table-td">
                      {actividades.resultado}
                    </td>
                    <td className="list-activity-instructor-content-table-td">
                      {actividades.responsable_actividad}
                    </td>
                    
                    <td className="list-activity-instructor-content-table__td">
                      <div className="list-activity-instructor-content-table__td__btns">
                        <Link
                          to={`../visualizar-actividad/`}
                        >
                          <LiaEyeSolid className="list-activity-instructor-content-table__td__btn" />
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

export default Listar_Actividad_Instructor_Investigador;
