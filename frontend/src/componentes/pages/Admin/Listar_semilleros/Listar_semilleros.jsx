import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_semilleros.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import { FaFileArrowUp } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LiaEye, LiaEyeSolid } from "react-icons/lia";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import * as XLSX from "xlsx";
import clienteAxios from '../../../../config/axios';
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";

function Listar_Semilleros_Admin() {
  const [semillero, setSemillero] = useState([]);

  // Esta es la declaración del estado que almacenará el query de búsqueda
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const ObtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get('/lista-semilleros/');
        setSemillero(res.data);
      } catch (error) {
        console.error('Hubo un error al obtener los semilleros', error);
      }
    };
    ObtenerSemilleros();
  }, []);

  //se agrego la parte del reporte en excel
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

  const suspenderSemillero = async (semillerosId) => {
    try {
      const result = await Swal.fire({
        title: "Estás seguro de suspender el Semilero?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, suspender el Semillero",
      });

      if (result.isConfirmed) {
        await clienteAxios.delete(`/semilleros/${semillerosId}/`);
        Swal.fire({
          title: "Semillero suspendido",
          text: "El Semillero ha sido suspendido exitosamente.",
          icon: "success",
        });
        setSemillero((prev) => prev.filter((semillero)  => semillero.id !== semillerosId));
      }
    } catch (error) {
      console.log("Hubo un error al intentar suspender el Semillero", error);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Ocurrió un error al intentar suspender el Semillero",
      });
    }
  }; 

 
  // Esta función se utiliza para actualizar el estado del query de búsqueda
  const handleFilter = (query) => {
    setSearchQuery(query);
  };

  // Esta es la función que filtra los eventos basados en el query de búsqueda
  const filteredsemillero = semillero.filter((semillero)  => 
    semillero.nombre_semillero.toLowerCase().includes(searchQuery.toLowerCase())  ||
    semillero.estado_semillero.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <Search text={"Buscar Semillero"} onFilter={handleFilter} />

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
                {filteredsemillero.map(semillero => (
                  <tr className="list-semillero-admin-content-table-tr">
                    <td className="list-semillero-admin-content-table-td">{semillero.nombre_semillero}</td>
                    <td className="list-semillero-admin-content-table-td">{semillero.nombre_regional}</td>
                    <td className="list-semillero-admin-content-table-td">
                      {semillero.estado_semillero}
                      <th>
                        <TbPointFilled className="puntico" />
                      </th>
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                    <div className="list-events-table__td__btns-admin">
                      <Link to={`../semillero/${semillero.id}`} >
                        <LiaEye className="list-events-table__td__btn-admin" />
                      </Link>
                      <Link to={`../actualizar-semillero/${semillero.id}`} >
                        <FaRegEdit className="list-events-table__td__btn-admin" />
                      </Link>
                      <Link>
                        <IoTrashOutline 
                          className="list-events-table__td__btn-admin" 
                          onClick={() => suspenderSemillero(semillero.id)}
                        />
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