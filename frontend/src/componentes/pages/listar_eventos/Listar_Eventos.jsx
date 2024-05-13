import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { Fragment, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../common/Header_ToolBar";
import Caja_Blanca from "../../common/Caja_Blanca";
import BotonBlanco from "../../common/BotonReporte";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import "./css/Listar_Eventos.css";
import clienteAxios from "../../../config/axios";


function Listar_Eventos() {
  const [ListEventos, setListEventos] = useState([]);

  useEffect(() => { // useEffect, es un hook de react función que permite realizar un efecto una vez 
    //el componente se haya renderizado o cargado en el navegador. Es decir realizar lo que tiene adentro
    const ObtenerEventoSemillero = async () => {
      try { //Intento 
        const response = await clienteAxios.get('/eventos/')
        setListEventos(response.data); // res(respuesta) y se guarda o actualiza en la bases de datos
      } catch (error) { //Fallo
        console.error("Error al obtener los eventos del semillero: ", error);
      }
    }
    ObtenerEventoSemillero(); // función que indica iniciar todo, es decir obtener las actividades
  }, []); // el efecto nunca va a depender de nada cuando este [] (depende de algo cuando se encuentere el id)


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
                <th className="list-events-table__th">Tipo de Evento</th>
                <th className="list-events-table__th">Fecha Inicio</th>
                <th className="list-events-table__th">
                  Fecha Fin
                </th>
                <th className="list-events-table__th">Cantidad Participantes</th>
                <th className="list-events-table__th">Ponente</th>
                <th className="list-events-table__th">Lugar</th>
                <th className="list-events-table__th">Semillero</th>
                <th className="list-events-table__th">Evidencia del Evento</th>
                <th className="list-events-table__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ListEventos.map((evento) => (
                <tr className="list-events-table__tr" key={evento.id}>
                  <td className="list-events-table__td">{evento.nombre_evento}</td>
                  <td className="list-events-table__td">{evento.tipo_de_evento}</td>
                  <td className="list-events-table__td">{evento.fecha_fin}</td>
                  <td className="list-events-table__td">{evento.cantidad_parcticipantes}</td>
                  <td className="list-events-table__td">{evento.lugar}</td>
                  <td className="list-events-table__td">{evento.nombre_ponente}</td>
                  <td className="list-events-table__td">{evento.lugar_evento}</td>
                  <td className="list-events-table__td">{evento.semillero}</td>
                  <td className="list-events-table__td">{evento.evidencia}</td>
                  <td className="list-events-table__td">
                    <div className="list-events-table__td__btns">
                      <Link to={"../Visualizar-evento"}>
                        <LiaEye className="list-events-table__td__btn" />
                      </Link>
                      <Link to={"../Actualizar-eventos"}>
                        <FaRegEdit className="list-events-table__td__btn" />
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
