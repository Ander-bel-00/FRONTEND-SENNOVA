import React from 'react'
import './css/Landing_ofi.css';
import Imagen_Teinnova from './img/teinnova.jpg';
import Circulo_Sennova from './img/duo_senn.jpg';
import Imagen_Uno from './img/pagina_princi.jpg';
import Gif from './img/buscar_5.gif';
import Tei_Azul from './img/tei_az.png';
import Cards from './Cards/Cards';
import Encabezado from './Encabezado';
import Footer from './Pie_de_pagina';
import Creadores from './Creadores';
import btn_flotante from './btn_flotante';
import logo_circulo from './img/logo-circulo-sen.webp';
import CreadoresPage from './creadores_page';

import Juan_Carlos from './img/J_Carlos.jpg';
import Yesid from './img/Y_Molina.jpg';
import Ander from './img/A_Beltran_2.jpg';
import J_Raigosa from './img/J_Raigosa.jpg'
import S_valle from './img/S_Valle.jpg'
import { Link } from 'react-router-dom';

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
                        <p className='text-sistema'>Fortaleciendo capacidades locales en productividad, <br /> competitividad,  generación de conocimiento y  <br /> pertinencia de la Formación Profesional Integral  Impartida</p>
                        <Link className="btn btn--big" to="/login"><button>Ingresar</button></Link>

                    </div>
                </div>
                <div className='imgWrapper'>
                    <img className='logo-sen' src={logo_circulo} alt="" />
                    <img className='logo-teinnova' src={Tei_Azul} alt="" /></div>
            </div>

            {/* Se hace el llamado del componente Cards */}
            <Cards />
            {/* Bloque 2 */}
            <div className='content-que-semilleros' >



                <div className='row_2' id='semilleros'>
                    <div className='imgWrapper_2'><img src={Imagen_Uno} alt="" />
                        <h2>¿QUÉ SON LOS SEMILLEROS <br></br> DE INVESTIGACIÓN?</h2>
                    </div>

                    {/* <img className='Gif' src={Gif} alt="" /> */}



                </div>

                    <p className='parrafo_semillero'>Un semillero de investigación en el Sena, al igual que en cualquier otra institución de educación,
                     se entiende como un espacio para el desarrollo de las habilidades prácticas investigativas. En él, se espera
                        que tanto los instructores como los aprendices construyan  conocimiento basado en la solución
                        de problemas reales, particulares a su entorno y generen propuestas  de cambio y mejoramiento 
                        en múltiples dimensiones, bien sean sociales, científicas, técnicas y/o tecnológicas.  
                    </p>
                <br />
                <br />
                {/* Bloque 3 */}
            </div>
            <div className='info_objetivo_senn' id='objetivos'>
                <h1><strong>OBJETIVO SENNOVA</strong></h1><br />
                <p>SENNOVA adelanta iniciativas que impulsan el programa de desarrollo tecnológico a través de las líneas programáticas generando capacidades de Ciencia, Tecnología e Innovación en los Centros de Formación como estrategia para impactar y resolver las necesidades inmediatas del sector productivo y en las regiones del país.</p>
            </div>
            <br />
            <br />

            {/* Bloque 4 */}

            <div className='row_3' id='teinnova'>
                <div className='contentWrapper_3'>
                    <div className='content_3'>
                        <h2>Grupo de investigación TEINNOVA<br />
                            Centro de Diseño e Innovación<br /> Tecnológica Industrial</h2> <br /><br />
                        <p>El grupo de Investigación TEINNOVA-CDITI ha sido el resultado de la construcción colectiva de un sinfín de actores, entre los que se incluyen instructores y aprendices. Desde el año 2016, con sus aportes académicos y desarrollos tecnológicos, estos actores han ayudado a que el grupo sea categorizado y reconocido por MINCIENCIAS. Gracias a este esfuerzo, el grupo actualmente está clasificado en la categoría "B", demostrando su compromiso con la investigación y la innovación.
                        </p>
                    </div>
                </div>
                <div className='imgWrapper_2'>
                    <img src={Tei_Azul} alt="" />
                </div>

            </div>

            <section className='creadores' id='creadores'>
                <h1>Nuestros Creadores</h1>

                <div className='creadores__card'>
                    <CreadoresPage nombre={'Juan Carlos García.'} rol={'Lider SENNOVA.'} img={Juan_Carlos} is_git={false}/>
                    <CreadoresPage nombre={'Jorge Luis Raigosa Barahona.'} rol={'Lider Semillero.'} img={J_Raigosa} />
                    <CreadoresPage nombre={'Yuly Paulín Sáenz.'} rol={'Instructor Investigador.'}  />
                    <CreadoresPage nombre={'Yesid Molina Becerra.'} rol={'Aprendiz Investigador'} img={Yesid} />
                    <CreadoresPage nombre={'Jhon Anderson Beltran.'} rol={'Aprendiz Investigador'} img={Ander} />
                    <CreadoresPage nombre={'Johan Sebastian Valle.'} rol={'Aprendiz Investigador'} img={S_valle} />
                    <CreadoresPage nombre={'Isaac Echeverry.'} rol={'Aprendiz Investigador'} />
                    <CreadoresPage nombre={'Stephania Duque.'} rol={'Aprendiz Investigador'} />
                    <CreadoresPage nombre={'Karol Andrea Montoya.'} rol={'Aprendiz Investigador'} />
                    <CreadoresPage nombre={'Carlos Eduardo Arias .'} rol={'Aprendiz Investigador'} />
                </div>
            </section>
        

            {/* Se hace el llamado del componente pie de página. */}
            <Footer />

        </div>

    )
}

export default Landing_ofi
