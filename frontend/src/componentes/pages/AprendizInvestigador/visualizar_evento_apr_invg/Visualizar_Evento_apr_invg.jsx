import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Evento_apr_invg.css";
import { GiReturnArrow } from "react-icons/gi";

function Visualizar_Evento_apr_invg() {
  const Evento = [
    {
      nombre: "Matias",
      fecha_inicio: "17 marzo 2024",
      fecha_fin: "17 marzo 2024",
      cantidad: 5,
      lugar: "La hermosa",
      tipo: "Asistente",
    },
    {
      nombre: "Matias",
      fecha_inicio: "17 marzo 2024",
      fecha_fin: "17 marzo 2024",
      cantidad: 5,
      lugar: "La hermosa",
      tipo: "Ponente",
    },
  ];

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <div className="btn-vs-evento-aprendiz">
              <BotonReturn icon={<GiReturnArrow />} />
            </div>
            <Search icon={<FaSearch />} text={"Buscar Evento"} />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-event-table-instructor">
            <thead>
              <tr className="vis-event-table-aprendiz__tr">
                <th className="vis-event-table-aprendiz__th">Nombre </th>
                <th className="vis-event-table-aprendiz__th">
                  Fecha de Inicio
                </th>
                <th className="vis-event-table-aprendiz__th">Fecha de Fin</th>
                <th className="vis-event-table-aprendiz__th">
                  Cantidad de Participantes
                </th>
                <th className="vis-event-table-aprendiz__th">Lugar</th>
                <th className="vis-event-table-aprendiz__th">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {Evento.map((Contenido, index) => (
                <tr className="vis-event-table-aprendiz__tr" key={index}>
                  <td className="vis-event-table-aprendiz__td">
                    {" "}
                    {Contenido.nombre}
                  </td>
                  <td className="vis-event-table-aprendiz__td">
                    {" "}
                    {Contenido.fecha_inicio}{" "}
                  </td>
                  <td className="vis-event-table-aprendiz__td">
                    {" "}
                    {Contenido.fecha_fin}{" "}
                  </td>
                  <td className="vis-event-table-aprendiz__td">
                    {" "}
                    {Contenido.cantidad}{" "}
                  </td>
                  <td className="vis-event-table-aprendiz__td">
                    {" "}
                    {Contenido.lugar}{" "}
                  </td>
                  <td className="vis-event-table-aprendiz__td">
                    {" "}
                    {Contenido.tipo}{" "}
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

export default Visualizar_Evento_apr_invg;
