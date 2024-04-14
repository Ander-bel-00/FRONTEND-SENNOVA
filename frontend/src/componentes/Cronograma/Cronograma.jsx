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
  const [events, setEvents] = useState([]);

  return (
    <div className="Cronograma-box">
      <div className="Cronograma-box__calendar-container">
        <Calendar 
          localizer={localizer}
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
