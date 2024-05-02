import React, { Fragment, useEffect, useState } from 'react';
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
import Caja_Blanca from '../../../common/Caja_Blanca';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import clienteAxios from '../../../../config/axios';
import * as XLSX from "xlsx";

function Listar_Proyectos_Admin() {
  const {userProfile} = useAuth();

  const SemilleroID = userProfile ? userProfile.semillero : null;

  const [proyectosSemillero, setProyectosSemillero] = useState([]);

  useEffect(() => {
    const obtenerProyectosSemillero = async () => {
      try {
        if (SemilleroID) {
          const res = await clienteAxios.get("/proyectos/");
          setProyectosSemillero(res.data);
        }
      } catch (error) {
        console.error('Error al obtener los proyectos del semillero', error);
      }
    }
  
    obtenerProyectosSemillero();
  }, [SemilleroID]);
  

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre del Proyecto",
        "Fecha Inicio del Proyecto",
        "Fecha Fin del Proyecto",
        "Descripción del Proyecto",
      ],
      ...proyectosSemillero.map((proyect) => [
        proyect.nombre_proyecto,
        proyect.fecha_inicio,
        proyect.fecha_fin,
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
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Proyectos");
    XLSX.writeFile(wb, "proyectos.xlsx");
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
              <Search text={"Buscar proyecto"} />
              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                link={"../cronograma"}
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
                {proyectosSemillero.map((list, index) => (
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
                    <td className="list-project-table__td">
                      <div className="list-project-table__td__btns">
                        <Link // Link que permite ingresar por medio el icono LiaEyesolid teniendo un acceso a la url del archivo Visualizar_Suspender_Proyecto
                          to={"../visualizar-suspender-proyecto"}
                        >
                          <LiaEyeSolid className="list-project-table__td__btn" />
                        </Link>
                        <Link to={"../actualizar-proyectos"}>
                          <FaRegEdit className="list-project-table__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="list-project-table__td__btn" />
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

export default Listar_Proyectos_Admin;
