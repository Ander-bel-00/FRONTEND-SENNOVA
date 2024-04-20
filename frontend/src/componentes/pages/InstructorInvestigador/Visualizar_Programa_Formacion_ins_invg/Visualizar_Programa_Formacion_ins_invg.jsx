import { BiSolidReport, BiTable } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Visualizar_Programa_Formacion_ins_invg.css';
import { Fragment } from "react";

function Visualizar_Programa_Formacion_ins_invg() {
  const Visualizar = [
    {
      codigo: 2895665,
      version: "la másfresa",
      nombre: "Mariposa"
    },
    {
      codigo: 2895665,
      version: "la másfresa",
      nombre: "Mariposa"
    }
  ]

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
      Header_Tools={
        <Fragment>
          <BotonBlanco icon={<BiSolidReport/>} text={"reporte"} />
          <BotonVerdeAñadir icon={<IoAdd/>} text={"Crear Programa de Formación"} link={'/lider-semillero/Crear-programa-formacion'}/>
        </Fragment>
      }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-table">
            <thead>
              <tr className="list-visualize-table__tr">
                <th className= "list-visualize-table__th" >Código</th>
                <th className= "list-visualize-table__th" >Versión</th>
                <th className= "list-visualize-table__th" >Nombre</th>
              </tr>
            </thead>

            <tbody>
              {Visualizar.map((Visualizar, index) => (
              <tr className="list-visualize-table__tr">
                <td className= "list-visualize-table__td"  key={index}> {Visualizar.codigo} </td>
                <td className= "list-visualize-table__td" > {Visualizar.version} </td>
                <td className= "list-visualize-table__td" > {Visualizar.nombre} </td>
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