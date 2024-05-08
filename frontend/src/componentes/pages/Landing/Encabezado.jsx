import React, { useEffect, useState } from 'react'
import './css/Encabezado.css';
// import LogoSennova from './img/logo-sennova.svg';
import LogoSennova from './img/sennova-logo.png';
import CDITI from './img/CDITI.png';
import LT_Sena from './img/sena-logo.svg';
import logo_app from './img/logo-app.svg';
import sennova from './img/sennova.svg';
import { Link } from 'react-router-dom';
function Encabezado() {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsMenuFixed(scrollTop > 70); // Ajusta el punto en el que el menú se fija
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>

      <header className="header">

      {isMenuFixed ? null : (
        <section className='header__logos'>
          <img className='header__sennova' src={sennova} alt="" />

          <img className='header__img-sena' src={LT_Sena} alt="" />
          <div className='header-imgs'>
            <img className='header__img-sennova' src={LogoSennova} alt="" />
            <img className='header__img-cditi' src={CDITI} alt="" />
            </div>
        </section>
      )}

        <nav className={`menu ${isMenuFixed ? 'menu-nav--fixed' : ''}`}>
          <img style={{width:"14rem"}} src={logo_app}></img>
          <section className='section-opciones'>
          <a className="menu-btn" href="#">Inicio</a>
          <a className="menu-btn" href="#semilleros">Semilleros</a>
          <a className="menu-btn" href="#objetivos">Objetivos SENNOVA</a>
          <a className="menu-btn" href="#teinnova">Conoce a TEINNOVA</a>
          <a className="menu-btn" href="#creadores">Nuestros Creadores</a>
          <Link className="menu-btn btn--ingresar" to="/login">Ingresar</Link>

          </section>
          
        </nav>

      </header>





    </>
  )
}

export default Encabezado
