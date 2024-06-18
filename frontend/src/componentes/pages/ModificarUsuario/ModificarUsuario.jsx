import React, { Fragment, useEffect, useState } from "react";
import "./css/ModificarUsuario.css";
import { FaRegEdit } from "react-icons/fa";
import Caja_formularios from "../../common/Caja_formularios";
import { BiSolidReport } from "react-icons/bi";
import Button_Blanco from "../../common/BotonReporte";
import BotonReturn from "../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";

function ModificarUsuario() {
  // Extraer la variable id que se pasa por la url.
  const { id } = useParams();
  // Constante que permitirá realizar navegaciones con el Hook (useNavigate).
  const navigate = useNavigate();
  // Estado que guardará la infomación de la actividad.
  const [usuarioInfo, setUsuarioInfo ] = useState({
    rol: "",
    documento: "",
    password: "",
    name: "",
    email: "",
    last_names: "",
    telefono: "",
    ficha: "",
    inicio_lectiva: "",
    finalizacion_lectiva: "",
    semillero: "",
    programa_formacion: "",
  });
  // Función para realizar una solicitud a la api y traer los datos de la actividad por su id.
  const consultarApi = async () => {
    // Solicitud que me trae los datos de la actividad que se busca por su id.
    const res = await clienteAxios.get(`/update-user/${id}/`);
    // Actualizar el estado actividadInfo con la información obtenida de res (respuesta de la solicitud).
    setUsuarioInfo(res.data);
  }

  // Efecto que realizará una acción una vez se cargue completamente el componente.
  useEffect(() => {
    // Llamar la función consultarApi para ejecutar todo dentro de ella.
    consultarApi();
  }, []);

  // Función de evento, que permitirá realizar actualización en el estado (actividadInfo), con lo nuevo escrtio en cada input.
  const  handleChange = (e) => {
    // Actualizar el estado con lso nuevos valores recibidos.
    setUsuarioInfo({
      // Copiamos todos los campos del estado y lso actualizamos por lo nuevos valores.
      ...usuarioInfo,
      // Buscar la etiqueta html donde el name coinicida con cada campo del estado y extraer su valor.
      [e.target.name]: e.target.value,
    });
  };

  //en esta interfaz realice varios cambios, ya que el formulario debe ir igual al de crear usuario 

  // cosnt [formDataUserAdd, SetFormDataUserAdd] = useState({});

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const usuarioData = {
  //        ...form
  //       }
  //     }
  //   }
 
  const actualizarUsuario = async (e) => {
    e.preventDefault();
    try {
      await clienteAxios.put(`/update-user/${id}/`, usuarioInfo);

      Swal.fire({
        icon: "success",
        title: "El Usuario ha sido actualizada",
        text: "La información del Usuario ha sido actualizada correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../usuarios-getAll")
      });
    } catch (error) {
      console.error("Error al actualizar los datos del Usuario", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos del Usuario",
      });
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="add-proyect-btn-return">
        <BotonReturn icon={<GiReturnArrow />} />
      </div>
      <Caja_formularios
        info={
          <Fragment>
            <div className="update-user-main-container">
              <h1 className="update-users-box__title">Rol Usuario</h1>
              <div className="rol-selection-user">
                <select 
                  id="rol-usuario"
                  name="update-users-box__form-container__options-col1__input"
                >
                  <option value="instructor_investigador">Instructor Investigador</option>
                  <option value="aprendiz_investigador">Aprendiz Investigador</option>
                  <option value="lider_semillero">Líder Semillero</option>
                  <option value="coordinador">Coordinador</option>
                </select>
              </div>
              <form 
                className="update-users-box__form-container"
                onSubmit={actualizarUsuario}>
                {/* <label
                  htmlFor="tipo_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Tipo de documento <p className="rojo-required">*</p>
                </label>
                <select 
                  className="update-users-box__form-container__options-col1__input"
                  id="tipo_documento"
                  name="tipo_documento"
                  onChange={handleChange}
                  defaultValue={usuarioInfo.tipo_documento}
                >
                  <option value="cedula_de_ciudadania">
                    Cédula de Ciudadania
                  </option>
                  <option value="tarjeta_identidad">
                    Tarjeta de Identidad
                  </option>
                  <option value="cedula_extranjeria">
                    Cédula de Extranjería
                  </option>
                </select> */}
                <label
                  htmlFor="documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Número de Documento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="documento"
                  name="documento"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                  onChange={handleChange}
                  defaultValue={usuarioInfo.documento}
                />
                <label
                  htmlFor="name"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Nombres <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                  onChange={handleChange}
                  defaultValue={usuarioInfo.name}
                />
                <label
                  htmlFor="last_names"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Apellidos <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="last_names"
                  name="last_names"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                  onChange={handleChange}
                  defaultValue={usuarioInfo.last_names}
                />
                <label
                  htmlFor="telefono"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Teléfono<p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  id="telefono"
                  name="telefono"
                  className="update-users-box__form-container__options-col1__input"
                  onChange={handleChange}
                  defaultValue={usuarioInfo.telefono}
                />
                <label
                  htmlFor="email"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Email<p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="update-users-box__form-container__options-col1__input"
                  onChange={handleChange}
                  defaultValue={usuarioInfo.telefono}
                />
                <label
                  htmlFor="semillero"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Semillero<p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="semillero"
                  name="semillero"
                  className="update-users-box__form-container__options-col1__input"
                  onChange={handleChange}
                  defaultValue={usuarioInfo.telefono}
                />
                
                {/* <label
                  htmlFor="Correo_Sena"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo SENA <p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                  readOnly
                />
                <label
                  htmlFor="Correo_Personal"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo Personal <p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                /> */}
               
                <button className="update-users-box__form-container__btn-update" type="submit">
                  Modificar
                </button>
              </form>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default ModificarUsuario;
