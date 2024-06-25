import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import Caja_formularios from "../../../common/Caja_formularios";
import clienteAxios from "../../../../config/axios";
import "./css/Crear_Actividad_Admin.css";
import Swal from "sweetalert2";
import Modal from "react-modal";
import BotonReturn from "../../../common/BotonReturn";

function Crear_Actividad_Admin() {
  const navigate = useNavigate();

  const [formNewActivitySemillero, setFormNewActivitySemillero] = useState({
    nombre_actividad: "",
    tarea: "",
    fecha_inicio: "",
    fecha_fin: "",
    resultado: "",
    responsable_actividad: "",
  });

  const [loading, setLoading] = useState(false);

  const [semilleros, setSemilleros] = useState([]);
  const [selectedNombreSemillero, setSelectedNombreSemillero] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    // e.target se refiere al elemento html de donde vienen los valores(name. value)
    const { name, value } = e.target;
    setFormNewActivitySemillero({ ...formNewActivitySemillero, [name]: value });
  };

  useEffect(() => {
    const obtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get("/lista-semilleros/");
        setSemilleros(res.data);
      } catch (error) {
        console.error("Error al obtener los semilleros", error);
      }
    };

    obtenerSemilleros();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga
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
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const seleccionarSemillero = (semillero) => {
    setFormNewActivitySemillero({
      ...formNewActivitySemillero,
      semillero: semillero.id,
    });
    setSelectedNombreSemillero(semillero.nombre_semillero);
    closeModal();
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
      <BotonReturn />
        <Caja_formularios
          info={
            <div className="create-activity-admin-box">
              <h2 className="text-center create-activity-admin-title">
                Crear Actividad
              </h2>
              <form
                className="form-create-activity-admin-content"
                onSubmit={handleSubmit}
              >
                <label className="form-add-event-container__label-admin">
                  Semillero <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input-admin cursor-pointer"
                  placeholder="Presiona para seleccionar un semillero"
                  name="semillero"
                  onClick={openModal}
                  value={selectedNombreSemillero}
                  readOnly // Para evitar la edición manual
                />
                <input
                  type="hidden"
                  className="form-add-event-container__input-admin"
                  name="semillero"
                  value={formNewActivitySemillero.semillero}
                  readOnly // Para evitar la edición manual
                  onChange={handleChange}
                />

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Seleccionar Semillero"
                  className="modal-semilleros-select"
                  overlayClassName="overlay-Modal"
                >
                  <div className="modal-semilleros-set-content">
                    {semilleros.length > 0 ? (
                      <Fragment>
                        <h2>Selecciona un semillero</h2>
                        <ul>
                          {semilleros.map((semillero) => (
                            <li key={semillero.id}>
                              <button
                                onClick={() => seleccionarSemillero(semillero)}
                              >
                                {semillero.id} - {semillero.nombre_semillero}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </Fragment>
                    ) : (
                      <p>No hay Semilleros disponibles</p>
                    )}
                  </div>
                </Modal>
                <label
                  htmlFor="nombre-actividad"
                  className="form-create-activity-admin-content_col1_label"
                >
                  Nombre de la Actividad <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre-actividad"
                  className="form-create-activity-admin-content_col1_input"
                  name="nombre_actividad"
                  onChange={handleChange}
                />
                <label
                  htmlFor="fecha-entrega-actividad"
                  className="form-create-activity-admin-content_col1_label"
                >
                  Fecha Inicio <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  id="fecha-entrega-actividad"
                  className="form-create-activity-admin-content_col1_input"
                  name="fecha_inicio"
                  onChange={handleChange}
                />
                <label
                  htmlFor="fecha-entrega-actividad"
                  className="form-create-activity-admin-content_col1_label"
                >
                  Fecha final <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  id="fecha-entrega-actividad"
                  className="form-create-activity-admin-content_col1_input"
                  name="fecha_fin"
                  onChange={handleChange}
                />

                <label
                  htmlFor="tarea-actividad"
                  className="form-create-activity-admin-content_col1_label"
                >
                  Tarea <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="tarea-actividad"
                  className="form-create-activity-admin-content_col1_input"
                  name="tarea"
                  onChange={handleChange}
                />
                <label
                  htmlFor="resultado-actividad"
                  className="form-create-activity-admin-content_col1_label"
                >
                  Resultado <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="resultado-actividad"
                  className="form-create-activity-admin-content_col1_input"
                  name="resultado"
                  onChange={handleChange}
                />
                <label
                  htmlFor="responsable-actividad"
                  className="form-create-activity-admin-content_col1_label"
                >
                  Responsable de la Actividad <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="responsable-actividad"
                  className="form-create-activity-admin-content_col1_input"
                  name="responsable_actividad"
                  onChange={handleChange}
                />

                <div className="btns-crear-actividad-admin">
                  <button className="btn-create-actividad-admin" type="submit">
                    {loading ? <span className="spinner"></span> : "Crear"}
                  </button>
                  <Link to={"../listar-actividad"}>
                    <button
                      className="btn-cancelar-actividad-uptd-admin"
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

export default Crear_Actividad_Admin;