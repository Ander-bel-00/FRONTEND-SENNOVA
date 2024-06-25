import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Proyectos_apr_invg.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Search from "../../../common/Search";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import Modal from "react-modal";



function Listar_Proyectos_apr_invg() {
  const {userProfile} = useAuth();

  const [semilleros, setSemilleros] = useState([]);
  const [selectedSemilleroID, setSelectedSemilleroID] = useState(null);
  const [proyectosSemillero, setProyectosSemillero] = useState([]);
  const [filteredProyectos, setFilteredProyectos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const obtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get("/lista-semilleros/");
        setSemilleros(res.data);
      } catch (error) {
        console.error("Error al obtener los semilleros", error);
      }
    };

    obtenerSemilleros();
  }, []);

  useEffect(() => {
    const obtenerProyectosSemillero = async () => {
      try {
        if (selectedSemilleroID) {
          const res = await clienteAxios.get(
            `/semillero/${selectedSemilleroID}/proyectos/`
          );
          setProyectosSemillero(res.data);
          setFilteredProyectos(res.data); // Inicialmente muestra todos los proyectos
        }
      } catch (error) {
        console.error("Error al obtener los proyectos del semillero", error);
      }
    };

    obtenerProyectosSemillero();
  }, [selectedSemilleroID]);

  const handleSelectSemillero = (id) => {
    setSelectedSemilleroID(id);
    setIsModalOpen(false); // Cierra el modal solo cuando se selecciona un semillero
  };
  
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          if (selectedSemilleroID) {
            setIsModalOpen(false);
          }
        }}
        className="modal-admin-semilleros"
        overlayClassName="modal-overlay"
      >
        <h2>Seleccione un Semillero</h2>
        <ul>
          {semilleros.map((semillero) => (
            <li key={semillero.id} onClick={() => handleSelectSemillero(semillero.id)}>
              {semillero.nombre_semillero}
            </li>
          ))}
        </ul>
      </Modal>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} onClick={exportToExcel}/>
              <Search text={"Buscar proyecto"}
               onFilter={handleFilter} 
               data={proyectosSemillero}
              />
               <BotonBlanco
                 icon={<LuCalendarDays />}
                 text={"Ir al Cronograma"}
                 clase={'btn-blanco btn-blanco--modify btn-azul'} 
                 link={"../cronograma-proyectos"}
               />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-project-table">
              <thead className="list-project-table__thead">
                <tr className="list-project-table__tr">
                  <th className="list-project-table__th">
                    Nombre del Proyecto
                  </th>
                  <th className="list-project-table__th">
                    Fecha Inicio del Proyecto
                  </th>
                  <th className="list-project-table__th">
                    Fecha Fin del Proyecto
                  </th>
                  <th className="list-project-table__th">
                    Descripción del Proyecto
                  </th>
                  <th className="list-project-table__th">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProyectos.map((list, index) => (
                  <tr key={index} className="list-project-table__tr">
                    <td className="list-project-table__td">
                      {list.nombre_proyecto}
                    </td>
                    <td className="list-project-table__td">
                      {list.fecha_inicio}
                    </td>
                    <td className="list-project-table__td">{list.fecha_fin}</td>
                    <td className="list-project-table__td">
                      {list.descripcion_proyecto}
                    </td>
                    <td className="list-project-table__td text">
                      <div className="list-project-table__td__btns">
                        <Link // Link que permite ingresar por medio el icono LiaEyesolid teniendo un acceso a la url del archivo Visualizar_Suspender_Proyecto
                          to={`../visualizar-proyecto/${list.id}`}
                        >
                          <LiaEyeSolid className="list-project-table__td__btn" />
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

export default Listar_Proyectos_apr_invg;
