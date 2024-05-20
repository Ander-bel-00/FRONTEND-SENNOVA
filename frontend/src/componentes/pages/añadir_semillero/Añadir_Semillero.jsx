import React, { Fragment, useState } from "react";
import "./css/Añadir_Semillero.css";
import Caja_formularios from "../../common/Caja_formularios";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
function Añadir_Semillero() {
  const navigate = useNavigate();
  const [formSemilleroAdd, setformSemilleroAdd] = useState({
    nombre_semillero: "",
    nombre_regional: "",
    nombre_centro_formacion: "",
    nombre_grupo_adscrito: "",
    plan_estrategico_investigacion: "",
    lineas_investigacion_declaradas: "",
    sectores_apicacion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformSemilleroAdd({formSemilleroAdd, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verificar si algún campo está vacío
    const anyFieldEmpty = Object.values(formSemilleroAdd).some(
      (value) => value === ""
    );
    if (anyFieldEmpty) {
      // Mostrar Sweet Alert si algún campo está vacío
      Swal.fire({
        title: "Error al crear el Semillero",
        text: "Debes diligenciar todos los campos",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post(
        "/semilleros/",
        formSemilleroAdd
      );
      Swal.fire({
        title: "Semillero registrado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/../");
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error",
        text: "Hubo un error al crear el Semillero",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <BotonReturn />
        <Caja_formularios
          info={
            <Fragment>
              <div className="add-semillero-main">
                <h2 className="text-center añadir-semillero-title">
                  CREAR SEMILLERO DE INVESTIGACIÓN
                </h2>
                <form
                  className="form-add-semillero-content"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="nombre-del-semillero"
                    className="form-add-semillero-content__col1__label"
                  >
                    Nombre del semillero <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-del-semillero"
                    name="nombre_semillero"
                    className="form-add-semillero-content__col1__input"
                    onChange={handleChange}
                    
                  />
                  <label
                    htmlFor="nombre-regional"
                    className="form-add-semillero-content__col1__label"
                  >
                    Regional <p className="text-red-600">*</p>
                  </label>
                  <select
                    onChange={handleChange}
                    className="form-add-semillero-content__col1__input"
                    name="nombre_regional"
                  >
                    <option selected disabled>
                      Seleccione la Regional a la que pertenece el Semillero
                    </option>
                    <option value="Risaralda">Risaralda</option>
                  </select>

                  <label
                    htmlFor="centro-de-formacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Centro de Formación <p className="text-red-600">*</p>
                  </label>
                  <select
                    onChange={handleChange}
                    className="form-add-semillero-content__col1__input"
                    name="nombre_centro_formacion"
                  >
                    <option selected disabled>
                      Seleccione el centro de formación
                    </option>
                    <option value="Centro De Atención Al Sector Agropecuario">
                      Centro De Atención Al Sector Agropecuario{" "}
                    </option>
                    <option value="Centro De comercio Y Servicio">
                      Centro De comercio Y Servicio
                    </option>
                    <option value="Centro De Diseño E Innovación Tecnológica Industrial">
                      Centro De Diseño E Innovación Tecnológica Industrial
                    </option>
                  </select>
                  <label
                    htmlFor="grupo-adscrito"
                    className="form-add-semillero-content__col1__label"
                  >
                    Grupo Adscrito <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="grupo-adscrito"
                    className="form-add-semillero-content__col1__input"
                    name="nombre_grupo_adscrito"
                    onChange={handleChange}
                    
                  />
                  <label
                    htmlFor="sectores-de-aplicacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Sectores de Aplicación <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="sectores-de-aplicacion"
                    className="form-add-semillero-content__col1__input"
                    name="sectores_apicacion"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="plan-estrategico-de-investigacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Plan Estratégico de Investigación{" "}
                    <p className="text-red-600">*</p>
                  </label>
                  <textarea
                    name="plan_estrategico_investigacion"
                    id="plan-estrategico-de-investigacion"
                    cols="28"
                    rows="9"
                    className="form-add-semillero-content__col1__textarea"
                    onChange={handleChange}
                    
                  />
                  <label
                    htmlFor="linea-de-investigacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Línea de Investigación <p className="text-red-600">*</p>
                  </label>
                  <textarea
                    name="lineas_investigacion_declaradas"
                    id="linea-de-investigacion"
                    cols="28"
                    rows="9"
                    className="form-add-semillero-content__col1__textarea"
                    onChange={handleChange}
                    required
                  ></textarea>

                  <div className="add-semillero-btns">
                    <button
                      type="submit"
                      className="btn-actualizar-añadir-semillero"
                    >
                      Registrar
                    </button>
                    <Link to={"/"} className="btn-cancelar-añadir-semillero text-center">
                      Cancelar
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

export default Añadir_Semillero;
