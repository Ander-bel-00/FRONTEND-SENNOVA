import React, { Fragment, useState } from 'react'; 
import './css/Botontrimestres.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const Botontrimestres = ({text, link, icon}) => {
  const [showTrimestres, setShowTrimestres] = useState(false);

  const handleToggle = () => {
    setShowTrimestres(!showTrimestres);
  };

  return (
    <Fragment>
        <div className='boton-trimestres-container'>
          <div className='boton-trimestres' onClick={handleToggle}>
            {text}
            {icon}
          </div>
          {showTrimestres && (
          <div className='trimestres-container'>
            <Link to={`/trimestre-I`} className='trimestre'>Trimestre I</Link>
            <Link to={`/trimestre-II`} className='trimestre'>Trimestre II</Link>
            <Link to={`/trimestre-III`} className='trimestre'>Trimestre III</Link>
            <Link to={`/trimestre-IV`} className='trimestre'>Trimestre IV</Link>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Botontrimestres
