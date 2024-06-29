import React, { Fragment, useState } from "react";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";
import "./css/Crear_Actividad_Instructor_Investigador.css";

function Crear_Actividad_Instructor_Investigador() {

  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : [];

  const [loading, setLoading] = useState(false)
  const [nuevaActividadSemillero, setNuevaActividadSemillero] = useState({
    semillero: SemilleroID.length > 0 ? SemilleroID[0] : null,
    nombre_actividad: "",
    tarea: "",
    fecha_inicio: "",
    fecha_fin: "",
    resultado: "",
    responsable_actividad: "",
  });

  const handleChange = (e) => {
    // e.target se refiere al elemento html de donde vienen los valores(name. value)
    const { name, value } = e.target;
    setNuevaActividadSemillero({ ...nuevaActividadSemillero, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const fieldEmpty = Object.values(nuevaActividadSemillero).some(
      (value) => value === ""
    );
    if (fieldEmpty) {
      Swal.fire({
        title: "Error al crear la actividad",
        text: "Debes diligenciar todos los campos",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post(
        "/activity-semillero/",
        nuevaActividadSemillero
      );
      Swal.fire({
        title: "Actividad creada exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-actividad");
      });
    } catch (error) {
      console.error("Error al crear la actividad para el semillero", error);
      Swal.fire({
        title: "Error al crear la actividad",
        text: "Hubo un error al crear la actividad",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false)
    }
  };



  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">

        <Link>
          <div className="btn-return-actividad-instructor">
            <BotonReturn />
          </div>
        </Link>

        <Caja_formularios
          info={
            <Fragment>
              <div className="create-activity-instructor">
                <h2 className="create-activity-instructor-title">
                  Crear Actividad
                </h2>
                <form className="form-create-activity-instructor-content" onSubmit={handleSubmit}>
                  <label
                    htmlFor="nombre-actividad"
                    className="form-create-activity-instructor-content-label"
                  >
                    Nombre de la Actividad <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-actividad"
                    className="form-create-activity-instructor-content-input"
                    name="nombre_actividad"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-create-activity-instructor-content-label"
                  >
                    Fecha Inicio <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-entrega-actividad"
                    className="form-create-activity-instructor-content-input"
                    name="fecha_inicio"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-create-activity-instructor-content-label"
                  >
                    Fecha Fin <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-entrega-actividad"
                    className="form-create-activity-instructor-content-input"
                    name="fecha_fin"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="tarea-activida"
                    className="form-create-activity-instructor-content-label"
                  >
                    Tarea <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="tarea-actividad"
                    className="form-create-activity-instructor-content-input"
                    name="tarea"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="resultado-actividad"
                    className="form-create-activity-instructor-content-label"
                  >
                    Resultado <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="resultado-actividad"
                    className="form-create-activity-instructor-content-input"
                    name="resultado"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="responsable-actividad"
                    className="form-create-activity-instructor-content-label"
                  >
                    Responsable de la Actividad{" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="responsable-actividad"
                    className="form-create-activity-instructor-content-input"
                    name="responsable_actividad"
                    onChange={handleChange}
                  />

                  <div className="btns-instructor-actividad">
                    <button type="submit" className="btn-crear-instructor-actividad">
                      {loading ? <span className="spinner"></span> : "Crear"}
                    </button>

                    <Link to={"../listar-actividad/"}>
                      <button className="btn-cancelar-instructor-actividad" type="button">
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

export default Crear_Actividad_Instructor_Investigador;
