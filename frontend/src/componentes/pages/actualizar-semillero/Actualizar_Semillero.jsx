import React, { Fragment, useEffect, useState } from "react";
import "./css/Actualizar_Semillero.css";
import { GiReturnArrow } from "react-icons/gi";
import Caja_formularios from "../../common/Caja_formularios";
import BotonReturn from "../../common/BotonReturn";
import { useNavigate, useParams } from "react-router-dom";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Actualizar_Semillero() {
  // Extraer la variable id que se pasa por la url.
  const { id } = useParams();
  // Constante que permitirá realizar navegaciones con el Hook (useNavigate).
  const navigate = useNavigate();
  // Estado que guardará la infomación del semillero.
  const [semilleroInfo, setSemilleroInfo] = useState({
    nombre_semillero: "",
    nombre_regional: "",
    nombre_centro_formacion: "",
    nombre_grupo_adscrito: "",
    plan_estrategico_investigacion: "",
    lineas_investigacion_declaradas: "",
    sectores_apicacion: "",
    estado_semillero: "",
  });

  // Función para realizar una solicitud a la api y traer los datos del semillero por su id.
  const  consultarApi = async () => {
    // Solicitud que me trae los datos del semillero que se busca por su id.
    const res = await clienteAxios.get(`/semilleros/${id}/`);
    // Actualizar el estado actividadInfo con la información obtenida de res (respuesta de la solicitud).
    setSemilleroInfo(res.data);
  };

  // Efecto que realizará una acción una vez se cargue completamente el componente.
  useEffect(() => {
    // Llamar la función consultarApi para ejecutar todo dentro de ella.
    consultarApi();
  }, []);

  // Función de evento, que permitirá realizar actualización en el estado (actividadInfo), con lo nuevo escrtio en cada input.
  const handleChange = (e) => {
    // Actualizar el estado con los nuevos valores recibidos.
    setSemilleroInfo({
    // Copiamos todos los campos del estado y los actualizamos por los nuevos valores.
    ...semilleroInfo,
    // Buscar la etiqueta html donde el name coinicida con cada campo del estado y extraer su valor.
    [e.target.name]: e.target.value,
    });
  };

  const actualizarSemillero = async (e) => {
    e.preventDefault();
    try {
      await clienteAxios.put(`/semilleros/${id}/`, semilleroInfo);

      Swal.fire({
        icon: "success",
        title: "El semilero ha sido actualizado",
        text: "La información del semillero ha sido actualizado correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../");
      });
    } catch (error) {
      console.error("Error al actualizar los datos del semillero", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos del semillero",
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
              <div className="update-semillero-main">
                <h2 className="text-center actualizar-semillero-title">
                  ACTUALIZAR SEMILLERO DE INVESTIGACIÓN
                </h2>
                <form 
                  className="form-update-semillero-content"
                  onSubmit={actualizarSemillero}
                >
                  <label
                    htmlFor="nombre_semillero"
                    className="form-update-semillero-content__col1__label"
                  >
                    Nombre del semillero <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_semillero"
                    className="form-update-semillero-content__col1__input"
                    name="nombre_semillero"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.nombre_semillero}
                  />
                  <label
                    htmlFor="nombre_regional"
                    className="form-update-semillero-content__col1__label"
                  >
                    Regional <p className="text-red-600">*</p>
                  </label>
                  <select 
                    className="form-update-semillero-content__col1__input"
                    id="nombre_regional"
                    name="nombre_regional"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.nombre_regional}
                  >
                    <option selected>Seleccione el centro de formación</option>
                    <option>Centro De Atención Al Sector Agropecuario </option>
                    <option>Centro De comercio Y Servicio</option>
                    <option>Centro De Diseño E Innovación Tecnológica Industrial</option>
                  </select>
                  <label
                    htmlFor="nombre_centro_formacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Centro de Formación <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_centro_formacion"
                    className="form-update-semillero-content__col1__input"
                    name="nombre_centro_formacion"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.nombre_centro_formacion}
                  />
                  <label
                    htmlFor="nombre_grupo_adscrito"
                    className="form-update-semillero-content__col1__label"
                  >
                    Grupo de Investigación Adscrito <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_grupo_adscrito"
                    className="form-update-semillero-content__col1__input"
                    name="nombre_grupo_adscrito"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.nombre_grupo_adscrito}
                  />
                  <label
                    htmlFor="sectores_apicacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Sectores de Aplicación <p className="text-red-600">*</p>
                  </label>
                  <select 
                    className="form-add-semillero-content__col1__input"
                    id="sectores_apicacion"
                    name="sectores_apicacion"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.sectores_apicacion}
                  >
                    <option selected>Seleccione el sector de aplicación</option>
                    <option>Ingeniería y Tecnología</option>
                    <option>Educación</option>
                    <option>Comercial - Agrícola</option>
                    <option>Industrias Culturales y Creativas</option>
                    <option>Industria Farmacéutica - Salud</option>
                    <option>Todos los demás donde se puedan aplicar Tecnologías de la Información y de las Comunicaciones</option>
                  </select>
                  <label
                    htmlFor="users"
                    className="form-update-semillero-content__col1__label"
                  >
                    Integrantes <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="users"
                    className="form-update-semillero-content__col1__input"
                    name="users"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.users}
                  />
                  <label
                    htmlFor="plan_estrategico_investigacion"
                    className="form-update-semillero-content__col1__label"
                  >
                    Plan Estratégico de Investigación{" "}
                    <p className="text-red-600">*</p>
                  </label>
                  <textarea
                   type="text"
                    id="plan_estrategico_investigacion"
                    cols="28"
                    rows="9"
                    className="form-update-semillero-content__col1__textarea"
                    name="plan_estrategico_investigacion"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.plan_estrategico_investigacion}
                  />
                  <label
                    htmlFor="lineas_investigacion_declaradas"
                    className="form-update-semillero-content__col1__label"
                  >
                    Línea de Investigación <p className="text-red-600">*</p>
                  </label>
                  <select 
                    className="form-add-semillero-content__col1__input"
                    id="lineas_investigacion_declaradas"
                    name="lineas_investigacion_declaradas"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.lineas_investigacion_declaradas}
                  >
                    <option selected>Seleccione la línea de investigación</option>
                    <option>Telemática y Desarrollo de TIC</option>
                    <option>Educación, Pedagogía, Transformación Social e Innovación</option>
                    <option>Sistemas Productivos, Organizacionales e Industriales</option>
                    <option>Sistemas Electrónicos, Automatización y Control de Procesos</option>
                    <option>Diseño de la Moda, Manufactura Textil y Cuero</option>
                    <option>Tecnologías para el Hábitat, las Energías Renovables y el Desarrollo Sostenible</option>
                    <option>Diseño e Innovación Mecatronica de Automotores</option>
                  </select>

                  <label
                    htmlFor="estado_semillero"
                    className="form-update-semillero-content__col1__label"
                  >
                    Estado del Semillero<p className="text-red-600">*</p>
                  </label>
                  <select 
                    className="form-add-semillero-content__col1__input"
                    id="estado_semillero"
                    name="estado_semillero"
                    onChange={handleChange}
                    defaultValue={semilleroInfo.estado_semillero}
                  >
                    <option selected>Seleccione el estado del semillero</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                  
                  <div className="update-semillero-btns">
                    <input
                      type="submit"
                      value="Actualizar"
                      className="btn-actualizar-semillero"
                    />
                    <Link to={"../semillero/:id"}>
                      <input
                        type="submit"
                        value="Cancelar"
                        className="btn-cancelar-actualizar-semillero"
                      />
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

export default Actualizar_Semillero;
