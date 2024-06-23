import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Evento_Admin.css";

function Visualizar_Evento_Admin() {
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
            <div className="btn-vs-evento-admin">
              <BotonReturn
                link={"/admin/listar-eventos"}
                icon={<IoTrashOutline />}
              />
            </div>
            <Search icon={<FaSearch />} text={"Buscar Evento"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear Evento"}
              link={"/admin/crear-eventos"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-event-table-admin">
            <thead>
              <tr className="vis-event-table__tr-admin">
                <th className="vis-event-table__th-admin">Nombre </th>
                <th className="vis-event-table__th-admin">Tipo de Evento</th>
                <th className="vis-event-table__th-admin">Fecha Inicio</th>
                <th className="vis-event-table__th-admin">Fecha Fin</th>
                <th className="vis-event-table__th-admin">Cantidad Participantes</th>
                <th className="vis-event-table__th-admin">Ponente</th>
                <th className="vis-event-table__th-admin">Lugar</th>
                <th className="vis-event-table__th-admin">Semillero</th>
                <th className="vis-event-table__th-admin">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Evento.map((Contenido, index) => (
                <tr className="vis-event-table__tr-admin" key={index}>
                  <td className="vis-event-table__td-admin"> {Contenido.nombre}</td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.nombre_evento}
                  </td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.tipo_de_evento}{" "}
                  </td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.fecha_inicio}{" "}
                  </td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.fecha_fin}{" "}
                  </td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.cantidad}{" "}
                  </td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.lugar}{" "}
                  </td>
                  <td className="vis-event-table__td-admin">
                    {" "}
                    {Contenido.tipo}{" "}
                  </td>
                  <td className="vis-event-table__td-admin">
                    <div className="vis-actividad-table__td__btns-admin">
                      <Link to={`/admin/actualizar-eventos/${Contenido.id}`}>
                        <FaRegEdit className="vis-actividad-table__td__btn-admin" />
                      </Link>
                      <Link>
                        <IoTrashOutline className="vis-actividad-table__td__btn-admin" />
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

export default Visualizar_Evento_Admin;
