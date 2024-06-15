import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment, useEffect, useState } from "react";
import { LiaEye } from "react-icons/lia";
import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import "./css/ListarEvento_ins_invg.css";
import clienteAxios from "../../../../config/axios";
import { FaRegEdit } from "react-icons/fa";

function ListarEvento_ins_invg() {
  const [eventosListar, setEventosListar] = useState([]);

  useEffect(() => { 
    const ObtenerEventoSemillero = async () => {
      try {
        const response = await clienteAxios.get('/eventos/')
        setEventosListar(response.data); 
      } catch (error) {
        console.error("Error al obtener los eventos del semillero: ", error);
      }
    }
    ObtenerEventoSemillero(); 
  }, []); 

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} />
            <BotonBlanco icon={<LuCalendarDays />} text={"Ir al Cronograma"} clase={'btn-blanco btn-blanco--modify btn-azul'} />
            <Search text={"Buscar Eventos"} />
            <BotonVerdeAñadir icon={<IoAdd />} text={"Crear evento"} link={"../crear-eventos"}/>
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-events-table-admin">
            <thead>
              <tr className="list-events-table__tr-admin">
                <th className="list-events-table__th-admin">Nombre</th>
                <th className="list-events-table__th-admin">Tipo de Evento</th>
                <th className="list-events-table__th-admin">Fecha Inicio</th>
                <th className="list-events-table__th-admin">Fecha Fin</th>
                <th className="list-events-table__th-admin">Cantidad Participantes</th>
                <th className="list-events-table__th-admin">Ponente</th>
                <th className="list-events-table__th-admin">Lugar</th>
                <th className="list-events-table__th-admin">Semillero</th>
                <th className="list-events-table__th-admin">Evidencia del Evento</th>
                <th className="list-events-table__th-admin">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {eventosListar.map((evento) => (
                <tr className="list-events-table__tr-admin" key={evento.id}>
                  <td className="list-events-table__td-admin">{evento.nombre_evento}</td>
                  <td className="list-events-table__td-admin">{evento.tipo_de_evento}</td>
                  <td className="list-events-table__td-admin">{evento.fecha_inicio}</td>
                  <td className="list-events-table__td-admin">{evento.fecha_fin}</td>
                  <td className="list-events-table__td-admin">{evento.cantidad_parcticipantes}</td>
                  <td className="list-events-table__td-admin">{evento.nombre_ponente}</td>
                  <td className="list-events-table__td-admin">{evento.lugar_evento}</td>
                  <td className="list-events-table__td-admin">{evento.semillero}</td>
                  <td className="list-events-table__td-admin">{evento.evidencia}</td>
                  <td className="list-events-table__td-admin">
                  
                    <div className="list-events-table__td__btns-admin">
                    <Link to={`../visualizar-evento/`}> {/* falta el id del evento */}
                        <LiaEye className="list-events-table__td__btn-admin" />
                      </Link>
                      <Link to={`../actualizar-eventos/`}> {/* falta el id del evento */}
                        <FaRegEdit className="list-events-table__td__btn-admin" />
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

export default ListarEvento_ins_invg;
