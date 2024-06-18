import React, { Fragment, useState } from "react";
import "./css/Crear_Proyectos_Admin.css";
import Caja_formularios from "../../../common/Caja_formularios";
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";

function Crear_Proyectos_Admin() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : "";

  const [formNewProyectAd, setFornNewProtectAd] = useState({
    semillero:  SemilleroID,
    codigo: "",
    tipo_proyecto: "",
    nombre_proyecto: "",
    // semillero: "",
    descripcion_proyecto: "",
    fecha_inicio: "",
    fecha_fin: "",
  })

  // Esta función maneja el cambio en cualquier campo del formulario.
  const handleChange = (e) => {
    // Extraemos el nombre y el valor del campo que ha cambiado.
    const { name, value } = e.target;
    // Actualizamos el estado del formulario (formNewProyect) con el nuevo valor del campo cambiado.
    // Utilizamos el spread operator (...) para copiar el estado actual del formulario y luego
    // sobrescribir el valor del campo específico que ha cambiado.
    setFornNewProtectAd({...formNewProyectAd, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar si algún campo está vacío
    const anyFieldEmpty = Object.values(formNewProyectAd).some(
      (value) => value == ""
    );
    if (anyFieldEmpty) {
      // Mostrar Sweet Alert si algún campo está vacío
      Swal.fire({
        title: "Error al crear el Proyecto",
        text: "Debes diligenciar todos los campos",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    
    try {
      const response = await clienteAxios.post("/proyectos/", formNewProyectAd);
      Swal.fire({
        title: "Proyecto creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("../listar-Proyectos");
        }
      });
      
      console.log(response.data)
    }catch (error) {
      console.error("Error al crear el proyecto para el semillero", error);

      Swal.fire({
        title: "Error al crear el Proyecto",
        text: "Hubo un error al crear el proyecto",
        icon: "error",
        confirmButtonText: "Aceptar",
      })
    }
  }

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <BotonReturn />
        <Caja_formularios
          info={
            <Fragment>
              <div className="main-form-admin-proyecto">
                <h2 className="text-center create-project-admin-title">
                  Crear Proyecto
                </h2>

                <form 
                  className="form-add-pryect-admin-container"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="codigo"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Código SGPS (Sistema de gestión de proyectos SENNOVA) <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="codigo"
                    name="codigo"
                    className="form-add-pryect-admin-container__col1__input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="tipo_proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Tipo de Proyecto <p className="rojo-required">*</p>
                  </label>

                  <select 
                    className="form-add-pryect-admin-container__select"
                    name="tipo_proyecto"
                    id="tipo_proyecto"
                    onChange={handleChange}
                  >
                    <option selected>Seleccione tipo de proyecto</option>
                    <option>Capacidad Instalada</option>
                    <option>Modernizacion</option>
                    <option>Innovación</option>
                    <option>Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre_proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_proyecto"
                    name="nombre_proyecto"
                    className="form-add-pryect-admin-container__col1__input"
                    onChange={handleChange}
                  />
{/* 
                  <label
                    htmlFor="semillero"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Nombre del Semillero<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="semillero"
                    name="semillero"
                    className="form-add-pryect-admin-container__col1__input"
                    onChange={handleChange}
                  /> */}

                  <label
                    htmlFor="descripcion_proyecto"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                   type="text"
                    id="descripcion_proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-admin-container__col1__textarea"
                    name="descripcion_proyecto"
                    onChange={handleChange}
                  ></textarea>

                  <label
                    htmlFor="fecha_inicio"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha_inicio"
                    name="fecha_inicio"
                    className="form-add-pryect-admin-container__col1__input"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="fecha_fin"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha_fin"
                    name="fecha_fin"
                    className="form-add-pryect-admin-container__col1__input"
                    onChange={handleChange}
                  />

                  <div className="btns-crear-projecto-admin">
                    <button className="btn-crear-proyecto-admin" type="submit">
                      Crear
                    </button>
                    <Link to={"../listar-Proyectos"}>
                      <button
                        type="button"
                        className="btn-cancelar-proyecto-admin"
                      >
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

export default Crear_Proyectos_Admin;
