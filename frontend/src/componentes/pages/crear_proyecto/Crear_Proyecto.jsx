import React, { Fragment, useEffect, useState } from "react";
import Caja_formularios from "../../common/Caja_formularios";
import BotonReturn from "../../common/BotonReturn";
import { Link, useNavigate } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { useAuth } from "../../../context/AuthContext";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import "./css/Crear_Proyecto.css";

function Crear_Proyecto() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  // Obtener el SemilleroID del userProfile
  const SemilleroID = userProfile ? userProfile.semillero : [];
  
  const [loading, setLoading] = useState(false);
  // Inicializar el estado del formulario
  const [formNewProyect, setFormNewProyect] = useState({
    semillero: SemilleroID.length > 0 ? SemilleroID[0] : null, // Asignar el primer valor del array o null si no hay valores
    nombre_proyecto: "",
    fecha_inicio: "",
    fecha_fin: "",
    descripcion_proyecto: "",
    tipo_proyecto: "",
    codigo: "",
  });

  // Esta función maneja el cambio en cualquier campo del formulario.
  const handleChange = (e) => {
    // Extraemos el nombre y el valor del campo que ha cambiado.
    const { name, value } = e.target;
    // Actualizamos el estado del formulario (formNewProyect) con el nuevo valor del campo cambiado.
    // Utilizamos el spread operator (...) para copiar el estado actual del formulario y luego
    // sobrescribir el valor del campo específico que ha cambiado.
    setFormNewProyect({ ...formNewProyect, [name]: value });
  };

  // Esta función maneja el envío del formulario.
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await clienteAxios.post("/proyectos/", formNewProyect);
      Swal.fire({
        title: "Proyecto creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-Proyectos");
      });
    } catch (error) {
      console.error("Error al crear el proyecto para el semillero", error);

      Swal.fire({
        title: "Error al crear el Proyecto",
        text: "Hubo un error al crear el proyecto",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false)
    }
  };
  
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <div className="btn-return-proyecto">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
        <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-proyecto-lider">
                <h2 className="create-project-title-lider">
                  Crear Proyecto
                </h2>

                <form
                  className="form-add-project-container-lider"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="codigo"
                    className="form-add-project-container-label-lider"
                  >
                    Código SGPS (Sistema de gestión de proyectos SENNOVA)
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    name="codigo"
                    id="codigo"
                    className="form-add-project-container-input-lider"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="tipo proyecto"
                    className="form-add-project-container-label-lider"
                  >
                    Tipo proyecto <p className="rojo-required">*</p>
                  </label>

                  <select
                    className="form-add-project-container__select-lider"
                    name="tipo_proyecto"
                    onChange={handleChange}
                  >
                    <option selected>
                      Seleccione tipo de proyecto
                    </option>
                    <option value="Capacidad Instalada">
                      Capacidad Instalada
                    </option>
                    <option value="Modernizacion">Modernizacion</option>
                    <option value="Innovacion">Innovación</option>
                    <option value="Aplica">Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-project-container-label-lider"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    name="nombre_proyecto"
                    onChange={handleChange}
                    className="form-add-project-container-input-lider"
                  />
                  
                  <label
                    htmlFor="descripción-proyecto"
                    className="form-add-project-container-label-lider"
                  >
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    name="descripcion_proyecto"
                    onChange={handleChange}
                    id="descripcion-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-project-container-textarea-lider"
                  ></textarea>

                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-project-container-label-lider"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    name="fecha_inicio"
                    onChange={handleChange}
                    className="form-add-project-container-input-lider"
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-project-container-label-lider"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    name="fecha_fin"
                    onChange={handleChange}
                    id="fecha-fin-proyecto"
                    className="form-add-project-container-input-lider"
                  />

                  <div className="btns-crear-projecto">
                    <button type="submit" className="btn-crear-proyecto-lider">
                      {loading ? <span className="spinner"></span> : "Crear"}
                    </button>

                    <Link to={"../listar-proyectos"}>
                      <button type="button" className="btn-cancelar-proyecto-lider">
                        Cancelar
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </Fragment>
          }
        />
      </div>
    </Fragment>
  );
}

export default Crear_Proyecto;
