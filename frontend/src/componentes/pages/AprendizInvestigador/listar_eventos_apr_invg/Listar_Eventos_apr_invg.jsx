import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment, useEffect, useState } from "react";
import { LiaEye } from "react-icons/lia";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import "./css/Listar_Eventos_apr_invg.css";
import clienteAxios from "../../../../config/axios";
import * as XLSX from "xlsx";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

function Listar_Eventos_apr_invg() {
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

  const handleFilter = (query) => {
    const filtered = ListEventos.filter(
      (event) =>
        event.nombre_evento.toLowerCase().includes(query.toLowerCase()) ||
        event.tipo_de_evento.toLowerCase().includes(query.toLowerCase()) ||
        event.nombre_ponente.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre",
        "Tipo de Evento",
        "Fecha de Inicio",
        "Fecha de Fin",
        "Cantidad participantes",
        "Ponente",
        "lugar",
        "Semillero",
        "Evidencia del Evento",
      ],
      ...ListEventos.map((evento) => [
        evento.nombre_evento,
        evento.tipo_de_evento,
        evento.fecha_inicio,
        actividad.fecha_fin,
        evento.cantidad_parcticipantes,
        actividad.responsable_actividad,
        evento.nombre_ponente,
        evento.lugar_evento,
        evento.semillero,
        evento.evidencia,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 30 },
      { width: 30 },
      { width: 20 },
      { width: 20 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 40 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Eventos");
    XLSX.writeFile(wb, "eventos.xlsx");
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
              onClick={exportToExcel}
            />
            <BotonBlanco
              icon={<LuCalendarDays />}
              text={"Ir al Cronograma"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
              link={"../cronograma"}
            />
            <Search
              text={"Buscar Eventos"}
              onFilter={handleFilter}
              data={ListEventos}
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
                FilteredEvents.map((evento) => (
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
                    {semilleroInfo[evento.semillero]}
                    </td>
                    <td className="list-events-table__td-admin">
                      {evento.evidencia}
                    </td>
                    <td className="list-events-table__td-admin">
                      <div className="list-events-table__td__btns-admin">
                        <Link to={`../visualizar-evento/${evento.id}`}>
                          <LiaEye className="list-events-table__td__btn-admin" />
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

export default Listar_Eventos_apr_invg;