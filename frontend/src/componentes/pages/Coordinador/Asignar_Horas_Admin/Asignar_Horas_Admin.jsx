import React, { Fragment, useState } from "react";
import "./css/Asignar_Horas_Admin.css";
import Caja_formularios from "../../../common/Caja_formularios";
import { BsPersonFillAdd } from "react-icons/bs";
import Swal from "sweetalert2";
import clienteAxios from "../../../../config/axios";
import { useNavigate } from "react-router-dom";

function Asignar_Horas_Admin() {
  const navigate = useNavigate();
  const [mostrarInstructores, setMostrarInstructores] = useState(false);
  const [asignarHoras, setAsignarHoras] = useState(false);
  const [formAsignarHoras, setFormAsignarHoras] = useState({
    semillero: "",
    proyecto: "",
    trimestre: "",
    instructores: [],
    año: ""
  });

  const instructores = [
    { nombre: "Jorge Luis Raigosa Barahona", horas: 16 },
    { nombre: "Yuly Paulin Saenz Agudelo", horas: 16 },
    { nombre: "Jhoan Sebastian Duque Vera", horas: 16 },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormAsignarHoras({ ...formAsignarHoras, [name]: value });
  };

  const handleInstructorChange = (index, horas) => {
    const updatedInstructores = [...formAsignarHoras.instructores];
    updatedInstructores[index].horas = horas;
    setFormAsignarHoras({ ...formAsignarHoras, instructores: updatedInstructores });
  };

  const handleAddInstructor = (instructor) => {
    setFormAsignarHoras({
      ...formAsignarHoras,
      instructores: [...formAsignarHoras.instructores, instructor]
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar campos del formulario
    const anyFieldEmpty = Object.values(formAsignarHoras).some(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    );

    if (anyFieldEmpty) {
      Swal.fire({
        title: "Error al asignar horas",
        text: "Debes diligenciar todos los campos y seleccionar al menos un instructor",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post(
        "/horas-asignadas/",
        formAsignarHoras
      );
      Swal.fire({
        title: "Horas asignadas exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/horas-asignadas/");
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al asignar las horas",
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
              <div className="assign-hours-admin-main">
                <h2 className="text-center assign-hours-admin-main-title">
                  Asignar Horas
                </h2>
                <form className="assign-hours-admin-main-cont" onSubmit={handleSubmit}>
                  <label
                    htmlFor="semillero"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Semillero <p className="rojo-required">*</p>
                  </label>
                  <select
                    className="form-assign-hours-admin-container__select"
                    name="semillero"
                    onChange={handleChange}
                  >
                    <option selected disabled>
                      Seleccione el semillero de investigación
                    </option>
                    <option value="Informatica Diseño y Desarrollo de Software">
                      Informatica Diseño y Desarrollo de Software
                    </option>
                    <option value="">.</option>
                  </select>
                  <label
                    htmlFor="proyecto"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Proyecto <p className="rojo-required">*</p>
                  </label>
                  <select
                    className="form-assign-hours-admin-container__select"
                    name="proyecto"
                    onChange={handleChange}
                  >
                    <option selected disabled>
                      Seleccione el proyecto de investigación
                    </option>
                    <option value="Capacidad Instalada">Capacidad Instalada</option>
                    <option value="Modernización">Modernización</option>
                  </select>
                  <label
                    htmlFor="trimestre"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Trimestre <p className="rojo-required">*</p>
                  </label>
                  <select
                    className="form-assign-hours-admin-container__select"
                    name="trimestre"
                    onChange={handleChange}
                  >
                    <option selected disabled>
                      Seleccione el Trimestre
                    </option>
                    <option value="TrimestreI">Trimestre I</option>
                    <option value="TrimestreII">Trimestre II</option>
                    <option value="TrimestreIII">Trimestre III</option>
                    <option value="TrimestreIV">Trimestre IV</option>
                  </select>
                  <label
                    htmlFor="Instructores_investigadores"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Instructores Investigadores <p className="rojo-required">*</p>
                  </label>
                  <div
                    onClick={() => setMostrarInstructores(!mostrarInstructores)}
                    className="menu-despliegue"
                  >
                    <span className="form-assign-hours-admin-content__col1__span">
                      Seleccionar Instructores
                    </span>
                  </div>
                  {mostrarInstructores && (
                    <div className="list-instructor">
                      {instructores.map((instructor, index) => (
                        <div key={index} className="instructor-item">
                          <BsPersonFillAdd className="icon-ins" />
                          <span className="instructor-name">
                            {instructor.nombre}
                          </span>
                          <button
                            type="button"
                            className="establecer-button"
                            onClick={() => {
                              handleAddInstructor(instructor);
                              setAsignarHoras(true);
                            }}
                          >
                            Establecer
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {asignarHoras && (
                    <div className="asignar-horas">
                      <button type="button" className="asignar-horas-button">
                        Asignar Horas
                      </button>
                      <div className="asignar-list">
                        {formAsignarHoras.instructores.map((instructor, index) => (
                          <div key={index} className="asignar-item">
                            <BsPersonFillAdd className="icon" />
                            <span className="instructor-name">
                              {instructor.nombre}
                            </span>
                            <div className="input-container">
                              <input
                                type="number"
                                value={instructor.horas}
                                className="horas"
                                onChange={(e) =>
                                  handleInstructorChange(index, e.target.value)
                                }
                              />
                            </div>
                            <div className="list-horas">horas</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <label
                    htmlFor="año-investigacion"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Año <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="number"
                    id="año-investigacion"
                    name="año"
                    className="form-assign-hours-admin-content__col1__input"
                    placeholder="Ingrese el año"
                    onChange={handleChange}
                  />

                  <div className="asig-horas-btns">
                    <button type="button" className="asig-cancelar-btn" onClick={() => navigate("/../")}>
                      Cancelar
                    </button>
                    <button type="submit" className="asig-crear-btn">
                      Crear
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

export default Asignar_Horas_Admin;
