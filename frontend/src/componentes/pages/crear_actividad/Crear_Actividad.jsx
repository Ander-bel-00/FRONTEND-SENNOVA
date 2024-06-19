import React, { Fragment, useState } from "react";
import "./css/Crear_Actividad.css";
import { GiReturnArrow } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";
import clienteAxios from "../../../config/axios";

function Crear_Actividad() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : [];

  const [formNewActivitySemillero, setFormNewActivitySemillero] = useState({
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
    setFormNewActivitySemillero({ ...formNewActivitySemillero, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldEmpty = Object.values(formNewActivitySemillero).some(
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
        formNewActivitySemillero
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
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <div className="btn-return-actividad">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
        <Caja_formularios
          info={
            <div className="create-activity-box">
              <h3 className="create-activity-title">
                Crear Actividad
              </h3>
              <form
                className="form-create-activity-content"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="nombre-actividad"
                  className="form-create-activity-content__col1__label"
                >
                  Nombre de la Actividad <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-actividad"
                  className="form-create-activity-content__col1__input"
                  name="nombre_actividad"
                  onChange={handleChange}
                />
                <label
                  htmlFor="fecha-entrega-actividad"
                  className="form-create-activity-content__col1__label"
                >
                  Fecha de Inicio <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  id="fecha-entrega-actividad"
                  className="form-create-activity-content__col1__input"
                  name="fecha_inicio"
                  onChange={handleChange}
                />
                <label
                  htmlFor="fecha-entrega-actividad"
                  className="form-create-activity-content__col1__label"
                >
                  Fecha de fin <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  id="fecha-entrega-actividad"
                  className="form-create-activity-content__col1__input"
                  name="fecha_fin"
                  onChange={handleChange}
                />

                <label
                  htmlFor="tarea-actividad"
                  className="form-create-activity-content__col1__label"
                >
                  Tarea <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="tarea-actividad"
                  className="form-create-activity-content__col1__input"
                  name="tarea"
                  onChange={handleChange}
                />
                <label
                  htmlFor="resultado-actividad"
                  className="form-create-activity-content__col1__label"
                >
                  Resultado <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="resultado-actividad"
                  className="form-create-activity-content__col1__input"
                  name="resultado"
                  onChange={handleChange}
                />
                <label
                  htmlFor="responsable-actividad"
                  className="form-create-activity-content__col1__label"
                >
                  Responsable de la Actividad <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="responsable-actividad"
                  className="form-create-activity-content__col1__input"
                  name="responsable_actividad"
                  onChange={handleChange}
                />

                <div className="btns-crear-actividad">
                  <button className="btn-create-actividad" type="submit">
                    Crear
                  </button>
                  <Link to={"../listar-actividad"}>
                    <button
                      className="btn-cancelar-actividad"
                      type="button"
                    >
                      Cancelar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          }
        />
      </div>
    </Fragment>
  );
}

export default Crear_Actividad;
