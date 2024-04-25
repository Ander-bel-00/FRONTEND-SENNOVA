import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { Fragment } from "react";
import { FaEdit } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../common/Header_ToolBar";
import Caja_Blanca from "../../common/Caja_Blanca";
import BotonBlanco from "../../common/BotonReporte";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import "./css/Listar_Eventos.css";

function Listar_Eventos() {
  const Events = [
    {
      nombre: "Sofia",
      fecha_inicio: "18 de Abril de 2024",
      fecha_fin: "19 de Abril de 2028",
      cantidad_participantes: 5,
      lugar: "Bogotá",
      tipo_evento: "Ponente",
    },
    {
      nombre: "Sofia",
      fecha_inicio: "18 de Abril de 2024",
      fecha_fin: "19 de Abril de 2028",
      cantidad_participantes: 5,
      lugar: "Bogotá",
      tipo_evento: "Ponente",
    },
  ];

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <BotonBlanco
              icon={<FaFileArrowUp />}
              text={"Reporte"}
              clase={"btn-blanco btn-blanco--modify btn-verde"}
            />
            <BotonBlanco
              icon={<LuCalendarDays />}
              text={"Ir a Cronograma"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
              link={"../cronograma"}
            />
            <Search text={"Buscar Eventos"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear evento"}
              link={"../Crear-eventos"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-events-table">
            <thead>
              <tr className="list-events-table__tr">
                <th className="list-events-table__th">Nombre</th>
                <th className="list-events-table__th">Fecha Inicio</th>
                <th className="list-events-table__th">Fecha Fin</th>
                <th className="list-events-table__th">
                  Cantidad Participantes
                </th>
                <th className="list-events-table__th">Lugar</th>
                <th className="list-events-table__th">Tipo</th>
                <th className="list-events-table__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Events.map((evento, index) => (
                <tr className="list-events-table__tr" key={index}>
                  <td className="list-events-table__td">{evento.nombre}</td>
                  <td className="list-events-table__td">
                    {evento.fecha_inicio}
                  </td>
                  <td className="list-events-table__td">{evento.fecha_fin}</td>
                  <td className="list-events-table__td">
                    {evento.cantidad_participantes}
                  </td>
                  <td className="list-events-table__td">{evento.lugar}</td>
                  <td className="list-events-table__td">
                    {evento.tipo_evento}
                  </td>
                  <td className="list-events-table__td">
                    <div className="list-events-table__td__btns">
                      <Link to={"../Visualizar-evento"}>
                        <LiaEye className="list-events-table__td__btn" />
                      </Link>
                      <Link to={"../Actualizar-eventos"}>
                        <FaEdit className="list-events-table__td__btn" />
                      </Link>
                      <Link>
                        <IoTrashOutline className="list-events-table__td__btn" />
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

export default Listar_Eventos;
