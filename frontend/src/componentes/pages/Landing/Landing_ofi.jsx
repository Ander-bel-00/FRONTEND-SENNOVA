import React from "react";
import "./css/Landing_ofi.css";
import Imagen_Teinnova from "./img/TEINNOVA.png";
import { CardBlog } from "./carrusel/carrusel";
import { blogs } from "./data/data";
// import Circulo_Sennova from './img/duo_senn.jpg';
import Imagen_Uno from "./img/pagina_princi.jpg";
import Gif from "./img/buscar_5.gif";
import Tei_Azul from "./img/tei_az.png";
import Cards from "./Cards/Cards";
import Encabezado from "./Encabezado";
import Footer from "./Pie_de_pagina";
import btn_flotante from "./btn_flotante";
import logo_circulo from "./img/logo-circulo-sen.webp";
import CreadoresPage from "./creadores_page";
import imagen_grupo_sennova from "./img/semilleros.jpg";

// Fotos Creadores
import Juan_Carlos from "./img/garcia.jpg";
import Yesid from "./img/molina.jpg";
import Ander from "./img/A_Beltran.jpg";
import J_Raigosa from "./img/raigosa_2.jpg";
import S_valle from "./img/S_Valle.jpg";
import Carlitos from "./img/arias_2.jpg";
import Karito from "./img/montoya.jpg";
import Stepha from "./img/duque_2.jpg";
import Yuly from "./img/saenz.jpg";
import isaac from "./img/echeverry.jpg";
import { Link } from "react-router-dom";
import Equipo_Ejecutor from "./equipo_ejecutor";
import martha from "./img/martha.jpg";
import amarillo from "./img/amarillo.jpg";
import subdi from "./img/subdirectora.jpeg";
import coordinador from "./img/coordinador.jpg";

