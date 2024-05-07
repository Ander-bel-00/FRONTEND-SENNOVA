import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment } from "react";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Visualizar_Programa_Formacion_ins_invg.css';

function Visualizar_Programa_Formacion_ins_invg() {
  const Visualizar = [
    {
      codigo: 15248,
      version: "mt09",
      nombre: "Rinoceronte"
    },
    {
      codigo: 15248,
      version: "mt09",
      nombre: "Rinoceronte"
    }
  ]

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
      Header_Tools={
        <Fragment>
          <BotonBlanco icon={<FaFileArrowUp/>} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} />
          <BotonVerdeAñadir icon={<IoAdd/>} text={"Crear Programa de Formación"} link={'/instructor-investigador/Crear-programa-formacion'}/>
        </Fragment>
      }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-instructor-table">
            <thead>
              <tr className="list-visualize-table-instructor__tr">
                <th className= "list-visualize-table-instructor__th" >Código</th>
                <th className= "list-visualize-table-instructor__th" >Versión</th>
                <th className= "list-visualize-table-instructor__th" >Nombre</th>
              </tr>
            </thead>

            <tbody>
              {Visualizar.map((Visualizar, index) => (
              <tr className="list-visualize-table-instructor__tr">
                <td className= "list-visualize-table-instructor__td"  key={index}> {Visualizar.codigo} </td>
                <td className= "list-visualize-table-instructor__td" > {Visualizar.version} </td>
                <td className= "list-visualize-table-instructor__td" > {Visualizar.nombre} </td>
              </tr>
              ))}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Visualizar_Programa_Formacion_ins_invg;