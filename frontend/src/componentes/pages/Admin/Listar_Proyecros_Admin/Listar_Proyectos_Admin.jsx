import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Proyectos_Admin.css";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Search from "../../../common/Search";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";

function Listar_Proyectos_Admin() {
  const { userProfile } = useAuth();

  const SemilleroID = userProfile ? userProfile.semillero : null;

  const [proyectosSemillero, setProyectosSemillero] = useState([]);

  const [selectedProjectId, setSelectedProjectId] = useState(null); // Nuevo estado para almacenar el ID del proyecto seleccionado

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
  }, [SemilleroID, selectedProjectId]);

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

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 40 },
      { width: 40 },
      { width: 40 },
      { width: 40 },
      { width: 40 },
      { width: 40 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Proyectos");
    XLSX.writeFile(wb, "proyectos.xlsx");
  };

  const suspenderProyecto = async (projectId) => {
    try {
      const result = await Swal.fire({
        title: "Estás seguro de suspender el Proyecto?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, suspender el Proyecto",
      });

      if (result.isConfirmed) {
        await clienteAxios.delete(`/proyectos/${projectId}/`);
        Swal.fire({
          title: "Proyecto suspendido",
          text: "El proyecto ha sido suspendido exitosamente.",
          icon: "success",
        });
        setSelectedProjectId(null); // Clear the selected project ID after successful deletion
      }
    } catch (error) {
      console.log("Hubo un error al intentar suspender el proyecto", error);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Ocurrió un error al intentar suspender el proyecto",
      });
    }
  };

  const handleSuspenderProyecto = (projectId) => {
    setSelectedProjectId(projectId);
    suspenderProyecto(projectId);
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
              <Search
                text={"Buscar proyecto"}
                onFilter={handleFilter}
                data={proyectosSemillero}
              />
              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                link={"../cronograma-proyectos"}
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />
              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear"}
                link={"../crear-proyecto"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-project-admin-table">
              <thead className="list-project-admin-table__thead">
                <tr className="list-project-admin-table__tr">
                  <th className="list-project-admin-table__th">Código SGPS</th>
                  <th className="list-project-admin-table__th">
                    Nombre del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">
                    Fecha Inicio del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">
                    Fecha Fin del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">
                    Descripción del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProyectos.map((list, index) => (
                  <tr key={index} className="list-project-admin-table__tr">
                    <td className="list-project-admin-table__td">
                      {list.codigo}
                    </td>
                    <td className="list-project-admin-table__td">
                      {list.nombre_proyecto}
                    </td>
                    <td className="list-project-admin-table__td">
                      {list.fecha_inicio}
                    </td>
                    <td className="list-project-admin-table__td">
                      {list.fecha_fin}
                    </td>
                    <td className="list-project-admin-table__td">
                      {list.descripcion_proyecto}
                    </td>
                    <td className="list-project-admin-table__td">
                      <div className="list-project-admin-table__td__btns">
                        <Link // Link que permite ingresar por medio el icono LiaEyesolid teniendo un acceso a la url del archivo Visualizar_Suspender_Proyecto
                          to={`../visualizar-proyecto/${list.id}`}
                        >
                          <LiaEyeSolid className="list-project-admin-table__td__btn" />
                        </Link>
                        <Link to={`../actualizar-proyecto/${list.id}`}>
                          <FaRegEdit className="list-project-admin-table__td__btn" />
                        </Link>
                        <IoTrashOutline
                          className="list-project-admin-table__td__btn cursor-pointer"
                          onClick={() => handleSuspenderProyecto(list.id)} // Llama a handleSuspenderProyecto con el ID del proyecto
                        />
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

export default Listar_Proyectos_Admin;