import React, { Fragment, useEffect, useState } from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import BotonBlanco from "../../../common/BotonReporte";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Semillero_apr_invg() {
  const { userProfile } = useAuth();

  const [semilleros, setSemilleros] = useState([]);
  useEffect(() => {
    const fetchSemillero = async () => {
      try {
        if (userProfile && userProfile.semillero) {
          const response = await clienteAxios.get(
            `/semilleros/${userProfile.semillero}/`
          );
          setSemilleros(response.data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del semillero:", error);
      }
    };

    fetchSemillero();
  }, [userProfile]);


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
        40
      );
      pdf.text(
        `Líneas de investigación: ${semilleros.lineas_investigacion_declaradas}`,
        10,
        50
      );
      pdf.text(
        `Grupo de Investigación Adscrito: ${semilleros.nombre_grupo_investigacion_adscrito}`,
        10,
        60
      );
      pdf.text(
        `Centro de Fomación: ${semilleros.nombre_centro_formacion}`,
        10,
        70
      );
      pdf.text(
        `Plan Estratégico de Investigación: ${semilleros.plan_estrategico_investigacion}`,
        10,
        80
      );
      pdf.text(
        `Estado del Semillero: ${semilleros.estado_semillero}`, //se agrego el estado del semillero
        10,
        90
      );
      pdf.save("reporte.pdf"); // Descargar el PDF con el nombre 'reporte.pdf'
    });
  };


  return (
    <Fragment>
      <div className="semillero-main-container__info-semillero">
        <section className="semillero-main-container__header">
          <BotonBlanco
            icon={<FaFileArrowUp />}
            text={"Reporte"}
            clase={"btn-blanco btn-blanco--modify btn-verde"}
            onClick={handleGenerarPDF}
          />
        </section>
        <section className="semillero-main-container__datos-semillero">
          <h1
            style={{ textAlign: "center", fontSize: "2rem", fontWeight: "500" }}
          >
            SEMILLERO DE INVESTIGACIÓN<br></br>{" "}
            {semilleros.nombre_semillero}
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
                <h1>Grupo adscrito: </h1>
                <h2>{semilleros.nombre_grupo_adscrito}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Centro Formación:</h1>
                <h2> {semilleros.nombre_centro_formacion}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>Plan estrategico: </h1>
                <h2>{"- " + semilleros.plan_estrategico_investigacion}</h2>
              </div>
              <div className="semillero-main-container__campos-informacion__inputs">
                <h1>lineas de Investigación </h1>
                <h2>{"- " + semilleros.lineas_investigacion_declaradas}</h2>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Semillero_apr_invg;
