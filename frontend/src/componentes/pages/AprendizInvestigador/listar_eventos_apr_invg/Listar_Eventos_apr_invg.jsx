import { BiSolidReport } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { Fragment } from "react";
import { FaEdit } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import "./css/Listar_Eventos_apr_invg.css";

function Listar_Eventos_apr_invg() {
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
            <BotonBlanco icon={<BiSolidReport />} text={"Reporte"} />
            <BotonBlanco icon={<LuCalendarDays />} text={"Ir a Cronograma"} />
            <Search text={"Buscar Eventos"} />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-events-table-aprendiz">
            <thead>
              <tr className="list-events-table-aprendiz__tr">
                <th className="list-events-table-aprendiz__th">Nombre</th>
                <th className="list-events-table-aprendiz__th">Fecha Inicio</th>
                <th className="list-events-table-aprendiz__th">Fecha Fin</th>
                <th className="list-events-table-aprendiz__th">
                  Cantidad Participantes
                </th>
                <th className="list-events-table-aprendiz__th">Lugar</th>
                <th className="list-events-table-aprendiz__th">Tipo</th>
                <th className="list-events-table-aprendiz__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Events.map((evento, index) => (
                <tr className="list-events-table-aprendiz__tr" key={index}>
                  <td className="list-events-table-aprendiz__td">{evento.nombre}</td>
                  <td className="list-events-table-aprendiz__td">{evento.fecha_inicio}</td>
                  <td className="list-events-table-aprendiz__td">{evento.fecha_fin}</td>
                  <td className="list-events-table-aprendiz__td">
                    {evento.cantidad_participantes}
                  </td>
                  <td className="list-events-table-aprendiz__td">{evento.lugar}</td>
                  <td className="list-events-table-aprendiz__td">{evento.tipo_evento}</td>
                  <td className="list-events-table-aprendiz__td">

                    <div className="list-events-table-aprendiz__td__btns">
                      <Link to={"/aprendiz-investigador/Visualizar-evento"} >
                        <LiaEye className="list-events-table-aprendiz__td__btn" />
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

export default Listar_Eventos_apr_invg;