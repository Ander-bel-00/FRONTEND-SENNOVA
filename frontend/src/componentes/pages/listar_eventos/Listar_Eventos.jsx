import { LuCalendarDays } from "react-icons/lu";
import { IoTrashOutline } from "react-icons/io5";
import { Fragment, useEffect, useState } from "react";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../common/Header_ToolBar";
import Caja_Blanca from "../../common/Caja_Blanca";
import BotonBlanco from "../../common/BotonReporte";
import Search from "../../common/Search";
import BotonVerdeAñadir from '../../common/BotonVerde';
import "./css/Listar_Eventos.css";
import clienteAxios from "../../../config/axios";
import { FaFileArrowUp } from "react-icons/fa6";
import Swal from "sweetalert2";

function Listar_Eventos() {
  const [ListEventos, setListEventos] = useState([]);
  const [FilteredEvents, setFilteredEvents] = useState([]);
  const [semilleroInfo, setSemilleroInfo] = useState({});

  useEffect(() => {
    // useEffect, es un hook de react función que permite realizar un efecto una vez
    //el componente se haya renderizado o cargado en el navegador. Es decir realizar lo que tiene adentro
    const ObtenerEventoSemillero = async () => {
      try {
        //Intento
        const response = await clienteAxios.get("/eventos/");
        const events = response.data;
        setListEventos(events); // res(respuesta) y se guarda o actualiza en la bases de datos
        setFilteredEvents(events);

        // Obtener información de los semilleros
        const semilleroPromises = events.map(async (event) => {
          const semilleroRes = await clienteAxios.get(
            `/semilleros/${event.semillero}/` 
          );
          return {
            semilleroId: event.semillero,
            nombre_semillero: semilleroRes.data.nombre_semillero,
          };
        });

        const semilleros = await Promise.all(semilleroPromises);
        const semilleroMap = semilleros.reduce((map, semillero) => {
          map[semillero.semilleroId] = semillero.nombre_semillero;
          return map;
        }, {});

        setSemilleroInfo(semilleroMap);
      } catch (error) {
        //Fallo
        console.error("Error al obtener los eventos del semillero: ", error);
      }
    };
    ObtenerEventoSemillero(); // función que indica iniciar todo, es decir obtener las actividades
  }, []); // el efecto nunca va a depender de nada cuando este [] (depende de algo cuando se encuentere el id)



  const suspenderEventos = async (eventId) => {
    try {
      const result = await Swal.fire({
        title: "Estás seguro de suspender el Evento?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, suspender el Evento",
      });

      if (result.isConfirmed) {
        await clienteAxios.delete(`/eventos/${eventId}/`);
        Swal.fire({
          title: "Evento suspendido",
          text: "El Evento ha sido suspendido exitosamente.",
          icon: "success",
        });
        setListEventos((prev) => prev.filter((evento) => evento.id !== eventId));
        setFilteredEvents((prev) => prev.filter((evento) => evento.id !== eventId));
      }
    } catch (error) {
      console.log("Hubo un error al intentar suspender el Evento", error);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Ocurrió un error al intentar suspender el Evento",
      });
    }
  };


  const handleFilter = (query) => {
    const filtered = ListEventos.filter(
      (event) =>
        event.nombre_evento.toLowerCase().includes(query.toLowerCase()) ||
        event.tipo_de_evento.toLowerCase().includes(query.toLowerCase()) ||
        event.nombre_ponente.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

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
              link={"../cronograma"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
            />
            <Search
              text={"Buscar Eventos"}
              onFilter={handleFilter}
              data={ListEventos}
            />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear evento"}
              link={"../crear-eventos"}
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
              {FilteredEvents.length > 0 ? (
                FilteredEvents.map((evento, index) => (
                  <tr className="list-events-table__tr-admin" key={index}>
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
                    {semilleroInfo[evento.semillero]}
                    </td>
                    <td className="list-events-table__td-admin">
                      {evento.evidencia}
                    </td>
                    <td className="list-events-table__td-admin">
                      <div className="list-events-table__td__btns-admin">
                        <Link to={`../visualizar-evento/`}>
                          <LiaEye className="list-events-table__td__btn-admin" />
                        </Link>
                        <Link to={`../actualizar-eventos/`}>
                          <FaRegEdit className="list-events-table__td__btn-admin" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="list-events-table__td__btn-admin" onClick={() => suspenderEventos(evento.id)}/>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>
                    <p className="text-center mt-20 font-bold">
                      No se han encontrado eventos
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        }
      />
    </div>
  );
}

export default Listar_Eventos;