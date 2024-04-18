import React from 'react'
import { Link } from 'react-router-dom';
import './css/BotonReturn.css';

function BotonReturn({icon, link}) {
  return (
    <Link to={link} className='btn-return'>
        <p className='btn-return__icon'>{icon}</p>
    </Link>
  )
}

export default BotonReturn;