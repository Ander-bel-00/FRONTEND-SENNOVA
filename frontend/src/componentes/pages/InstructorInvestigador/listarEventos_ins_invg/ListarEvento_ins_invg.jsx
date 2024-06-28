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
import Swal from "sweetalert2";

function ListarEvento_ins_invg() {
  const [listarEventos, setListarEventos] = useState([]);
  const [filtrarEventos, setFiltrarEventos] = useState([]);
  const [informacionSemillero, setInformacionSemillero] = useState({});

  useEffect(() => {
    // useEffect, es un hook de react función que permite realizar un efecto una vez
    //el componente se haya renderizado o cargado en el navegador. Es decir realizar lo que tiene adentro
    const getEventoSemillero = async () => {
      try {
        //Intento
        const response = await clienteAxios.get("/eventos/");
        const events = response.data;
        setListarEventos(events); // res(respuesta) y se guarda o actualiza en la bases de datos
        setFiltrarEventos(events);

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

        setInformacionSemillero(semilleroMap);
      } catch (error) {
        //Fallo
        console.error("Error al obtener los eventos del semillero: ", error);
      }
    };
    getEventoSemillero(); // función que indica iniciar todo, es decir obtener las actividades
  }, []);

  const suspenderLosEventos = async (eventosId) => {
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
        await clienteAxios.delete(`/eventos/${eventosId}/`);
        Swal.fire({
          title: "Evento suspendido",
          text: "El Evento ha sido suspendido exitosamente.",
          icon: "success",
        });
        setListarEventos((prev) => prev.filter((evento) => evento.id !== eventosId));
        setFiltrarEventos((prev) => prev.filter((evento) => evento.id !== eventosId));
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
    const filtered = listarEventos.filter(
      (event) =>
        event.nombre_evento.toLowerCase().includes(query.toLowerCase()) ||
        event.tipo_de_evento.toLowerCase().includes(query.toLowerCase()) ||
        event.nombre_ponente.toLowerCase().includes(query.toLowerCase())
    );
    setFiltrarEventos(filtered);
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <BotonBlanco
              icon={<FaFileArrowUp />}
              text={"Reporte"}
              clase={'btn-blanco btn-blanco--modify btn-verde'}
            />

            <BotonBlanco
              icon={<LuCalendarDays />}
              text={"Ir al Cronograma"}
              clase={'btn-blanco btn-blanco--modify btn-azul'}
            />

            <Search
              text={"Buscar Eventos"}
              onFilter={handleFilter}
              data={listarEventos}
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
          <table className="list-events-table-instructor">
            <thead>
              <tr className="list-events-table-instructor__tr">
                <th className="list-events-table-instructor__th">Nombre</th>
                <th className="list-events-table-instructor__th">Tipo de Evento</th>
                <th className="list-events-table-instructor__th">Fecha Inicio</th>
                <th className="list-events-table-instructor__th">Fecha Fin</th>
                <th className="list-events-table-instructor__th">Cantidad Participantes</th>
                <th className="list-events-table-instructor__th">Ponente</th>
                <th className="list-events-table-instructor__th">Lugar</th>
                <th className="list-events-table-instructor__th">Semillero</th>
                <th className="list-events-table-instructor__th">Evidencia del Evento</th>
                <th className="list-events-table-instructor__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtrarEventos.length > 0 ? (
                filtrarEventos.map((evento) => (
                  <tr className="list-events-table-instructor__tr" key={evento.id}>
                    <td className="list-events-table-instructor__td">{evento.nombre_evento}</td>
                    <td className="list-events-table-instructor__td">{evento.tipo_de_evento}</td>
                    <td className="list-events-table-instructor__td">{evento.fecha_inicio}</td>
                    <td className="list-events-table-instructor__td">{evento.fecha_fin}</td>
                    <td className="list-events-table-instructor__td">{evento.cantidad_parcticipantes}</td>
                    <td className="list-events-table-instructor__td">{evento.nombre_ponente}</td>
                    <td className="list-events-table-instructor__td">{evento.lugar_evento}</td>
                    <td className="list-events-table-instructor__td">{informacionSemillero[evento.semillero]}</td>
                    <td className="list-events-table-instructor__td">{evento.evidencia}</td>
                    <td className="list-events-table-instructor__td">

                      <div className="list-events-table-instructor__td__btns">
                        <Link to={`../visualizar-evento/`}>   {/* falta el id del evento */}
                          <LiaEye className="list-events-table-instructor__td__btn" />
                        </Link>
                        <Link to={`../actualizar-eventos/${evento.id}`}>
                          <FaRegEdit className="list-events-table-instructor__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="list-events-table-instructor__td__btn" onClick={() => suspenderLosEventos(evento.id)} />
                        </Link>
                      </div>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10}>
                    <p className="text-center mt-20 font-bold">No se han encontrado eventos</p>
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

export default ListarEvento_ins_invg;
