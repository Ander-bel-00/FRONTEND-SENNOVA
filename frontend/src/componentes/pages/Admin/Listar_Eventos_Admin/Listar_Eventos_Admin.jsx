import { LuCalendarDays } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { Fragment } from "react";
import { FaEdit } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFileArrowUp } from "react-icons/fa6";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import "./css/Listar_Eventos_Admin.css";

function Listar_Eventos_Admin() {
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
            <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} />
            <BotonBlanco icon={<LuCalendarDays />} text={"Ir al Cronograma"} clase={'btn-blanco btn-blanco--modify btn-azul'} />
            <Search text={"Buscar Eventos"} />
            <BotonVerdeAñadir icon={<IoAdd />} text={"Crear evento"} link={"/admin/crear-eventos"}/>
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-events-table-admin">
            <thead>
              <tr className="list-events-table__tr-admin">
                <th className="list-events-table__th-admin">Nombre</th>
                <th className="list-events-table__th-admin">Fecha Inicio</th>
                <th className="list-events-table__th-admin">Fecha Fin</th>
                <th className="list-events-table__th-admin">
                  Cantidad Participantes
                </th>
                <th className="list-events-table__th-admin">Lugar</th>
                <th className="list-events-table__th-admin">Tipo</th>
                <th className="list-events-table__th-admin">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Events.map((evento, index) => (
                <tr className="list-events-table__tr-admin" key={index}>
                  <td className="list-events-table__td-admin">{evento.nombre}</td>
                  <td className="list-events-table__td-admin">{evento.fecha_inicio}</td>
                  <td className="list-events-table__td-admin">{evento.fecha_fin}</td>
                  <td className="list-events-table__td-admin">
                    {evento.cantidad_participantes}
                  </td>
                  <td className="list-events-table__td-admin">{evento.lugar}</td>
                  <td className="list-events-table__td-admin">{evento.tipo_evento}</td>
                  <td className="list-events-table__td-admin">

                    <div className="list-events-table__td__btns-admin">
                      <Link to={"/admin/visualizar-evento"} >
                        <LiaEye className="list-events-table__td__btn-admin" />
                      </Link>
                      <Link to={"/admin/actualizar-eventos"} >
                        <FaEdit className="list-events-table__td__btn-admin" />
                      </Link>
                      <Link>
                        <IoTrashOutline className="list-events-table__td__btn-admin" />
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

export default Listar_Eventos_Admin;