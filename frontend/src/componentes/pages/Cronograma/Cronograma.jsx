import React, { useEffect, useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./css/Cronograma.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { useAuth } from '../../../context/AuthContext';
import clienteAxios from "../../../config/axios";


const localizer = momentLocalizer(moment);

const messages = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'dddd', culture),
};

function Cronograma() {
  const { userProfile } = useAuth();
  const [semilleroID, setSemilleroID] = useState(null);
  const [events, setEvents] = useState({
    eventos: [],
    proyectos: [],
    actividades_semillero: []
  });
  const [filtro, setFiltro] = useState('todo');

  useEffect(() => {
    if (userProfile) {
      if (Array.isArray(userProfile.semillero) && userProfile.semillero.length > 0) {
        setSemilleroID(userProfile.semillero[0]);
      } else {
        setSemilleroID(userProfile.semillero);
      }
    }
  }, [userProfile]);

  useEffect(() => {
    const cargarEventos = async () => {
      try {
        if (semilleroID) {
          const res = await clienteAxios.get(`/cronograma-semillero/${semilleroID}`);
          setEvents({
            eventos: res.data.eventos || [],
            proyectos: res.data.proyectos || [],
            actividades_semillero: res.data.actividades_semillero || []
          });
        }
      } catch (error) {
        console.error('Error al Obtener los eventos', error);
      }
    };

    cargarEventos();
  }, [semilleroID]);

  const handleFiltroChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  const transformarEventos = (eventos) => {
    return eventos.map(evento => ({
      id: evento.id, // Asegúrate de tener un id único para cada evento
      title: evento.nombre_evento || evento.nombre_proyecto || evento.nombre_actividad,
      start: moment(evento.fecha_inicio).toDate(), // Convertir a Date con la zona horaria local
      end: evento.fecha_fin ? moment(evento.fecha_fin).toDate() : null, // Convertir a Date si fecha_fin está definida
    }));
  };

  const filtrarEventos = () => {
    switch (filtro) {
      case 'todo':
        return [
          ...transformarEventos(events.eventos),
          ...transformarEventos(events.proyectos),
          ...transformarEventos(events.actividades_semillero)
        ];
      case 'proyectos':
        return transformarEventos(events.proyectos);
      case 'actividades_semillero':
        return transformarEventos(events.actividades_semillero);
      case 'eventos':
        return transformarEventos(events.eventos);
      default:
        return [];
    }
  };

  const obtenerTipoEvento = (evento) => {
    if (events.proyectos.find(proyecto => proyecto.id === evento.id)) {
      return 'Proyecto';
    } else if (events.actividades_semillero.find(actividad => actividad.id === evento.id)) {
      return 'Actividad';
    } else {
      return 'Evento';
    }
  };

  const obtenerContenidoTooltip = (evento) => {
    const tipoEvento = obtenerTipoEvento(evento);
    return `${tipoEvento}: ${evento.title}`;
  };

  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handleEventMouseEnter = (event) => {
    setHoveredEvent(event);
  };

  const handleEventMouseLeave = () => {
    setHoveredEvent(null);
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="Cronograma-box__filtro">
        <button onClick={() => handleFiltroChange('todo')}>Todo</button>
        <button onClick={() => handleFiltroChange('proyectos')}>Proyectos</button>
        <button onClick={() => handleFiltroChange('actividades_semillero')}>Actividades</button>
        <button onClick={() => handleFiltroChange('eventos')}>Eventos</button>
      </div>
      <div className="Cronograma-box__calendar-container">
        <Calendar 
          localizer={localizer}
          events={filtrarEventos()}
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
  );
}

export default Cronograma;
