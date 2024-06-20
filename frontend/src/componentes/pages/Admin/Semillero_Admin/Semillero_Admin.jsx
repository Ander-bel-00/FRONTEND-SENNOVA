import React, { Fragment, useEffect, useState } from "react";
import "./css/Semillero_Admin.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import { IoPersonAddSharp } from "react-icons/io5";
import clienteAxios from "../../../../config/axios";
import { useAuth } from "../../../../context/AuthContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";

function Semillero_Admin() {
  const {id_semillero} = useParams();

  const [semilleros, setSemilleros] = useState([]);
  useEffect(() => {
    const fetchSemillero = async () => {
      try {
        if (id_semillero) {
          const response = await clienteAxios.get(
            `/semilleros/${id_semillero}/`
          );
          setSemilleros(response.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del semillero:", error);
      }
    };

    fetchSemillero();
  }, [id_semillero]);

  console.log(id_semillero)

  const handleGenerarPDF = () => {
    // Función para generar un reporte en PDF
    const input = document.getElementById("reporte-container"); // Obtener el elemento HTML que se va a convertir en PDF

    html2canvas(input).then((canvas) => {
      // Convertir el elemento HTML en un canvas utilizando html2canvas
      const imgData = canvas.toDataURL("image/png"); // Convertir el canvas en una imagen (base64)
      const pdf = new jsPDF(); // Crear un nuevo documento PDF utilizando jsPDF

      // Agregar información del semillero al PDF
      pdf.text("Información del Semillero", 75, 20); // Agregar texto al PDF en la posición (10, 20)
      pdf.text(`Nombre: ${semilleros.nombre_semillero}`, 10, 30); // Agregar nombre del semillero
      pdf.text(`Regional: ${semilleros.nombre_regional}`, 10, 40); // Agregar regional del semillero
      // Puedes agregar más texto u otros elementos según sea necesario
      pdf.text(
        `Sector de Aplicación: ${semilleros.sectores_apicacion}`,
        10,
        50
      );
      pdf.text(`Integrantes: ${semilleros.sectores_apicacion}`, 10, 60);
      pdf.text(
        `Líneas de investigación: ${semilleros.lineas_investigacion_declaradas}`,
        10,
        70
      );
      pdf.text(
        `Grupo de Investigación Adscrito: ${semilleros.nombre_grupo_investigacion_adscrito}`,
        10,
        80
      );
      pdf.text(
        `Centro de Fomación: ${semilleros.nombre_centro_formacion}`,
        10,
        90
      );
      pdf.text(
        `Plan Estratégico de Investigación: ${semilleros.plan_estrategico_investigacion}`,
        10,
        100
      );
      pdf.text(
        `Estado del Semillero: ${semilleros.estado_semillero}`, //se agrego el estado del semillero
        10,
        110
      );
      pdf.save("reporte.pdf"); // Descargar el PDF con el nombre 'reporte.pdf'
    });
  };

  return (
    <Fragment>
      <div className="semillero-main-container__info-semillero">
        <section className="semillero-main-container__header">
          <div className="btns-semillero">
            <div
              id="reporte-container"
              className="semillero-main-container__header__btn_repor"
            >
              <BotonBlanco
                icon={<FaFileArrowUp />}
                text={"Reporte"}
                onClick={handleGenerarPDF}
                clase={"btn-blanco btn-blanco--modify btn-verde"}
              />
            </div>

            <div className="semillero-main-container__header__btn_edidat">
              <BotonBlanco
                icon={<GrDocumentUpdate />}
                link={"../actualizar-semillero/:id"} //se agrego el :id 
                text={"Editar Datos"}
                clase={"btn-blanco btn-blanco--modify btn-azul"}
              />
            </div>
          </div>

          <div className="semillero-main-container__header__btn_crear">
            <BotonVerdeAñadir
              icon={<IoPersonAddSharp />}
              text={"Crear Semillero"}
              link={"../crear-semillero"}
            />
          </div>
        </section>
        <section className="semillero-main-container__datos-semillero">
          <h1
            style={{ textAlign: "center", fontSize: "2rem", fontWeight: "500" }}
          >
            SEMILLERO DE INVESTIGACIÓN<br></br> {semilleros.nombre_semillero}
          </h1>

          <div className="semillero-main-container__campos-informacion">
            <section>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Nombre: </h1>
                <h2>{semilleros.nombre_semillero}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Regional: </h1>
                <h2>{semilleros.nombre_regional}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Sectores de aplicacion: </h1>
                <h2>{"- " + semilleros.sectores_apicacion}</h2>
              </div>
              <div>
                <h1>Integrantes:</h1>
                <div className="semillero-main-container__campos-informacion__inputs--integrantes">
                  {semilleros.users &&
                    semilleros.users.map((usuario) => (
                      <div key={usuario.id}>
                        <h5 className="integrantes">
                          {"- " + usuario.name + " " + usuario.last_names}
                        </h5>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            <section>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Grupo de Investigación Adscrito: </h1>
                <h2>{semilleros.nombre_grupo_adscrito}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Centro de Formación:</h1>
                <h2> {semilleros.nombre_centro_formacion}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Plan estrategico: </h1>
                <h2>{"- " + semilleros.plan_estrategico_investigacion}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs --lineas-investigacion">
                <h1>Líneas de Investigación </h1>
                <h2>{"- " + semilleros.lineas_investigacion_declaradas}</h2>
              </div>
              {/* se agrego el estado del semillero*/}
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Estado del Semillero</h1>
                <h2>{"- " + semilleros.estado_semillero}</h2> 
              </div>
            </section>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Semillero_Admin;
