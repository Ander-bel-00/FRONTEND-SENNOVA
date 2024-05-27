import React, { Fragment, useEffect, useState } from "react";
import "./css/Actualizar_Actividad.css";
import { GiReturnArrow } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import { IoIosReturnLeft } from "react-icons/io";

function Actualizar_Actividad() {
  // Extraer la variable id que se pasa por la url.
  const { id } = useParams();
  // Constante que permitirá realizar navegaciones con el Hook (useNavigate).
  const navigate = useNavigate();
  // Estado que guardará la infomación de la actividad.
  const [actividadInfo, setActividadInfo] = useState({
    nombre_actividad: "",
    tarea: "",
    fecha_inicio: "",
    fecha_fin: "",
    resultado: "",
    responsable_actividad: "",
  });
  // Función para realizar una solicitud a la api y traer los datos de la actividad por su id.
  const consultarApi = async () => {
    // Solicitud que me trae los datos de la actividad que se busca por su id.
    const res = await clienteAxios.get(`/activity-semillero/${id}/`);
    // Actualizar el estado actividadInfo con la información obtenida de res (respuesta de la solicitud).
    setActividadInfo(res.data);
  };

  // Efecto que realizará una acción una vez se cargue completamente el componente.
  useEffect(() => {
    // Llamar la función consultarApi para ejecutar todo dentro de ella.
    consultarApi();
  }, []);

  // Función de evento, que permitirá realizar actualización en el estado (actividadInfo), con lo nuevo escrtio en cada input.
  const handleChange = (e) => {
    // Actualizar el estado con lso nuevos valores recibidos.
    setActividadInfo({
      // Copiamos todos los campos del estado y lso actualizamos por lo nuevos valores.
      ...actividadInfo,
      // Buscar la etiqueta html donde el name coinicida con cada campo del estado y extraer su valor.
      [e.target.name]: e.target.value,
    });
  };

  const actualizarActividad = async (e) => {
    e.preventDefault();
    try {
      await clienteAxios.put(`/activity-semillero/${id}/`, actividadInfo);

      Swal.fire({
        icon: "success",
        title: "La actividad ha sido actualizada",
        text: "La información de la actividad ha sido actualizada correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-actividad");
      });
    } catch (error) {
      console.error("Error al actualizar los datos de la actividad", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos de la actividad",
      });
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn
              link={"/lider-semillero/Listar_Actividad"}
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>
        <Caja_formularios
          info={
            <Fragment>
              <div className="update-activity-admin-main">
                <h1 className="text-center actualizar-actividades-admin-title">
                  ACTUALIZAR ACTIVIDAD
                </h1>
                <form
                  className="form-update-activity-admin-content"
                  onSubmit={actualizarActividad}
                >
                  <label
                    htmlFor="nombre-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Nombre de la Actividad <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_actividad"
                    className="form-update-activity-admin-content__col1__input"
                    name="nombre_actividad"
                    onChange={handleChange}
                    defaultValue={actividadInfo.nombre_actividad}
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Fecha inicio<p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha_inicio"
                    name="fecha_inicio"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.fecha_inicio}
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Fecha Fin<p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha_fin"
                    className="form-update-activity-admin-content__col1__input"
                    name="fecha_fin"
                    onChange={handleChange}
                    defaultValue={actividadInfo.fecha_fin}
                  />
                  {/* <label
                  htmlFor="producto-actividad"
                  className="form-update-activity-admin-content__col1__label"
                >
                  Producto <p className="text-red-600">*</p>
                </label>
                <input
                  type="text"
                  id="producto-actividad"
                  className="form-update-activity-admin-content__col1__input"
                /> */}
                  <label
                    htmlFor="tarea-activida"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Tarea <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="tarea"
                    name="tarea"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.tarea}
                  />
                  <label
                    htmlFor="resultado"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Resultado <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="resultado"
                    name="resultado"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.resultado}
                  />
                  <label
                    htmlFor="responsable_actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Responsable de la Actividad{" "}
                    <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="responsable_actividad"
                    name="responsable_actividad"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.responsable_actividad}
                  />
                  <input
                    type="text"
                    id="semillero"
                    name="semillero"
                    defaultValue={actividadInfo.semillero}
                    hidden
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                  />

                  <div className="update-activity-btns">
                    <button className="btn-actualizar-actividad">
                      Actualizar
                    </button>
                    <Link to={"../listar-actividad"}>
                      <button
                        className="btn-cancelar-actividad-uptd"
                        type="button"
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

export default Actualizar_Actividad;
