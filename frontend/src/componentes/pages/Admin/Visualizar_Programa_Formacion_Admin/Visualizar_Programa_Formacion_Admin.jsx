import { FaFileArrowUp } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Visualizar_Programa_Formacion_Admin.css';
import { Fragment } from "react";

function Visualizar_Programa_Formacion_Admin() {
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
          <BotonBlanco icon={<FaFileArrowUp/>} text={"reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'}/>
          <BotonVerdeAñadir icon={<IoAdd/>} text={"Crear Programa de Formación"} link={'/admin/Crear-programa-formacion'}/>
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
              </tr>
            </thead>

            <tbody>
              {Visualizar.map((Visualizar, index) => (
              <tr className="list-visualize-table__tr-admin">
                <td className= "list-visualize-table__td-admin"  key={index}> {Visualizar.codigo} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.version} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.nombre} </td>
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