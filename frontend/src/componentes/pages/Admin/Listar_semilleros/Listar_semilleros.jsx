import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_semilleros.css";
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
import clienteAxios from '../../../../config/axios';

function Listar_Semilleros_Admin() {
  const [semillero, setSemillero] = useState(null);

  useEffect(() => {
    const ObtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get('/semilleros/');
        setSemillero(res.data);
      } catch (error) {
        console.error('Hubo un error al obtener los semilleros', error);
      }
    };
    ObtenerSemilleros();
  }, []);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre Semillero",
        "Nombre Regional",
        "Estado",
      ],
      ...semillero.map((semillero) => [
        semillero.nombre_semillero,
        semillero.nombre_regional,
        semillero.estado_semillero,
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
                    Nombre Regional
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
                {semillero ? (
                  <tr className="list-semillero-admin-content-table-tr">
                    <td className="list-semillero-admin-content-table-td">
                      {semillero.nombre_semillero}
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                      {semillero.nombre_regional}
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                      {semillero.estado_semillero}
                      <th>
                        <TbPointFilled className="puntico" />
                      </th>
                    </td>
                    <td className="list-semillero-admin-content-table__td">
                      <div className="list-semillero-admin-content-table__td__btns">
                        <Link to={"../semillero"}>
                          <LiaEyeSolid className="list-semillero-admin-content-table__td__btn" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="4">Cargando...</td>
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

export default Listar_Semilleros_Admin;