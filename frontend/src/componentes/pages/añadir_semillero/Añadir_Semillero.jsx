import React, { Fragment, useState } from "react";
import "./css/Añadir_Semillero.css";
import Caja_formularios from "../../common/Caja_formularios";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Añadir_Semillero() {
  const navigate = useNavigate();
  const [formSemilleroAdd, setformSemilleroAdd] = useState({
    estado_semillero: "Activo",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformSemilleroAdd({ ...formSemilleroAdd, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
                    required
                  />
                  <label
                    htmlFor="nombre-regional"
                    className="form-add-semillero-content__col1__label"
                  >
                    Regional <p className="text-red-600">*</p>
                  </label>
                  <select onChange={handleChange} className="form-add-semillero-content__col1__input">
                    <option selected>Seleccione el centro de formación</option>
                    <option>Centro De Atención Al Sector Agropecuario </option>
                    <option>Centro De comercio Y Servicio</option>
                    <option>Centro De Diseño E Innovación Tecnológica Industrial</option>
                  </select>
                  <label
                    htmlFor="centro-de-formacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Centro de Formación <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="centro-de-formacion"
                    className="form-add-semillero-content__col1__input"
                    name="nombre_centro_formacion"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="grupo-adscrito"
                    className="form-add-semillero-content__col1__label"
                  >
                    Grupo de Investigación Adscrito <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="grupo-adscrito"
                    className="form-add-semillero-content__col1__input"
                    name="nombre_grupo_adscrito"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="sectores-de-aplicacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Sectores de Aplicación <p className="text-red-600">*</p>
                  </label>
                  <select onChange={handleChange} className="form-add-semillero-content__col1__input">
                    <option selected>Seleccione el sector de aplicación</option>
                    <option>Ingeniería y Tecnología</option>
                    <option>Educación</option>
                    <option>Comercial - Agrícola</option>
                    <option>Industrias Culturales y Creativas</option>
                    <option>Industria Farmacéutica - Salud</option>
                    <option>Todos los demás donde se puedan aplicar Tecnologías de la Información y de las Comunicaciones</option>
                  </select>
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
                    required
                  />
                  <label
                    htmlFor="linea-de-investigacion"
                    className="form-add-semillero-content__col1__label"
                  >
                    Línea de Investigación <p className="text-red-600">*</p>
                  </label>
                  <select onChange={handleChange} className="form-add-semillero-content__col1__input">
                    <option selected>Seleccione la línea de investigación</option>
                    <option>Telemática y Desarrollo de TIC</option>
                    <option>Educación, Pedagogía, Transformación Social e Innovación</option>
                    <option>Sistemas Productivos, Organizacionales e Industriales</option>
                    <option>Sistemas Electrónicos, Automatización y Control de Procesos</option>
                    <option>Diseño de la Moda, Manufactura Textil y Cuero</option>
                    <option>Tecnologías para el Hábitat, las Energías Renovables y el Desarrollo Sostenible</option>
                    <option>Diseño y Fabricación de Sistemas Mecánicos y Autotrónicos</option>
                  </select>

                  <div className="add-semillero-btns">
                    <button
                      type="submit"
                      className="btn-actualizar-añadir-semillero"
                    >
                      Registrar
                    </button>
                    <button
                      type="submit"
                      value="Cancelar"
                      className="btn-cancelar-añadir-semillero"
                    >
                      Cancelar
                    </button>
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
