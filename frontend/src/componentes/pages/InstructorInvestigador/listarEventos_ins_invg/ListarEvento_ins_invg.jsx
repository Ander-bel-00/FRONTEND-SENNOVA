import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment } from "react";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import "./css/ListarEvento_ins_invg.css";

function ListarEvento_ins_invg() {
  const Events = [
    {
      nombre: "Mariana",
      fecha_inicio: "18 de Abril de 2024",
      fecha_fin: "19 de Abril de 2028",
      cantidad_participantes: 5,
      lugar: "Bogotá",
      tipo_evento: "Asistente",
    },
    {
      nombre: "Mariana",
      fecha_inicio: "18 de Abril de 2024",
      fecha_fin: "19 de Abril de 2028",
      cantidad_participantes: 5,
      lugar: "Bogotá",
      tipo_evento: "Asistente",
    },
  ];

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'}/>
            <BotonBlanco icon={<LuCalendarDays />} text={"Ir a Cronograma"} clase={'btn-blanco btn-blanco--modify btn-azul'} />
            <Search text={"Buscar Eventos"} />
            <BotonVerdeAñadir icon={<IoAdd />} text={"Añadir Información"} link={"/instructor-investigador/Crear-eventos"}/>
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-events-table-instructor">
            <thead>
              <tr className="list-events-table-instructor__tr">
                <th className="list-events-table-instructor__th">Nombre</th>
                <th className="list-events-table-instructor__th">Fecha Inicio</th>
                <th className="list-events-table-instructor__th">Fecha Fin</th>
                <th className="list-events-table-instructor__th">
                  Cantidad Participantes
                </th>
                <th className="list-events-table-instructor__th">Lugar</th>
                <th className="list-events-table-instructor__th">Tipo</th>
                <th className="list-events-table-instructor__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Events.map((evento, index) => (
                <tr className="list-events-table-instructor__tr" key={index}>
                  <td className="list-events-table-instructor__td">{evento.nombre}</td>
                  <td className="list-events-table-instructor__td">{evento.fecha_inicio}</td>
                  <td className="list-events-table-instructor__td">{evento.fecha_fin}</td>
                  <td className="list-events-table-instructor__td">
                    {evento.cantidad_participantes}
                  </td>
                  <td className="list-events-table-instructor__td">{evento.lugar}</td>
                  <td className="list-events-table-instructor__td">{evento.tipo_evento}</td>
                  <td className="list-events-table-instructor__td">

                    <div className="list-events-table-instructor__td__btns">
                      <Link to={"/instructor-investigador/Visualizar-evento"} >
                        <LiaEye className="list-events-table-instructor__td__btn" />
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

export default ListarEvento_ins_invg;
