import { FaFileArrowUp } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Visualizar_Programa_Formacion_Admin.css';
import { Fragment } from "react";
import * as XLSX from "xlsx";

function Visualizar_Programa_Formacion_Admin() {
  const Visualizar = [
    {
      codigo: 2895665,
      version: "la másfresa",
      nombre: "Mariposa",
      ficha: "2895664",
      inicio_electiva: "16/05/2024",
      fin_electiva: "25/11/2014",
    },
    {
      codigo: 2895665,
      version: "la másfresa",
      nombre: "Mariposa"
    }
  ]

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Código del Programa",
        "Versión del Programa",
        "Nombre del Programa",
        "Ficha",
        "Inicio Electiva",
        "Fin Electiva",
      ],
      ...Visualizar.map((Visualizar) => [
        Visualizar.codigo,
        Visualizar.version,
        Visualizar.ficha,
        Visualizar.inicio_electiva,
        Visualizar.fin_electiva,
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
    XLSX.utils.book_append_sheet(wb, ws, "Programas_formacion");
    XLSX.writeFile(wb, "proyectos.xlsx");
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
      Header_Tools={
        <Fragment>
          <BotonBlanco icon={<FaFileArrowUp/>} text={"reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} onClick={exportToExcel}/>
          <BotonVerdeAñadir icon={<IoAdd/>} text={"Crear Programa de Formación"} link={'/admin/Crear-programa-formacion'}/>
        </Fragment>
      }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-table-admin">
            <thead>
              <tr className="list-visualize-table__tr-admin">
                <th className= "list-visualize-table__th-admin" >Código del Programa</th>
                <th className= "list-visualize-table__th-admin" >Versión del Programa</th>
                <th className= "list-visualize-table__th-admin" >Nombre del Programa</th>
                <th className= "list-visualize-table__th-admin" >Ficha</th>
                <th className= "list-visualize-table__th-admin" >Inicio Electiva</th>
                <th className= "list-visualize-table__th-admin" >Fin Electiva</th>
              </tr>
            </thead>

            <tbody>
              {Visualizar.map((Visualizar, index) => (
              <tr className="list-visualize-table__tr-admin">
                <td className= "list-visualize-table__td-admin"  key={index}> {Visualizar.codigo} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.version} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.nombre} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.ficha} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.inicio_electiva} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.fin_electiva} </td>
              </tr>
              ))}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Visualizar_Programa_Formacion_Admin;