import React, { Fragment, useEffect, useState } from "react";
import "./css/Crear_Proyecto.css";
import Caja_formularios from "../../common/Caja_formularios";
import BotonReturn from "../../common/BotonReturn";
import { Link, useNavigate } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { useAuth } from "../../../context/AuthContext";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";

function Crear_Proyecto() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : "";

  const [formNewProyect, setFormNewProyect] = useState({
    semillero: SemilleroID,
    codigo: "",
    tipo_proyecto: "",
    nombre_proyecto: "",
    descripcion_proyecto: "",
    fecha_inicio: "",
    fecha_fin: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar si algún campo está vacío
    const anyFieldEmpty = Object.values(formNewProyect).some(
      (value) => value === ""
    );
    if (anyFieldEmpty) {
      // Mostrar Sweet Alert si algún campo está vacío
      Swal.fire({
        title: "Error al crear el Proyecto",
        text: "Debes diligenciar todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

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
    }
  };
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <div className="add-proyect-btn-return">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
        <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-proyecto">
                <h2 className="text-center create-project-title">
                  Crear Proyecto
                </h2>

                <form
                  className="form-add-pryect-container"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="codigo"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Código SGPS (Sistema de gestión de proyectos SENNOVA){" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    name="codigo"
                    id="codigo"
                    className="form-add-pryect-admin-container__col1__input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="tipo proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Tipo proyecto <p className="rojo-required">*</p>
                  </label>

                  <select
                    className="form-add-pryect-container__select"
                    name="tipo_proyecto"
                    onChange={handleChange}
                  >
                    <option selected disabled>
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
                    className="form-add-pryect-container__col1__label"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    name="nombre_proyecto"
                    onChange={handleChange}
                    className="form-add-pryect-container__col1__input"
                  />
                  <label
                    htmlFor="descripción-proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    name="descripcion_proyecto"
                    onChange={handleChange}
                    id="descripcion-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-container__col1__textarea"
                  ></textarea>

                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    name="fecha_inicio"
                    onChange={handleChange}
                    className="form-add-pryect-container__col1__input"
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    name="fecha_fin"
                    onChange={handleChange}
                    id="fecha-fin-proyecto"
                    className="form-add-pryect-container__col1__input"
                  />

                  <div className="btns-crear-projecto">
                    <button className="btn-crear-proyecto" type="submit">
                      Crear
                    </button>

                    <Link to={"../listar-proyectos"}>
                      <button type="button" className="btn-cancelar-proyecto">
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
