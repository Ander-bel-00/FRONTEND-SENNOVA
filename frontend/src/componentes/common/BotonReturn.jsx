import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './css/BotonReturn.css';
import atras from './img/atras.png';
function BotonReturn({icon, link}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Retrocede una página en el historial
  };
  return (

     <Link to={link}  aria-label="icon" className=" btn-atras"  onClick={handleGoBack}>
     <img src={atras}></img>
     <b>Regresar</b>
   </Link>
  )
}

export default BotonReturn;