import React, { Fragment, useEffect, useState } from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import BotonBlanco from "../../../common/BotonReporte";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";

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

  return (
    <Fragment>
      <div className="semillero-main-container__info-semillero">
        <section className="semillero-main-container__header">
          <BotonBlanco
            icon={<FaFileArrowUp />}
            text={"Reporte"}
            clase={"btn-blanco btn-blanco--modify btn-verde"}
          />
        </section>
        <section className="semillero-main-container__datos-semillero">
          <h1
            style={{ textAlign: "center", fontSize: "2rem", fontWeight: "500" }}
          >
            SEMILLERO DE INVESTIGACIÓN <br></br>{" "}
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
