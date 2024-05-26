import React, { Fragment } from 'react'; 
import './css/Botontrimestres.css';
import { Link } from 'react-router-dom';

const Botontrimestres = ({text, link, icon}) => {
  return (
    <Fragment>
        <Link to={link} className='boton-trimestres'>
            {text}
            {icon}
        </Link>
    </Fragment>
  )
}

export default Botontrimestres
