import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Actividad_apr_invg.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import Search from "../../../common/Search";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import { AiOutlinePlus } from "react-icons/ai";
import clienteAxios from "../../../../config/axios";
import * as XLSX from "xlsx"; 

function Listar_Actividad_apr_invg() {
  const [listActivitys, setListActivitys] = useState([]);

  // Esta es la declaración del estado que almacenará el query de búsqueda
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() =>{
    const Obteneractividadsemilleros = async () => {
      try {
          const res = await clienteAxios.get(`/activity-semillero/`);
          setListActivitys(res.data);
        }
        catch (error) {
        console.error('Error al obtener las actividades del Semillero:', error);
      }
    }
    Obteneractividadsemilleros(); // Así se llama la función para obtener las actividades
  }, []);
  
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre Actividad",
        "Tarea",
        "Fecha de Inicio",
        "Fecha de Fin",
        "Resultado",
        "Responsable de la Actividad",
        "Semillero",
      ],
      ...listActivitys.map((actividad) => [
        actividad.nombre_actividad,
        actividad.tarea,
        actividad.fecha_inicio,
        actividad.fecha_fin,
        actividad.resultado,
        actividad.responsable_actividad,
        actividad.semillero,
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
    XLSX.utils.book_append_sheet(wb, ws, "Actividades");
    XLSX.writeFile(wb, "actividades.xlsx");
  };


  // Esta función se utiliza para actualizar el estado del query de búsqueda
  const handleFilter = (query) => {
    setSearchQuery(query);
  };

  // Esta es la función que filtra los eventos basados en el query de búsqueda
  const filteredActivitys = listActivitys.filter ((actividad) => 
    actividad.nombre_actividad.toLowerCase().includes(searchQuery.toLowerCase())  ||
    actividad.responsable_actividad.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />

              <Search text={"Buscar Actividades"} onFilter={handleFilter} />

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
                {filteredActivitys.map((actividad) => (
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
                      {actividad.semillero}
                    </td>
                    <td className="list-activity-admin-content-table__td">
                      <div className="list-activity-admin-content-table__td__btns">
                        <Link to={"../visualizar-actividad"}>
                          <LiaEyeSolid className="list-activity-admin-content-table__td__btn" />
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

export default Listar_Actividad_apr_invg;
