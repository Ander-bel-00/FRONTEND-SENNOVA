import React, { Fragment } from "react";
import './css/Listar_semilleros.css';
import Header_ToolBar from "../../../common/Header_ToolBar";
import { FaFileArrowUp } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import * as XLSX from "xlsx";

function Listar_Semilleros_Admin() {
  const ListSemilleros = [
    {
      nombre: "Informática Diseño y Desarrollo de Software.",
      responsable: "Jorge Luis Raigosa Barahona",
      estado: "Activo", 
     
   
    },
  
  ];

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre Semillero",
        "Responsable Semillero",
        "Estado",
      ],
      ...ListSemilleros.map((adminActividad) => [
        adminActividad.nombre,
        adminActividad.responsable,
        adminActividad.estado,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 30 },
      { width: 30 },
      { width: 30 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Semilleros");
    XLSX.writeFile(wb, "semilleros.xlsx");
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


              <Search text={"Buscar Semillero"} />

              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Semillero"}
                link={"/admin/crear-semillero"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-semillero-admin-content-table">
              <thead>
                <tr className="list-semillero-admin-content-table-tr">
                  <th className="list-semillero-admin-content__table__tr__th">
                    Nombre Semillero
                  </th>
                  <th className="list-semillero-admin-content__table__tr__th">
                    Responsable Semillero
                  </th> 
                  <th className="list-semillero-admin-content__table__tr__th">
                    Estado
                  </th>
                  <th className="list-semillero-admin-content__table__tr__th">
                    Acciones 
                  </th>
                </tr>
              </thead>
              <tbody>
                {ListSemilleros.map((adminActividad, index) => (
                  <tr key={index} className="list-semillero-admin-content-table-tr">
                    <td className="list-semillero-admin-content-table-td">
                      {adminActividad.nombre}
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                      {adminActividad.responsable}
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                      {adminActividad.estado}

                    <th>
                      < TbPointFilled className="puntico"/>
                    
                    </th>
                      
                    </td>
                    <td className="list-semillero-admin-content-table__td">
                      <div className="list-semillero-admin-content-table__td__btns">
                    
                       
                        <Link to={"../semillero"}>
                          <LiaEyeSolid className="list-semillero-admin-content-table__td__btn" />
                          <span className="tooltip">Visualizar</span>
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

export default Listar_Semilleros_Admin;
