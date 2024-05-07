import React from 'react'
import './css/Encabezado.css';
import LogoSennova from './img/logo_sennova.jpg';
import CDITI from './img/Cditi.jpg';
import LT_Sena from './img/ltsena.jpg';

function Encabezado() {
  return (
    <>

    {/* Imágenes superiores al encabezado. */}
    <div className="logo">  
        <img src={LogoSennova} alt=""/> 
    </div>
    
    <div className='logo2'>
         <img src={CDITI} alt=""/>
    </div>

    <div className='logo3'>
         <img src={LT_Sena} alt=""/>
    </div>

    <br/>
    <br/>
    <br/>

    <header className="header">

        <a className="btn" href="#ingreso"><button><strong>Ingresar</strong></button></a>
        <a className="btn" href="#semilleros-cont"><button><strong>Semilleros</strong></button></a>
        <a className="btn" href="#objective"><button><strong>Objetivos</strong></button></a>
        <a className="btn" href="#teinnova"><button><strong>TEINNOVA</strong></button></a>
        
    </header>


    </>
  )
}

export default Encabezado
