import { IoAdd } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Evento_ins_invg.css";
import BotonBlanco from "../../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";

function Visualizar_Evento_ins_invg() {
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
            <div className="btn-vs-evento-instructor">
              <BotonReturn icon={<GiReturnArrow />} />
            </div>

            <BotonBlanco 
            icon={<FaFileArrowUp />} 
            text={"Reporte"} 
            clase={'btn-blanco btn-blanco--modify btn-verde'} />

            <Search 
              icon={<FaSearch />} 
              text={"Buscar Evento"} />

            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Editar Evento"}
              link={"/instructor_investigador/Crear-eventos"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-event-table-instructor">
            <thead>
              <tr className="vis-event-table-instructor__tr">
                <th className="vis-event-table-instructor__th">Nombre </th>
                <th className="vis-event-table-instructor__th">
                  Fecha de Inicio
                </th>
                <th className="vis-event-table-instructor__th">Fecha de Fin</th>
                <th className="vis-event-table-instructor__th">
                  Cantidad de Participantes
                </th>
                <th className="vis-event-table-instructor__th">Lugar</th>
                <th className="vis-event-table-instructor__th">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {Evento.map((Contenido, index) => (
                <tr className="vis-event-table-instructor__tr" key={index}>
                  <td className="vis-event-table-instructor__td">
                    {" "}
                    {Contenido.nombre}
                  </td>
                  <td className="vis-event-table-instructor__td">
                    {" "}
                    {Contenido.fecha_inicio}{" "}
                  </td>
                  <td className="vis-event-table-instructor__td">
                    {" "}
                    {Contenido.fecha_fin}{" "}
                  </td>
                  <td className="vis-event-table-instructor__td">
                    {" "}
                    {Contenido.cantidad}{" "}
                  </td>
                  <td className="vis-event-table-instructor__td">
                    {" "}
                    {Contenido.lugar}{" "}
                  </td>
                  <td className="vis-event-table-instructor__td">
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

export default Visualizar_Evento_ins_invg;
