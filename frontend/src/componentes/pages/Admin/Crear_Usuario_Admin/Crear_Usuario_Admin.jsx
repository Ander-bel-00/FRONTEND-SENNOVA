import React, { Fragment, useState } from 'react';
import './css/Crear_Usuario_Admin.css';
import { useAuth } from '../../../../context/AuthContext';
import Swal from 'sweetalert2';
import Caja_formularios from '../../../common/Caja_formularios';
import BotonReturn from '../../../common/BotonReturn';
import { GiReturnArrow } from 'react-icons/gi';
import clienteAxios from '../../../../config/axios';
import { Link } from 'react-router-dom';

function Crear_Usuario_Admin() {
    const { userProfile } = useAuth();

    // Verificar si userProfile es null antes de acceder a sus propiedades
    const SemilleroID = userProfile ? userProfile.semillero : "";
  
    const [formDataUser, SetFormDataUser] = useState({
      semillero: SemilleroID,
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      SetFormDataUser({ ...formDataUser, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Verificar si algún campo está vacío
      const anyFieldEmpty = Object.values(formDataUser).some(
        (value) => value === ""
      );
      if (anyFieldEmpty) {
        // Mostrar Sweet Alert si algún campo está vacío
        Swal.fire({
          title: "Error al crear el Usuario",
          text: "Debes diligenciar todos los campos",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
        return;
      }
  
      try {
        const userData = {
          ...formDataUser,
          rol: rolUsuario,
        };
        const response = await clienteAxios.post("/create-user/", userData);
        Swal.fire({
          title: "Usuario registrado exitosamente",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Aceptar",
        }).then((result) => {
          // if (result.isConfirmed) {
          //   window.location.href = "/";
          // }
        });
  
        console.log(response.data);
      } catch (error) {
        console.error("Error al crear el Usuario:", error);
  
        Swal.fire({
          title: "Error al crear el Usuario",
          text: "Hubo un error al crear el Usuario",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    };
  
    // Función para declarar un estado que almacenará el rol seleccionado
    const [rolUsuario, setRolUsuario] = useState("instructor_investigador" || "lider_semillero");
    // Función para mostrar campos adicionales en el formulario solo si se selecciona aprendiz investigador
    const [mostrarCamposAprendiz, setMostrarCamposAprendiz] = useState(false);
  
    // Fucnión para manejar eventos de obtneción del rol según elseleccionado en el select.
    const handleRolChange = (e) => {
      // Obtener el rol del value del option seleccioando dentro del select.
      const selectedRol = e.target.value;
      setRolUsuario(selectedRol);
      // Mostrar campos adicionales solo si se selecciona el rol de "aprendiz-investigador"
      setMostrarCamposAprendiz(selectedRol === "aprendiz_investigador");
    };
  
    return (
      <div className="main-container__contenedor-hijo">
        <div className="add-proyect-btn-return">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
        <Caja_formularios
          info={
            <Fragment>
              <div className="user-add-main">
                <h2 className="text-center user-add-title">Crear Investigador</h2>
                <div className="rol-selection">
                  <select
                    id="rol-usuario"
                    value={rolUsuario}
                    onChange={handleRolChange}
                    className="form-add-user-container__col1__input"
                  >
                    <option value="instructor_investigador">
                      Instructor Investigador
                    </option>
                    <option value="aprendiz_investigador">
                      Aprendiz Investigador
                    </option>
                    <option value="lider_semillero">
                      Lider Semillero
                    </option>
                  </select>
                </div>
                <form className="form-add-user-container" onSubmit={handleSubmit}>
                  {/* <label
                    htmlFor="nombre-proyecto"
                    className="form-add-user-container__col1__label"
                  >
                    Tipo de Documento <p className="rojo-required">*</p>
                  </label>
                  <select
                    type="text"
                    id="tipo-documento"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                  >
                    <option value="">Cédula de Ciudadania</option>
                    <option value="">Tarjeta de Identidad</option>
                    <option value="">Cédula de Extranjeria</option>
                  </select> */}
                  <label
                    htmlFor="documento"
                    className="form-add-user-container__col1__label"
                  >
                    Número de Documento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    name="documento"
                    id="documento"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                  />
  
                  <label
                    htmlFor="name"
                    className="form-add-user-container__col1__label"
                  >
                    Nombres <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="last_names"
                    className="form-add-user-container__col1__label"
                  >
                    Apellidos <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    name="last_names"
                    id="last_names"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="telefono"
                    className="form-add-user-container__col1__label"
                  >
                    Teléfono <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="number"
                    name="telefono"
                    id="telefono"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="form-add-user-container__col1__label"
                  >
                    Email <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="semillero"
                    className="form-add-user-container__col1__label"
                    hidden
                  >
                    Semillero <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="number"
                    name="semillero"
                    id="semillero"
                    className="form-add-user-container__col1__input"
                    onChange={handleChange}
                    value={SemilleroID}
                    readOnly
                    hidden
                  />
                  <label
                    hidden
                    htmlFor="rol"
                    className="form-add-user-container__col1__label"
                  >
                    Rol de Usuario <p className="rojo-required">*</p>
                  </label>
                  <input type="hidden" id="rol" name="rol" value={rolUsuario} />
                  {/* Campos adicionales solo si se selecciona el rol de "aprendiz investigador" */}
  
                  {mostrarCamposAprendiz && (
                    <Fragment>
                      <label
                        htmlFor="ficha"
                        className="form-add-user-container__col1__label"
                      >
                        Número de Ficha <p className="rojo-required">*</p>
                      </label>
                      <input
                        type="number"
                        id="ficha"
                        name="ficha"
                        className="form-add-user-container__col1__input"
                        onChange={handleChange}
                      />
  
                      <label
                        htmlFor="programa_formacion"
                        className="form-add-user-container__col1__label"
                      >
                        Programa de Formación <p className="rojo-required">*</p>
                      </label>
                      <input
                        type="number"
                        id="programa_formacion"
                        name="programa_formacion"
                        className="form-add-user-container__col1__input"
                        onChange={handleChange}
                      />
  
                      <label
                        htmlFor="inicio_lectiva"
                        className="form-add-user-container__col1__label"
                      >
                        Incio Lectiva De La Ficha{" "}
                        <p className="rojo-required">*</p>
                      </label>
                      <input
                        type="date"
                        id="inicio_lectiva"
                        name="inicio_lectiva"
                        className="form-add-user-container__col1__input"
                        onChange={handleChange}
                      />
  
                      <label
                        htmlFor="finalizacion_lectiva"
                        className="form-add-user-container__col1__label"
                      >
                        Fin Lectiva De La Ficha <p className="rojo-required">*</p>
                      </label>
                      <input
                        type="date"
                        id="finalizacion_lectiva"
                        name="finalizacion_lectiva"
                        className="form-add-user-container__col1__input"
                        onChange={handleChange}
                      />
                    </Fragment>
                  )}
                  <div className="user-add-btns">
                    <button type="submit" className="btn-crear-usuario">
                      Crear
                    </button>
  
                    <Link to={"/lider-semillero/usuarios-getAll"}>
                      <button type="button" className="btn-cancelar-usuario">
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
    );
}

export default Crear_Usuario_Admin