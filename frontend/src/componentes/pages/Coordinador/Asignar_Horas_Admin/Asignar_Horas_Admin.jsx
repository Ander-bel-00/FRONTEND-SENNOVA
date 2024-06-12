import React, { Fragment, useState } from "react";
import "./css/Asignar_Horas_Admin.css";
import Caja_formularios from "../../../common/Caja_formularios";
import { BsPersonFillAdd } from "react-icons/bs";

function Asignar_Horas_Admin() {
  const [mostrarInstructores, setMostrarInstructores] = useState(false);
  const [asignarHoras, setAsignarHoras] = useState(false);

  const instructores = [
    { nombre: "Jorge Luis Raigosa Barahona", horas: 16 },
    { nombre: "Yuly Paulin Saenz Agudelo", horas: 16 },
    { nombre: "Jhoan Sebastian Duque Vera", horas: 16 },
  ];

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
                <form className="assign-hours-admin-main-cont">
                  <label
                    htmlFor="semillero"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Semillero <p className="rojo-required">*</p>
                  </label>
                  <select
                    className="form-assign-hours-admin-container__select"
                    name="semillero"
                  >
                    <option selected disabled>
                      Seleccione el semillero de insvestigación
                    </option>
                    <option value="">
                      Informatica Diseño y Desarrollo de Software
                    </option>
                    <option value="">.</option>
                  </select>
                  <label
                    htmlFor="proyecto"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Tipo de Proyecto <p className="rojo-required">*</p>
                  </label>
                  <select
                    className="form-assign-hours-admin-container__select"
                    name="proyecto"
                  >
                    <option selected disabled>
                      Seleccione el proyecto de investigación
                    </option>
                    <option value="">Capacidad Instalada</option>
                    <option value="">Modernización</option>
                  </select>
                  <label
                    htmlFor="nombre_proyecto"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Nombre del Proyecto<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_proyecto"
                    name="nombre_proyecto"
                    className="form-assign-hours-admin-content__col1__input"
                  />
                  <label
                    htmlFor="trimestre"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Trimestre <p className="rojo-required">*</p>
                  </label>
                  <select
                    className="form-assign-hours-admin-container__select"
                    name="trimestre"
                  >
                    <option selected disabled>
                      Seleccione el Trimestre
                    </option>
                    <option value="TrimestreI">Trimestre I</option>
                    <option value="TrimestreII">TRimestre II</option>
                    <option value="TrimestreIII">Trimestre III</option>
                    <option value="TrimestreIV">Trimestre IV</option>
                  </select>
                  <label
                    htmlFor="Instructores_investigadores"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Instructores Investigadores{" "}
                    <p className="rojo-required">*</p>
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
                            onClick={() => setAsignarHoras(true)}
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
                        {instructores.map((instructor, index) => (
                          <div key={index} className="asignar-item">
                            <BsPersonFillAdd className="icon" />
                            <span className="instructor-name">
                              {instructor.nombre}
                            </span>
                            <div className="input-container">
                              <input
                                type="number"
                                defaultValue={instructor.horas}
                                className="horas"
                              />
                            </div>
                            <div className="list-horas">horas</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <label
                    htmlFor="year-investigacion"
                    className="form-assign-hours-admin-content__col1__label"
                  >
                    Año <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="number"
                    id="year-investigacion"
                    name="year-investigacion"
                    className="form-assign-hours-admin-content__col1__input"
                    placeholder="Ingrese el año"
                  />

                  <div className="asig-horas-btns">
                    <button type="button" className="asig-cancelar-btn">
                      Cancelar
                    </button>

                    <button type="submit" className="asig-crear-btn">
                      crear
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
