import React from 'react'
import './css/Landing_ofi.css';
import Imagen_Teinnova from './img/teinnova.jpg';
import Circulo_Sennova from './img/duo_senn.jpg';
import Imagen_Uno from './img/pagina_princi.jpg';
import Gif from './img/buscar_5.gif';
import Tei_Azul from './img/tei_az.jpg';
import Cards from './Cards/Cards';
import Encabezado from './Encabezado';
import Footer from './Pie_de_pagina';
import Creadores from './Creadores';
import btn_flotante from './btn_flotante';


function Landing_ofi() {
    return (
        <div className='main-page'>
            <Encabezado />


            {/* Bloque 1 */}
            <img className='imagen_teinnova ' src={Imagen_Teinnova} alt="" />

            <div className='main-page__container-ingreso'>
                <div className='container-ficha-ingreso'>
                    <div className='container-ficha-ingreso__content'>
                        <h2>SENNOVA <br /> <br />Sistema de Investigación, <br /> Desarrollo Tecnológico e Innovación</h2> <br />
                        <p>Fortaleciendo capacidades locales en <br /> productividad, competitividad, <br /> generación de conocimiento y <br /> pertinencia de la Formación Profesional <br /> Integral Impartida</p>
                        <a className="btn btn--big" href="#"><button>Ingresar</button></a>

                    </div>
                </div>
                <div className='imgWrapper'> <img src={Circulo_Sennova} alt="" /></div>
            </div>

            {/* Se hace el llamado del componente Cards */}
            <Cards />
            {/* Bloque 2 */}
            <div className='content-que-semilleros'>
             


                <div className='row_2'>
                    <div className='imgWrapper_2'><img src={Imagen_Uno} alt="" />
                    <h2>¿QUÉ SON LOS SEMILLEROS <br></br> DE INVESTIGACIÓN?</h2>
                    </div>
                 
                    {/* <img className='Gif' src={Gif} alt="" /> */}

                
               
                </div>
                
                    <p className='parrafo_semillero'>Un semillero de investigación en el Sena, al igual que en cualquier otra institución de educación,
                        se entiende como un espacio para el desarrollo de las habilidades prácticas investigativas. En él, se espera
                        que tanto los instructores como los aprendices construyan conocimiento basado en la solución
                        de problemas reales, particulares a su entorno y generen propuestas  de cambio y mejoramiento en múltiples dimensiones,
                        bien sean sociales, científicas, técnicas y/o tecnológicas.  </p>
               
                <br />
                <br />
                {/* Bloque 3 */}
            </div>
            <div className='info_objetivo_senn'>
                <h1><strong>OBJETIVO SENNOVA</strong></h1><br />
                <p>SENNOVA adelanta iniciativas que impulsan el programa de desarrollo tecnológico a través de las líneas programáticas generando capacidades de Ciencia, Tecnología e Innovación en los Centros de Formación como estrategia para impactar y resolver las necesidades inmediatas del sector productivo y en las regiones del país.</p>
            </div>
            <br />
            <br />

            {/* Bloque 4 */}

            <div className='row_3'>
                <div className='contentWrapper_3'>
                    <div className='content_3'>
                        <h2>Grupo de investigación TEINNOVA<br />
                            Centro de Diseño e Innovación<br /> Tecnológica Industrial</h2> <br /><br />
                        <p>El grupo de Investigación TEINNOVA-CDITI, ha sido el resultado de la construcción colectiva, de un sin número de actores entre los que se cuentan, instructores, aprendices, que con sus aportes académicos, desarrollos tecnológicos, desde el año 2016 han permitido categorizar el grupo de investigación por Colciencias.</p>
                    </div>
                </div>
                <div className='imgWrapper_2'>
                    <img src={Tei_Azul} alt="" />
                </div>

            </div>

            {/* Se hace el llamado del componente Creadores. */}

       <Creadores/>
       
                {/* Este componente está pendiente. */}
        
            {/* Se hace el llamado del componente pie de página. */}
        <Footer />

        </div>
        
    )
}

export default Landing_ofi
