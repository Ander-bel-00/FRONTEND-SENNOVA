import { LuCalendarDays } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { Fragment, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
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
import clienteAxios from "../../../../config/axios";

function Listar_Eventos_Admin() {
  const [ListEventos, setListEventos] = useState([]);

  useEffect(() => {
    // useEffect, es un hook de react función que permite realizar un efecto una vez
    //el componente se haya renderizado o cargado en el navegador. Es decir realizar lo que tiene adentro
    const ObtenerEventoSemillero = async () => {
      try {
        //Intento
        const response = await clienteAxios.get("/eventos/");
        setListEventos(response.data); // res(respuesta) y se guarda o actualiza en la bases de datos
      } catch (error) {
        //Fallo
        console.error("Error al obtener los eventos del semillero: ", error);
      }
    };
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
              text={"Ir al Cronograma"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
              link={"../cronograma"}
            />
            <Search text={"Buscar Eventos"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear evento"}
              link={"/admin/crear-eventos"}
            />
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
                <th className="list-events-table__th-admin">
                  Cantidad Participantes
                </th>
                <th className="list-events-table__th-admin">Ponente</th>
                <th className="list-events-table__th-admin">Lugar</th>
                <th className="list-events-table__th-admin">Semillero</th>
                <th className="list-events-table__th-admin">
                  Evidencia del Evento
                </th>
                <th className="list-events-table__th-admin">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ListEventos.map((evento) => (
                <tr className="list-events-table__tr-admin" key={evento.id}>
                  <td className="list-events-table__td-admin">
                    {evento.nombre_evento}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.tipo_de_evento}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.fecha_inicio}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.fecha_fin}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.cantidad_parcticipantes}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.nombre_ponente}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.lugar_evento}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.semillero}
                  </td>
                  <td className="list-events-table__td-admin">
                    {evento.evidencia}
                  </td>
                  <td className="list-events-table__td-admin">
                    <div className="list-events-table__td__btns-admin">
                      <Link to={`../visualizar-evento/${evento.id}`}>
                        <LiaEye className="list-events-table__td__btn-admin" />
                      </Link>
                      <Link to={`../actualizar-eventos/${evento.id}`}>
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

export default Listar_Eventos_Admin;