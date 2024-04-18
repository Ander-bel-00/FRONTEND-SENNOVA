import React from 'react';
import './css/Caja_Blanca.css';

function Caja_Blanca({content}) {
  return (
    <div className='caja-blanca'>
        {content}
    </div>
  )
}

export default Caja_Blanca;