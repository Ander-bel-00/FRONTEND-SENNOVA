import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './css/BotonReturn.css';

function BotonReturn({icon, link}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Retrocede una página en el historial
  };
  return (
    <Link to={link} className='btn-return' onClick={handleGoBack}>
        <p className='btn-return__icon'>{icon}</p>
        <p>Regresar</p>
    </Link>
  )
}

export default BotonReturn;