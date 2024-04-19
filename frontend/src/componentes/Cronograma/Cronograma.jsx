import React, { useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./css/Cronograma.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

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
  moment.locale('es');
  const [events, setEvents] = useState([
    {
      title: 'Evento 1',
      start: new Date(2024, 3, 15, 10, 0), // Hora de inicio del evento
      end: new Date(2024, 3, 15, 12, 0), // Hora de finalización del evento
      fecha: new Date(2024, 3, 15), // Fecha del evento
      type: 'evento'
    },
    {
      title: 'Actividad 1',
      start: new Date(2024, 3, 15, 14, 0), // Hora de inicio del evento
      end: new Date(2024, 3, 15, 16, 0), // Hora de finalización del evento
      fecha: new Date(2024, 3, 15), // Fecha del evento
      type: 'actividad'
    },
    {
      title: 'Proyecto 1',
      start: new Date(2024, 3, 15, 8, 0), // Hora de inicio del evento
      end: new Date(2024, 3, 15, 18, 0), // Hora de finalización del evento
      fecha: new Date(2024, 3, 15), // Fecha del evento
      type: 'proyecto'
    },
    // Agrega más eventos aquí
  ]);

  const [filtro, setFiltro] = useState('todo');

  const handleFiltroChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  const filtrarEventos = () => {
    if (filtro === 'todo') {
      return events;
    } else {
      return events.filter(evento => evento.type === filtro);
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="Cronograma-box__filtro">
        <button onClick={() => handleFiltroChange('todo')}>Todo</button>
        <button onClick={() => handleFiltroChange('proyecto')}>Proyectos</button>
        <button onClick={() => handleFiltroChange('actividad')}>Actividades</button>
        <button onClick={() => handleFiltroChange('evento')}>Eventos</button>
      </div>
      <div className="Cronograma-box__calendar-container">
        <Calendar 
          localizer={localizer}
          events={filtrarEventos()}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          className="calendar"
        />
      </div>
    </div>
  );
}

export default Cronograma;
