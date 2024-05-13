import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Caja_Blanca from "../../common/Caja_Blanca";
import Header_ToolBar from "../../common/Header_ToolBar";
import BotonVerdeAñadir from "../../common/BotonVerde";
import Search from "../../common/Search";
import BotonReturn from "../../common/BotonReturn";
import "./css/Visualizar_Evento.css";

function Visualizar_Evento() {
  const Evento = [
    {
      nombre: "Carlos",
      fecha_inicio: "17 marzo 2024",
      fecha_fin: "17 marzo 2024",
      cantidad: 5,
      lugar: "La hermosa",
      tipo: "Ponente",
    },
    {
      nombre: "Carlos",
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
            <div className="btn-vs-evento">
              <BotonReturn icon={<GiReturnArrow />} />
            </div>
            <Search icon={<FaSearch />} text={"Buscar Evento"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear Evento"}
              link={"/lider_semillero/Crear-eventos"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-event-table">
            <thead>
              <tr className="vis-event-table__tr">
                <th className="vis-event-table__th">Nombre </th>
                <th className="vis-event-table__th">Tipo de Evento</th>
                <th className="vis-event-table__th">Fecha Inicio</th>
                <th className="vis-event-table__th">Fecha Fin</th>
                <th className="vis-event-table__th">Cantidad Participantes</th>
                <th className="vis-event-table__th">Ponente</th>
                <th className="vis-event-table__th">Lugar</th>
                <th className="vis-event-table__th">Semillero</th>
                <th className="vis-event-table__th">Evidencia del Evento</th>
                <th className="vis-event-table__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Evento.map((Contenido, index) => (
                <tr className="vis-event-table__tr" key={index}>
                  <td className="vis-event-table__td"> {Contenido.nombre}</td>
                  <td className="vis-event-table__td">
                    {" "}
                    {Contenido.tipo_de_evento}{" "}
                  </td>
                  <td className="vis-event-table__td">
                    {" "}
                    {Contenido.fecha_inicio}{" "}
                  </td>
                  <td className="vis-event-table__td">
                    {" "}
                    {Contenido.fecha_fin}{" "}
                  </td>
                  <td className="vis-event-table__td"> {Contenido.cantidad} </td>
                  <td className="vis-event-table__td"> {Contenido.ponente} </td>
                  <td className="vis-event-table__td"> {Contenido.lugar} </td>
                  <td className="vis-event-table__td"> {Contenido.semilero} </td>
                  <td className="vis-event-table__td"> {Contenido.evidencia} </td>
                  <td className="vis-event-table__td">
                    <div className="vis-actividad-table__td__btns">
                      <Link to={"/lider_semillero/Actualizar-eventos"}>
                        <FaRegEdit className="vis-actividad-table__td__btn" />
                      </Link>
                      <Link>
                        <IoTrashOutline className="vis-actividad-table__td__btn" />
                      </Link>
                    </div>
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

export default Visualizar_Evento;
