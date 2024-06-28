// Listar_proyectos.jsx
import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Proyectos.css";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import BotonBlanco from "../../common/BotonReporte";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import { FaFileArrowUp } from "react-icons/fa6";
import Caja_Blanca from "../../common/Caja_Blanca";
import Header_ToolBar from "../../common/Header_ToolBar";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import { useAuth } from "../../../context/AuthContext";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";

function Listar_Proyectos() {
  const { userProfile } = useAuth();

  const SemilleroID = userProfile ? userProfile.semillero : null;

  const [proyectosSemillero, setProyectosSemillero] = useState([]);
  const [filteredProyectos, setFilteredProyectos] = useState([]);

  useEffect(() => {
    const obtenerProyectosSemillero = async () => {
      try {
        if (SemilleroID) {
          const res = await clienteAxios.get(`/semillero/${SemilleroID}/proyectos/`);
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
      ["Nombre del Proyecto", "Fecha Inicio del Proyecto", "Fecha Fin del Proyecto", "Codigo SGPS", "Descripción del Proyecto"],
      ...filteredProyectos.map((proyect) => [
        proyect.nombre_proyecto,
        proyect.fecha_inicio,
        proyect.fecha_fin,
        proyect.codigo_sgps,
        proyect.descripcion_proyecto,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    ws["!cols"] = [{ width: 40 }, { width: 40 }, { width: 40 }, { width: 40 }, { width: 40 }, { width: 40 }];

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
        setProyectosSemillero((prev) => prev.filter((project) => project.id !== projectId));
        setFilteredProyectos((prev) => prev.filter((project) => project.id !== projectId));
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

  const handleFilter = (query) => {
    const filtered = proyectosSemillero.filter((project) =>
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
                link={"../cronograma-proyectos"} 
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
                link={"../crear-proyecto"} 
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-project-table-lider">
              <thead className="list-project-table-lider__thead">
                <tr className="list-project-table-lider__tr">
                  <th className="list-project-table-lider__th">Código SGPS</th>
                  <th className="list-project-table-lider__th">Nombre del Proyecto</th>
                  <th className="list-project-table-lider__th">Fecha Inicio del Proyecto</th>
                  <th className="list-project-table-lider__th">Fecha Fin del Proyecto</th>
                  <th className="list-project-table-lider__th">Descripción del Proyecto</th>
                  <th className="list-project-table-lider__th">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProyectos.length > 0 ? (
                  filteredProyectos.map((list) => (
                    <tr key={list.id} className="list-project-table-lider__tr">
                      <td className="list-project-table-lider__td">{list.codigo}</td>
                      <td className="list-project-table-lider__td">{list.nombre_proyecto}</td>
                      <td className="list-project-table-lider__td">{list.fecha_inicio}</td>
                      <td className="list-project-table-lider__td">{list.fecha_fin}</td>
                      <td className="list-project-table-lider__td">{list.descripcion_proyecto}</td>
                      <td className="list-project-table-lider__td">
                        
                        <div className="list-project-table-lider__td__btns">
                          <Link to={`../visualizar-proyecto/${list.id}`}>
                            <LiaEyeSolid className="list-project-table-lider__td__btn" />
                          </Link>
                          <Link to={`../actualizar-proyecto/${list.id}`}>
                            <FaRegEdit className="list-project-table-lider__td__btn" />
                          </Link>
                          <IoTrashOutline className="list-project-table-lider__td__btn cursor-pointer" onClick={() => suspenderProyecto(list.id)} />
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

export default Listar_Proyectos;
