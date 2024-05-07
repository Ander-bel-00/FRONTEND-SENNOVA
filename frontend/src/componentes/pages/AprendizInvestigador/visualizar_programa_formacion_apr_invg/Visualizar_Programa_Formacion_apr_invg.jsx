import { Fragment } from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import "./css/Visualizar_Programa_Formacion_apr_invg.css";

function Visualizar_Programa_Formacion_apr_invg() {
  const Visualizar = [
    {
      codigo: 15248,
      version: "mt09",
      nombre: "Rinoceronte",
    },
    {
      codigo: 15248,
      version: "mt09",
      nombre: "Rinoceronte",
    },
  ];

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <div className="aprendiz-view-program-report-btn">
              <BotonBlanco
                icon={<FaFileArrowUp />}
                text={"reporte"}
                clase={"btn-blanco btn-blanco--modify btn-verde"}
              />
            </div>
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-aprendiz-table">
            <thead>
              <tr className="list-visualize-table-aprendiz__tr">
                <th className="list-visualize-table-aprendiz__th">Código</th>
                <th className="list-visualize-table-aprendiz__th">Versión</th>
                <th className="list-visualize-table-aprendiz__th">Nombre</th>
              </tr>
            </thead>

            <tbody>
              {Visualizar.map((Visualizar, index) => (
                <tr className="list-visualize-table-aprendiz__tr">
                  <td className="list-visualize-table-aprendiz__td" key={index}>
                    {" "}
                    {Visualizar.codigo}{" "}
                  </td>
                  <td className="list-visualize-table-aprendiz__td">
                    {" "}
                    {Visualizar.version}{" "}
                  </td>
                  <td className="list-visualize-table-aprendiz__td">
                    {" "}
                    {Visualizar.nombre}{" "}
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
export default Visualizar_Programa_Formacion_apr_invg;
