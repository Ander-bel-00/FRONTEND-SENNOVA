import React, { Fragment, useState } from "react";
import "./css/Crear_Proyecto_Instructor_Investigador.css";
import Caja_formularios from "../../../common/Caja_formularios";
import BotonReturn from "../../../common/BotonReturn";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import Swal from "sweetalert2";
import clienteAxios from "../../../../config/axios";

function Crear_Proyecto_Instructor_Investigador() {

  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : "";

  const [formNewProyectoSemillero, setFormNewProyectoSemillero] = useState({
    semillero: SemilleroID,
    nombre_proyecto: "",
    fecha_inicio: "",
    fecha_fin: "",
    descripcion_proyecto: "",
    tipo_proyecto: "",
    codigo: "",
  });

  const handleChange = (e) => {
    //Se refiere al elemento html de donde vienen los valores(name y value)
    const { name, value } = e.target;
    setFormNewProyectoSemillero({ ...formNewProyectoSemillero, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldEmpty = Object.values(formNewProyectoSemillero).some(value => value === '');
    if (fieldEmpty) {
      Swal.fire({
        title: "Error al crear el proyecto",
        text: 'Debes diligenciar todos los campos',
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post("/proyectos/", formNewProyectoSemillero);
      Swal.fire({
        title: "Proyecto creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate('../listar-proyectos')
      });
    } catch (error) {
      console.error("Error al crear el proyecto para el semillero", error);
      Swal.fire({
        title: "Error al crear el proyecto",
        text: 'Hubo un error al crear el proyecto',
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }


  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Link>
          <div className="btn-return-proyecto-instructor">
            <BotonReturn />
          </div>
        </Link>

        <Caja_formularios
          info={
            <Fragment>
              <div className=" main-form-instructor-proyecto">
                <h2 className="text-center create-project-instructor-title">
                  Crear Proyecto
                </h2>

                <form className="form-add-pryect-instructor-container" onSubmit={handleSubmit}>
                  <label
                    htmlFor="tipo-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Tipo proyecto <p className="rojo-required">*</p>
                  </label>

                  <select className="form-add-pryect-instructor-container__select"
                    name="tipo_proyecto"
                    onChange={handleChange}
                  >
                    <option selected>Seleccione tipo de proyecto</option>
                    <option >Modernización</option>
                    <option >Innovación</option>
                    <option >Aplicación</option>
                  </select>

                  <label
                    htmlFor="nombre-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Nombre del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                    name="nombre_proyecto"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="codigo-sgps"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Código SGPS (Sistema de gestión de proyectos SENNOVA)<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    id="codigo-sgps"
                    className="form-add-pryect-instructor-container__col1__input"
                    name="codigo"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="descripción-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Descripción del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <textarea
                    type="text"
                    id="descripción-proyecto"
                    cols="28"
                    rows="9"
                    className="form-add-pryect-instructor-container__col1__textarea"
                    name="descripcion_proyecto"
                    onChange={handleChange}
                  >
                  </textarea>

                  <label
                    htmlFor="fecha-inicio-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-inicio-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                    name="fecha_inicio"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="fecha-fin-proyecto"
                    className="form-add-pryect-instructor-container__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha-fin-proyecto"
                    className="form-add-pryect-instructor-container__col1__input"
                    name="fecha_fin"
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name='semillero'
                    onChange={handleChange}
                    value={formNewProyectoSemillero.semillero}
                    hidden
                  />

                  <div className="btns-crear-instructor-projecto">
                    <button type="submit" className="btn-crear-instructor-projecto">Crear</button>
                    <Link to={"../listar-proyectos"}>
                      <button type="submit" className="btn-cancelar-instructor-proyecto">Cancelar</button>
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

export default Crear_Proyecto_Instructor_Investigador;
