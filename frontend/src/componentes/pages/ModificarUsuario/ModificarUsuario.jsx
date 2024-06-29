import React, { Fragment, useEffect, useState } from "react";
import "./css/ModificarUsuario.css";
import { FaRegEdit } from "react-icons/fa";
import Caja_formularios from "../../common/Caja_formularios";
import { BiSolidReport } from "react-icons/bi";
import Button_Blanco from "../../common/BotonReporte";
import BotonReturn from "../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";
import { useParams, useNavigate, } from "react-router-dom";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
function ModificarUsuario() {


  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    "rol": "",
    "documento": "",
    "name": "",
    "email": "",
    "last_names": "",
    "telefono": "",
    "ficha": null,
    "inicio_lectiva": null,
    "finalizacion_lectiva": null,
    "semillero": [],
    "programa_formacion": null,
    "is_active": ""
  });

  console.log("cambios", user)

  const consultarUser = async () => {
    const res = await clienteAxios.get(`/users/${id}/`);
    console.log(res.data);
    setUser(res.data);
  }

  useEffect(() => {
    consultarUser();

  }, [])


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  

  const actualizarEvento = async (e) => {
    e.preventDefault();
    try {
      // Enviar solicitud para actualizar los datos del proyecto.
      await clienteAxios.patch(`/users/${id}/`, user);
      // Mostrar SweetAlert de éxito después de que la solicitud se complete con éxito.
      Swal.fire({
        icon: "success",
        title: "El usario ha sido actualizado",
        text: "La información del usuario ha sido actualizada correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../usuarios-getAll");
      });
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos del usuario",
      });
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="btn-modificar">
        <BotonReturn />
      </div>
      <Caja_formularios
        info={
          <Fragment>
            <div className="update-user-main-container">
              <h1 className="update-users-box__title">Rol Usuario</h1>
              <form className="update-users-box__form-container" onSubmit={actualizarEvento}>
              <h1 className="update-users-box__title">Rol Usuario</h1>
                {/* <label
                  htmlFor="tipo_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Tipo de documento <p className="rojo-required">*</p>
                </label>
                <select className="update-users-box__form-container__options-col1__input">
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
                
                  htmlFor="numero_documento"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Número de documento <p className="rojo-required">*</p>
                </label>
                <input
                 onChange={handleChange}
                  name="documento"
                  value={user.documento}
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                  
                />
                <label
                  htmlFor="nombres"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Nombres <p className="rojo-required">*</p>
                </label>
                <input
                 onChange={handleChange}
                name="name"
                value={user.name}
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                  
                />
                <label
                  htmlFor="apellidos"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Apellidos <p className="rojo-required">*</p>
                </label>
                <input
                 onChange={handleChange}
                name="last_names"
                value={user.last_names}
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                  
                />
                <label
                  htmlFor="numero_telefonico"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Número telefónico <p className="rojo-required">*</p>
                </label>
                <input
                 onChange={handleChange}
                name="telefono"
                value={user.telefono}
                  type="text"
                  className="update-users-box__form-container__options-col1__input"
                />

                <label
                  htmlFor="Correo_Sena"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo  <p className="rojo-required">*</p>
                </label>
                <input
                 onChange={handleChange}
                  name="email"
                  value={user.email}
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                  
                />
                {/* <label
                  htmlFor="Correo_Personal"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Correo Personal <p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  className="update-users-box__form-container__options-col1__input"
                /> */}
                <label
                  htmlFor="Estado"
                  className="update-users-box__form-container__options-col1__label"
                >
                  Estado <p className="rojo-required">*</p>
                </label>
                <select  onChange={handleChange} className="update-users-box__form-container__options-col1__input" name="is_active">
                  <option value="true"  >Activo</option>
                  <option value="false">Inactivo</option>
                </select>
                <br />
                <button className="update-users-box__form-container__btn-update">
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
