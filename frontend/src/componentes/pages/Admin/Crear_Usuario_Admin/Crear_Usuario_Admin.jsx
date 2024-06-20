import React, { Fragment, useEffect, useState } from "react";
import "./css/Crear_Usuario_Admin.css";
import { useAuth } from "../../../../context/AuthContext";
import Swal from "sweetalert2";
import Caja_formularios from "../../../common/Caja_formularios";
import BotonReturn from "../../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";
import clienteAxios from "../../../../config/axios";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

function Crear_Usuario_Admin() {
  const navigate = useNavigate();

  const [programasFormacion, setProgramasFormacion] = useState([]);
  const [semilleros, setSemilleros] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSemilleros, setModalSemilleros] = useState(false);
  const [nombreProgramaSeleccionado, setNombreProgramaSeleccionado] = useState("");
  const [semillerosSeleccionados, setSemillerosSeleccionados] = useState([]);

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

  useEffect(() => {
    const obtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get("/lista-semilleros/");
        setSemilleros(res.data);
      } catch (error) {
        console.log("Error al obtener todos los semilleros", error);
      }
    };

    obtenerSemilleros();
  }, []);

  const [formDataUser, setFormDataUser] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDataUser({ ...formDataUser, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        ...formDataUser,
        rol: rolUsuario,
        semillero: semillerosSeleccionados // Enviamos los semilleros seleccionados como array
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

  const [rolUsuario, setRolUsuario] = useState("instructor_investigador");
  const [mostrarCamposAprendiz, setMostrarCamposAprendiz] = useState(false);

  const handleRolChange = (e) => {
    const selectedRol = e.target.value;
    setRolUsuario(selectedRol);
    setMostrarCamposAprendiz(selectedRol === "aprendiz_investigador");
    setSemillerosSeleccionados([]); // Limpiar semilleros seleccionados al cambiar el rol
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModalSemilleros = () => {
    setModalSemilleros(true);
  };

  const closeModalSemilleros = () => {
    setModalSemilleros(false);
  };

  const seleccionarPrograma = (programa) => {
    setFormDataUser({
      ...formDataUser,
      id_programa_formacion: programa.id,
      ficha: programa.ficha,
      inicio_lectiva: programa.inicio_lectiva,
      finalizacion_lectiva: programa.fin_lectiva,
    });
    setNombreProgramaSeleccionado(programa.nombre_programa_formacion);
    closeModal();
  };

  const seleccionarSemillero = (event, semillero) => {
    const checked = event.target.checked;
    if (rolUsuario === "aprendiz_investigador" || rolUsuario === "lider_semillero") {
      setSemillerosSeleccionados([semillero.id]); // Solo uno permitido
    } else {
      setSemillerosSeleccionados((prev) => {
        if (checked) {
          return [...prev, semillero.id]; // Add to selected
        } else {
          return prev.filter(id => id !== semillero.id); // Deselect if already selected
        }
      });
    }
  };

  const getSemilleroNombre = (id) => {
    const semillero = semilleros.find(semillero => semillero.id === id);
    return semillero ? semillero.nombre_semillero : "";
  };

  return (
    <div className="main-container__contenedor-hijo">
      <BotonReturn icon={<GiReturnArrow />} />
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
                  <option value="instructor_investigador">Instructor Investigador</option>
                  <option value="aprendiz_investigador">Aprendiz Investigador</option>
                  <option value="lider_semillero">Lider Semillero</option>
                  <option value="cordinador">Coordinador</option>
                </select>
              </div>
              <form className="form-add-user-container" onSubmit={handleSubmit}>
                <label htmlFor="documento" className="form-add-user-container__col1__label">
                  Número de Documento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  name="documento"
                  id="documento"
                  className="form-add-user-container__col1__input"
                  onChange={handleChange}
                />

                <label htmlFor="name" className="form-add-user-container__col1__label">
                  Nombres <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-add-user-container__col1__input"
                  onChange={handleChange}
                />
                <label htmlFor="last_names" className="form-add-user-container__col1__label">
                  Apellidos <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  name="last_names"
                  id="last_names"
                  className="form-add-user-container__col1__input"
                  onChange={handleChange}
                />
                <label htmlFor="telefono" className="form-add-user-container__col1__label">
                  Teléfono <p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  name="telefono"
                  id="telefono"
                  className="form-add-user-container__col1__input"
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-add-user-container__col1__label">
                  Email <p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-add-user-container__col1__input"
                  onChange={handleChange}
                />
                <label htmlFor="semillero" className="form-add-user-container__col1__label">
                  Semillero <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="semillero"
                  name="semillero"
                  className="form-add-user-container__col1__input cursor-pointer"
                  placeholder="Presiona para seleccionar un semillero"
                  value={semillerosSeleccionados.map(getSemilleroNombre).join(", ") || ""}
                  onClick={openModalSemilleros}
                  readOnly
                />
                <input
                  type="hidden"
                  name="semillero"
                  id="semillero"
                  value={JSON.stringify(semillerosSeleccionados)}
                />
                {/* Modal Semilleros */}
                <Modal
                  isOpen={modalSemilleros}
                  onRequestClose={closeModalSemilleros}
                  contentLabel="Selecciona un semillero"
                  className="Modal-programFormacion"
                  overlayClassName="overlay-Modal-programFormacion"
                >
                  <div className="modal-program-content">
                    <h2 className="text-2xl font-bold">Seleccione un semillero</h2>
                    {semilleros.length > 0 ? (
                      <ul>
                        {semilleros.map((semillero) => (
                          <li key={semillero.id}>
                            <label>
                              <input
                                type="checkbox"
                                checked={semillerosSeleccionados.includes(semillero.id)}
                                onChange={(e) => seleccionarSemillero(e, semillero)}
                              />
                              {semillero.id} - {semillero.nombre_semillero}
                            </label>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay semilleros disponibles</p>
                    )}
                    <button onClick={closeModalSemilleros}>Cerrar</button>
                  </div>
                </Modal>
                <label hidden htmlFor="rol" className="form-add-user-container__col1__label">
                  Rol de Usuario <p className="rojo-required">*</p>
                </label>
                <input type="hidden" id="rol" name="rol" value={rolUsuario} />
                {mostrarCamposAprendiz && (
                  <Fragment>
                    <label htmlFor="programa_formacion" className="form-add-user-container__col1__label">
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
                      onChange={handleChange}
                    />

                    <label htmlFor="ficha" className="form-add-user-container__col1__label">
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

                    <label htmlFor="inicio_lectiva" className="form-add-user-container__col1__label">
                      Inicio Lectiva De La Ficha <p className="rojo-required">*</p>
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

                    <label htmlFor="finalizacion_lectiva" className="form-add-user-container__col1__label">
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
                        <h2 className="text-2xl font-bold">Seleccione un programa de formación</h2>
                        {programasFormacion.length > 0 ? (
                          <ul>
                            {programasFormacion.map((programa) => (
                              <li key={programa.id}>
                                <button onClick={() => seleccionarPrograma(programa)}>
                                  {programa.ficha} - {programa.nombre_programa_formacion}
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

                  <Link to={"../usuarios-getAll"}>
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

export default Crear_Usuario_Admin;