function Landing_ofi() {
  const carouselBlogs = [...blogs, ...blogs];
  return (
    <div className="main-page">
      <Encabezado />

      {/* Bloque 1 */}
      <img className="imagen_teinnova " src={Imagen_Teinnova} alt="" />

      <div className="main-page__container-ingreso">
        <div className="container-ficha-ingreso">
          <div className="container-ficha-ingreso__content">
            <h2>
              SENNOVA <br /> <br />
              Sistema de Investigación, <br /> Desarrollo Tecnológico e
              Innovación
            </h2>{" "}
            <br />
            <p className="ingreso__p">
              Fortaleciendo capacidades locales en <br /> productividad,
              competitividad, <br /> generación de conocimiento y <br />{" "}
              pertinencia de la Formación Profesional <br /> Integral Impartida
            </p>
          </div>
        </div>
        <div className="imgWrapper">
          <img className="logo-sen" src={logo_circulo} alt="" />
          <img className="logo-teinnova" src={Tei_Azul} alt="" />
        </div>
      </div>

      {/* Se inserta el carrusel. */}

      <div className="App" >
        <div className="container my-5">
          <div className="overflow-hidden w-full">
            <div className="flex whitespace-nowrap animate-scroll">
              {carouselBlogs.map((blog, index) => (
                <CardBlog blog={blog} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bloque 2 */}
      <div className="content-que-semilleros">
        <div className="row_2" id="semilleros">
          <div className="imgWrapper_2">
            <img src={imagen_grupo_sennova} alt="" />
            <h2>
              ¿QUÉ SON LOS SEMILLEROS <br></br> DE INVESTIGACIÓN?
            </h2>
          </div>
          {/* <img className='Gif' src={Gif} alt="" /> */}
        </div>

        <p className="parrafo_semillero">
          Un semillero de investigación en el Sena, al igual que en cualquier
          otra institución de educación, se entiende como un espacio para el
          desarrollo de las habilidades prácticas investigativas. En él, se
          espera que tanto los instructores como los aprendices construyan
          conocimiento basado en la solución de problemas reales, particulares a
          su entorno y generen propuestas de cambio y mejoramiento en múltiples
          dimensiones, bien sean sociales, científicas, técnicas y/o
          tecnológicas.{" "}
        </p>

        <br />
        <br />
        {/* Bloque 3 */}
      </div>
      <div className="info_objetivo_senn" id="objetivos">
        <h1>
          <strong>OBJETIVO SENNOVA</strong>
        </h1>
        <br />
        <p>
          SENNOVA adelanta iniciativas que impulsan el programa de desarrollo
          tecnológico a través de las líneas programáticas generando capacidades
          de Ciencia, Tecnología e Innovación en los Centros de Formación como
          estrategia para impactar y resolver las necesidades inmediatas del
          sector productivo y en las regiones del país.
        </p>
      </div>
      <br />
      <br />

      {/* Bloque 4 */}

      <div className="row_3" id="teinnova">
        <div className="contentWrapper_3">
          <div className="content_3">
            <h2>
              Grupo de investigación TEINNOVA
              <br />
              Centro de Diseño e Innovación
              <br /> Tecnológica Industrial
            </h2>{" "}
            <br />
            <br />
            <p>
              El grupo de Investigación TEINNOVA-CDITI ha sido el resultado de
              la construcción colectiva de un sinfín de actores, entre los que
              se incluyen instructores y aprendices. Desde el año 2016, con sus
              aportes académicos y desarrollos tecnológicos, estos actores han
              ayudado a que el grupo sea categorizado y reconocido por
              MINCIENCIAS. Gracias a este esfuerzo, el grupo actualmente está
              clasificado en la categoría "B", demostrando su compromiso con la
              investigación y la innovación.
            </p>
          </div>
        </div>
        <div className="imgWrapper_2">
          <img src={Tei_Azul} alt="" />
        </div>
      </div>

      <section className="creadores" id="creadores">
        <h1>Nuestros Creadores</h1>

        <div className="creadores__card">
          <CreadoresPage
            nombre={"Juan Carlos García Buitrago."}
            rol={"Lider SENNOVA."}
            img={Juan_Carlos}
            is_git={false}
          />
          <CreadoresPage
            nombre={"Jorge Luis Raigosa Barahona."}
            rol={"Lider Semillero."}
            img={J_Raigosa}
          />
          <CreadoresPage
            nombre={"Yuly Paulín Sáenz Agudelo."}
            rol={"Instructora Investigadora."}
            img={Yuly}
          />
          <CreadoresPage
            nombre={"Yesid Molina Becerra."}
            rol={"Aprendiz Investigador"}
            img={Yesid}
          />
          <CreadoresPage
            nombre={"Jhon Anderson Beltran Echavarria."}
            rol={"Aprendiz Investigador"}
            img={Ander}
          />
          <CreadoresPage
            nombre={"Johan Sebastian Valle Barbaran."}
            rol={"Aprendiz Investigador"}
            img={S_valle}
          />
          <CreadoresPage
            nombre={"Isaac Echeverry García."}
            rol={"Aprendiz Investigador"}
            img={isaac}
          />
          <CreadoresPage
            nombre={"Stephania Herrera Duque."}
            rol={"Aprendiz Investigador"}
            img={Stepha}
          />
          <CreadoresPage
            nombre={"Karol Andrea Montoya Rendón."}
            rol={"Aprendiz Investigador"}
            img={Karito}
          />
          <CreadoresPage
            nombre={"Carlos Eduardo Arias Urrego."}
            rol={"Aprendiz Investigador"}
            img={Carlitos}
          />
        </div>
      </section>

      <section className="equipo_ejecutor" id="equipo_ejecutor">
        <h1>Líderes Académicos</h1>

        <div className="equipo_ejecutor__card">
          <Equipo_Ejecutor
            nombre={"Sandra Yulieth García Gonzales."}
            rol={"Subdirectora Centro de Formación."}
            img={subdi}
          />
          <Equipo_Ejecutor
            nombre={"Oscar García Soto."}
            rol={"Coordinador Académico."}
            img={coordinador}
          />
          <Equipo_Ejecutor
            nombre={"Martha Elizabeth Cortés Rico."}
            rol={"Instructora SENNOVA."}
            img={martha}
          />
          <Equipo_Ejecutor
            nombre={"Luis Fernando Rincón Amarillo."}
            rol={"Instructor SENNOVA."}
            img={amarillo}
          />
        </div>
      </section>

      {/* Se hace el llamado del componente pie de página. */}
      <Footer />
    </div>
  );
}

export default Landing_ofi;