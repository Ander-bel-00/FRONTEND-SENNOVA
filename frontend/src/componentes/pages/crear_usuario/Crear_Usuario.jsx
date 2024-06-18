import React, { Fragment, useEffect, useState } from "react";
import "./css/Crear_usuario.css";
import { Link, useNavigate } from "react-router-dom";
import Caja_formularios from "../../common/Caja_formularios";
import { GiReturnArrow } from "react-icons/gi";
import BotonReturn from "../../common/BotonReturn";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";
import Modal from "react-modal";

function Crear_Usuario() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nombreProgramaSeleccionado, setNombreProgramaSeleccionado] =
  useState("");
  const [programasFormacion, setProgramasFormacion] = useState([]);

  useEffect(() => {
    const obtenerProgramaFormacion = async () => {
      try {
        const res = await clienteAxios.get("/programaformacion/");
        setProgramasFormacion(res.data);
      } catch (error) {
        console.log("Error al obtener todos los programas de formación", error);
      }
    };

    obtenerProgramaFormacion();
  }, []);

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
        return navigate("../usuarios-getAll");
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
  const [rolUsuario, setRolUsuario] = useState("instructor_investigador");
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const seleccionarPrograma = (programa) => {
    SetFormDataUser({
      ...formDataUser,
      id_programa_formacion: programa.id,
      ficha: programa.ficha,
      inicio_lectiva: programa.inicio_lectiva,
      finalizacion_lectiva: programa.fin_lectiva,
    });
    setNombreProgramaSeleccionado(programa.nombre_programa_formacion);
    closeModal();
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="btn-return-usuarios">
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
                </select>
              </div>
              <form className="form-add-user-container" onSubmit={handleSubmit}>
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
                    htmlFor="programa_formacion"
                    className="form-add-user-container__col1__label"
                  >
                    Programa de Formación <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="programa_formacion"
                    name="programa_formacion"
                    className="form-add-user-container__col1__input cursor-pointer"
                    placeholder="Presiona para seleccionar un programa de formación"
                    value={nombreProgramaSeleccionado || ""}
                    onClick={openModal}
                    readOnly
                  />
                  <input
                    type="hidden"
                    id="id_programa_formacion"
                    name="id_programa_formacion"
                    value={formDataUser.id_programa_formacion || ""}
                    onChange={handleChange} // Asegúrate de tener un manejador de cambio definido si es necesario
                  />

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
                    value={formDataUser.ficha || ""}
                    onChange={handleChange}
                    readOnly
                  />

                  <label
                    htmlFor="inicio_lectiva"
                    className="form-add-user-container__col1__label"
                  >
                    Inicio Lectiva De La Ficha{" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="inicio_lectiva"
                    name="inicio_lectiva"
                    className="form-add-user-container__col1__input"
                    value={formDataUser.inicio_lectiva || ""}
                    onChange={handleChange}
                    readOnly
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
                    value={formDataUser.finalizacion_lectiva || ""}
                    onChange={handleChange}
                    readOnly
                  />
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Seleccionar Programa Formación"
                    className="Modal-programFormacion"
                    overlayClassName="overlay-Modal-programFormacion"
                  >
                    <div className="modal-program-content">
                      <h2 className="text-2xl font-bold">
                        Seleccione un programa de formación
                      </h2>
                      {programasFormacion.length > 0 ? (
                        <ul>
                          {programasFormacion.map((programa) => (
                            <li key={programa.id}>
                              <button
                                onClick={() => seleccionarPrograma(programa)}
                              >
                                {programa.ficha} -{" "}
                                {programa.nombre_programa_formacion}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No hay programas disponibles</p>
                      )}
                    </div>
                  </Modal>
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

export default Crear_Usuario;
