import { FaFileArrowUp } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Visualizar_Programa_Formacion_Admin.css';
import { Fragment, useEffect, useState } from "react";
import clienteAxios from '../../../../config/axios';
import * as XLSX from "xlsx";

function Visualizar_Programa_Formacion_Admin() {
  const [programasFormacion, setProgramasFormacion] = useState([]);

  useEffect(() => {
    const obtenerProgramaFormacion = async () => {
      try {
        const res = await clienteAxios.get('/programaformacion/');
        setProgramasFormacion(res.data);
      } catch (error) {
        console.log('Error al obtener todos los programas de formación', error);
      }
    }

    obtenerProgramaFormacion();
  }, []);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Código programa de Formación",
        "Versión Programa de Formación",
        "Nombre Programa de Formación",
        "Número de Ficha",
        "Fecha Inicio Lectiva",
        "Fecha Fin Lectiva",
      ],
      ...programasFormacion.map((program) => [
        program.codigo_programa_formacion,
        program.version_programa_formacion,
        program.nombre_programa_formacion,
        program.ficha,
        program.inicio_lectiva,
        program.fin_lectiva,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
      { width: 25 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Proyectos");
    XLSX.writeFile(wb, "programas_formacion.xlsx");
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
      Header_Tools={
        <Fragment>
          <BotonBlanco icon={<FaFileArrowUp/>} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} onClick={exportToExcel}/>
          <BotonVerdeAñadir icon={<IoAdd/>} text={"Crear Programa de Formación"} link={'../Crear-programa-formacion'}/>
        </Fragment>
      }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-table-admin">
            <thead>
              <tr className="list-visualize-table__tr-admin">
                <th className= "list-visualize-table__th-admin" >Código</th>
                <th className= "list-visualize-table__th-admin" >Versión</th>
                <th className= "list-visualize-table__th-admin" >Nombre</th>
                <th className= "list-visualize-table__th-admin" >Número de Ficha</th>
                <th className= "list-visualize-table__th-admin" >Inicio Lectiva</th>
                <th className= "list-visualize-table__th-admin" >Fin Lectiva</th>
              </tr>
            </thead>

            <tbody>
              {programasFormacion.length > 0 ? (
                programasFormacion.map(programa => (
                  <tr className="list-visualize-table__tr-admin" key={programa.id}>
                    <td className= "list-visualize-table__td-admin"> {programa.codigo_programa_formacion} </td>
                    <td className= "list-visualize-table__td-admin" > {programa.version_programa_formacion} </td>
                    <td className= "list-visualize-table__td-admin" > {programa.nombre_programa_formacion} </td>
                    <td className= "list-visualize-table__td-admin" > {programa.ficha} </td>
                    <td className= "list-visualize-table__td-admin" > {programa.inicio_lectiva} </td>
                    <td className= "list-visualize-table__td-admin" > {programa.fin_lectiva} </td>
                  </tr>
                  ))
              ): (
                <tr>
                  <td colSpan={6}><p className="mt-10 font-bold">No hay programas de formación disponibles</p></td>
                </tr>
              )}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Visualizar_Programa_Formacion_Admin;