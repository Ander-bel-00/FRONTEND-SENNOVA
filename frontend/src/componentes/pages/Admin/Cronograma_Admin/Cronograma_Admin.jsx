import React, { Fragment, useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./css/Cronograma_Admin.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import Modal from "react-modal";

const localizer = momentLocalizer(moment);

const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, "dddd", culture),
};

function Cronograma_Admin() {
  const [semilleros, setSemilleros] = useState([]);
  const [selectedSemilleroID, setSelectedSemilleroID] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [events, setEvents] = useState({
    eventos: [],
    proyectos: [],
    actividades_semillero: [],
  });
  const [filtro, setFiltro] = useState("todo");

  const handleFiltroChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  const transformarEventos = (eventos) => {
    return eventos.map((evento) => {
      const eventoTransformado = {
        id: evento.id,
        title:
          evento.nombre_evento ||
          evento.nombre_proyecto ||
          evento.nombre_actividad,
        start: moment(evento.fecha_inicio).toDate(), // Usar fecha de inicio del evento
        end: evento.fecha_fin ? moment(evento.fecha_fin).toDate() : null, // Usar fecha de fin si está definida
      };
      return eventoTransformado;
    });
  };
  
  

  const filtrarEventos = () => {
    switch (filtro) {
      case "todo":
        return [
          ...transformarEventos(events.eventos),
          ...transformarEventos(events.proyectos),
          ...transformarEventos(events.actividades_semillero),
        ];
      case "proyectos":
        return transformarEventos(events.proyectos);
      case "actividades_semillero":
        return transformarEventos(events.actividades_semillero);
      case "eventos":
        return transformarEventos(events.eventos);
      default:
        return [];
    }
  };

  useEffect(() => {
    const obtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get("/lista-semilleros/");
        setSemilleros(res.data);
      } catch (error) {
        console.error("Error al obtener los semilleros", error);
      }
    };

    obtenerSemilleros();
  }, []);

  useEffect(() => {
    const cargarEventos = async () => {
      try {
        if (selectedSemilleroID) {
          const res = await clienteAxios.get(`/cronograma-semillero/${selectedSemilleroID}`);
          console.log("Datos recibidos:", res.data); // Verifica los datos recibidos aquí
          setEvents({
            eventos: res.data.eventos || [],
            proyectos: res.data.proyectos || [],
            actividades_semillero: res.data.actividades_semillero || []
          });
        }
      } catch (error) {
        console.error('Error al obtener los eventos del semillero', error);
      }
    };
  
    cargarEventos();
  }, [selectedSemilleroID]);
  
  

  const handleSelectSemillero = (id) => {
    setSelectedSemilleroID(id);
    setIsModalOpen(false);
  };

  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handleEventMouseEnter = (event) => {
    setHoveredEvent(event);
  };

  const handleEventMouseLeave = () => {
    setHoveredEvent(null);
  };

  const obtenerTipoEvento = (evento) => {
    if (events.proyectos.find((proyecto) => proyecto.id === evento.id)) {
      return "Proyecto";
    } else if (
      events.actividades_semillero.find(
        (actividad) => actividad.id === evento.id
      )
    ) {
      return "Actividad";
    } else {
      return "Evento";
    }
  };

  const obtenerContenidoTooltip = (evento) => {
    const tipoEvento = obtenerTipoEvento(evento);
    return `${tipoEvento}: ${evento.title}`;
  };

  return (
    <Fragment>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          if (selectedSemilleroID) {
            setIsModalOpen(false);
          }
        }}
        className="modal-admin-semilleros"
        overlayClassName="modal-overlay"
      >
        <h2>Seleccione un Semillero</h2>
        <ul>
          {semilleros.map((semillero) => (
            <li
              key={semillero.id}
              onClick={() => handleSelectSemillero(semillero.id)}
            >
              {semillero.nombre_semillero}
            </li>
          ))}
        </ul>
      </Modal>
      <div className="main-container__contenedor-hijo">
        <div className="Cronograma-box__filtro">
          <button onClick={() => handleFiltroChange("todo")}>Todo</button>
          <button onClick={() => handleFiltroChange("proyectos")}>
            Proyectos
          </button>
          <button onClick={() => handleFiltroChange("actividades_semillero")}>
            Actividades
          </button>
          <button onClick={() => handleFiltroChange("eventos")}>Eventos</button>
        </div>
        <div className="Cronograma-box__calendar-container">
          <Calendar
            localizer={localizer}
            events={filtrarEventos()} // Asegúrate de que filtrarEventos devuelve un array de eventos válidos
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            className="calendar"
            tooltipAccessor={obtenerContenidoTooltip}
            onMouseOverEvent={handleEventMouseEnter}
            onMouseOutEvent={handleEventMouseLeave}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Cronograma_Admin;
