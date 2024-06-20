import { IoAdd } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Actividad_apr_invg.css";
import * as XLSX from "xlsx";

function Visualizar_Actividad_apr_invg() {
 const [Contenido, setContenido] =useState ([]);

 useEffect(() => {
  const obtenerContenido = async () => {
    try {
      const res = await clienteAxios.get('/activity-semillero/');
      setContenido(res.data);
    } catch (error) {
      console.log('Error al obtener todos los Usurios', error);
    }
  }
  obtenerContenido();
 }, []);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre Actividad",
        "Tarea",
        "Fecha",
        "Resultado",
        "Producto",
        "Responsable de la Actividad",
      ],
      ...Contenido.map((Contenidos) => [
        Contenidos.nombre,
        Contenidos.tarea,
        Contenidos.fecha,
        Contenidos.resultado,
        Contenidos.producto,
        Contenidos.responsable,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Contenido-Actividad");
    XLSX.writeFile(wb, "contenido-actividad.xlsx");
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <div className="btn-vs-actividades-aprendiz">
              <BotonReturn icon={<GiReturnArrow />} />
            </div>
            <BotonBlanco
              icon={<FaFileArrowUp />}
              text={"Reporte"}
              clase={"btn-blanco btn-blanco--modify btn-verde"}
              onClick={exportToExcel}
            />
            <BotonBlanco
               icon={<LuCalendarDays />}
              text={"calendario"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
            />
            <Search icon={<FaSearch />} text={"Buscar Actividades"} />
            <BotonVerdeAñadir icon={<IoAdd />} text={"Añadir Actividad"} />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-actividad-table-aprendiz">
            <thead>
              <tr className="vis-actividad-table-aprendiz__tr">
                <th className="vis-actividad-table-aprendiz__th">
                  Nombre Actividad
                </th>
                <th className="vis-actividad-table-aprendiz__th">Tarea</th>
                <th className="vis-actividad-table-aprendiz__th">Fecha</th>
                <th className="vis-actividad-table-aprendiz__th">Resultado</th>
                <th className="vis-actividad-table-aprendiz__th">Producto</th>
                <th className="vis-actividad-table-aprendiz__th">
                  Responsable de la Actividad
                </th>
              </tr>
            </thead>
            <tbody>
              {Contenido.map((Contenidos, index) => (
                <tr className="vis-actividad-table-aprendiz__tr" key={index}>
                  <td className="vis-actividad-table-aprendiz__td">
                    {" "}
                    {Contenidos.nombre}
                  </td>
                  <td className="vis-actividad-table-aprendiz__td">
                    {" "}
                    {Contenidos.tarea}{" "}
                  </td>
                  <td className="vis-actividad-table-aprendiz__td">
                    {" "}
                    {Contenidos.fecha}{" "}
                  </td>
                  <td className="vis-actividad-table-aprendiz__td">
                    {" "}
                    {Contenidos.resultado}{" "}
                  </td>
                  <td className="vis-actividad-table-aprendiz__td">
                    {" "}
                    {Contenidos.producto}{" "}
                  </td>
                  <td className="vis-actividad-table-aprendiz__td">
                    {" "}
                    {Contenidos.responsable}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Visualizar_Actividad_apr_invg;
