import { IoAdd } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { FaFileArrowUp } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Actividad_apr_invg.css";

function Visualizar_Actividad_apr_invg() {
  const Contenido = [
    {
      nombre: "Arias",
      tarea: "Programar",
      fecha: "17 marzo 2024",
      resultado: "El mejor",
      producto: "carro",
      responsable: "Anderson",
    },
    {
      nombre: "Arias",
      tarea: "programación",
      fecha: "17 marzo 2024",
      resultado: "El mejor",
      producto: "carro",
      responsable: "Anderson",
    },
  ];

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
            />
            <BotonBlanco
              icon={<CiCalendar />}
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