import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Proyectos_Instructor_Investigador.css";
import { LiaEyeSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import { FaFileArrowUp } from "react-icons/fa6";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import clienteAxios from "../../../../config/axios";
import { useAuth } from "../../../../context/AuthContext";

function Listar_Proyectos_Instructor_Investigador() {
  const { userProfile } = useAuth();
  const SemilleroID = userProfile ? userProfile.semillero : null;

  const [proyectosSemillero, setProyectosSemillero] = useState([]);
  const [filteredProyectos, setFilteredProyectos] = useState([]);

  useEffect(() => {
    const obtenerProyectosSemillero = async () => {
      try {
        if (SemilleroID) {
          const res = await clienteAxios.get(
            `/semillero/${SemilleroID}/proyectos/`
          );
          setProyectosSemillero(res.data);
          setFilteredProyectos(res.data); // Inicialmente muestra todos los proyectos
        }
      } catch (error) {
        console.error("Error al obtener los proyectos del semillero", error);
      }
    };

    obtenerProyectosSemillero();
  }, [SemilleroID]);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre del Proyecto",
        "Fecha Inicio del Proyecto",
        "Fecha Fin del Proyecto",
        "Codigo SGPS",
        "Descripción del Proyecto",
      ],
      ...filteredProyectos.map((proyect) => [
        proyect.nombre_proyecto,
        proyect.fecha_inicio,
        proyect.fecha_fin,
        proyect.codigo_sgps,
        proyect.descripcion_proyecto,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    ws["!cols"] = [
      { width: 40 },
      { width: 40 },
      { width: 40 },
      { width: 40 },
      { width: 40 },
      { width: 40 },
    ];

    XLSX.utils.book_append_sheet(wb, ws, "Proyectos");
    XLSX.writeFile(wb, "proyectos.xlsx");
  };

  const handleFilter = (query) => {
    const filtered = proyectosSemillero.filter(
      (project) =>
        project.nombre_proyecto.toLowerCase().includes(query.toLowerCase()) ||
        project.descripcion_proyecto.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProyectos(filtered);
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
                onClick={exportToExcel}
              />

              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                link={"/instructor-investigador/cronograma"}
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />

              <Search
                text={"Buscar proyecto"}
                onFilter={handleFilter}
                data={proyectosSemillero}
              />

              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Proyecto"}
                link={"/instructor_investigador/crear-proyecto"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-project-instructor-table">
              <thead className="list-project-instructor-table__thead">
                <tr className="list-project-instructor-table__tr">
                  <th className="list-project-instructor-table__th">Código SGPS</th>
                  <th className="list-project-instructor-table__th">
                    Nombre del Proyecto
                  </th>
                  <th className="list-project-instructor-table__th">
                    Fecha Inicio del Proyecto
                  </th>
                  <th className="list-project-instructor-table__th">
                    Fecha Fin del Proyecto
                  </th>
                  <th className="list-project-instructor-table__th">
                    Descripción del Proyecto
                  </th>
                  <th className="list-project-instructor-table__th">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProyectos.length > 0 ? (
                  filteredProyectos.map((list, index) => (
                    <tr key={index} className="list-project-instructor-table__tr">
                      <td className="list-project-instructor-table__td">{list.codigo}</td>
                      <td className="list-project-instructor-table__td">{list.nombre_proyecto}</td>
                      <td className="list-project-instructor-table__td">{list.fecha_inicio}</td>
                      <td className="list-project-instructor-table__td">{list.fecha_fin}</td>
                      <td className="list-project-instructor-table__td">{list.descripcion_proyecto}</td>
                      <td className="list-project-instructor-table__td">
                        <div className="list-project-instructor-table__td__btns">
                          <Link to={`../visualizar-proyecto/${list.id}`}>
                            <LiaEyeSolid className="list-project-instructor-table__td__btn" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>
                      <p className="text-center mt-20 font-bold">No se han encontrado proyectos</p>
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

export default Listar_Proyectos_Instructor_Investigador;
