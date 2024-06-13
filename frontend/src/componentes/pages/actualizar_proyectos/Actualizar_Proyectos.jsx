import React, { Fragment, useEffect, useState } from "react";
import "./css/Actualizar_Proyectos.css";
import { GiReturnArrow } from "react-icons/gi";
import Caja_formularios from "../../common/Caja_formularios";
import { Link, useNavigate, useParams } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";
import { IoIosReturnLeft } from "react-icons/io";

function Actualizar_Proyectos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proyectoData, setProyectoData] = useState({
    codigo: "",
    tipo_proyecto: "",
    nombre_proyecto: "",
    descripcion_proyecto: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  const consultarApi = async () => {
    const res = await clienteAxios.get(`/proyectos/${id}/`);
    setProyectoData(res.data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const handleChange = (e) => {
    setProyectoData({
      ...proyectoData,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarProyecto = async (e) => {
    e.preventDefault();
    try {
      // Enviar solicitud para actualizar los datos del proyecto.
      await clienteAxios.put(`/proyectos/${id}/`, proyectoData);
      // Mostrar SweetAlert de éxito después de que la solicitud se complete con éxito.
      Swal.fire({
        icon: "success",
        title: "El proyecto ha sido actualizado",
        text: "La información del proyecto ha sido actualizada correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-Proyectos");
      });
    } catch (error) {
      console.error("Error al actualizar los datos del proyecto:", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos del proyecto",
      });
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--size">
        <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn link={"/"} icon={<IoIosReturnLeft />} />
          </div>
        </Link>
        <Caja_formularios
          info={
            <Fragment>
              <div className="update-proyect-admin-main">
                <h2 className="text-center actualizar-project-admin-title">
                  ACTUALIZAR PROYECTO DE INVESTIGACIÓN
                </h2>
                <form
                  className="form-update-proyects-admin-content"
                  onSubmit={actualizarProyecto}
                >
                  <label
                    htmlFor="codigo"
                    className="form-add-pryect-admin-container__col1__label"
                  >
                    Código SGPS (Sistema de gestión de proyectos SENNOVA){" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    name="codigo"
                    id="codigo"
                    className="form-update-proyects-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={proyectoData.codigo}
                  />
                  <label
                    htmlFor="tipo proyecto"
                    className="form-add-pryect-container__col1__label"
                  >
                    Tipo proyecto <p className="rojo-required">*</p>
                  </label>

                  <select
                    className="form-add-pryect-container__select"
                    name="tipo_proyecto"
                    onChange={handleChange}
                    defaultValue={proyectoData.tipo_proyecto}
                  >
                    <option selected disabled>
                      Seleccione tipo de proyecto
                    </option>
                    <option value="Capacidad Instalada">
                      Capacidad Instalada
                    </option>
                    <option value="Modernizacion">Modernizacion</option>
                    <option value="Innovacion">Innovación</option>
                    <option value="Aplica">Aplicación</option>
                  </select>
                  <label
                    htmlFor="nombre-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Nombre del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="nombre_proyecto"
                    name="nombre_proyecto"
                    className="form-update-proyects-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={proyectoData.nombre_proyecto}
                  />
                  <input
                    type="text"
                    hidden
                    id="semillero"
                    className="form-update-proyects-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={proyectoData.semillero}
                  />
                  <label
                    htmlFor="descripción-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Descripción del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <textarea
                    name="descripcion_proyecto"
                    id="descripcion-del-proyecto"
                    cols="28"
                    rows="9"
                    className="form-update-proyects-admin-content__col1__textarea"
                    onChange={handleChange}
                    defaultValue={proyectoData.descripcion_proyecto}
                  ></textarea>
                  <label
                    htmlFor="fecha-inicio-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Fecha inicio del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    name="fecha_inicio"
                    id="fecha-inicio-del-proyecto"
                    className="form-update-proyects-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={proyectoData.fecha_inicio}
                  />
                  <label
                    htmlFor="fecha-fin-del-proyecto"
                    className="form-update-proyects-admin-content__col1__label"
                  >
                    Fecha Fin del Proyecto <p className="text-red-600">*</p>
                  </label>
                  <input
                  name="fecha_fin"
                    type="date"
                    id="fecha-fin-del-proyecto"
                    className="form-update-proyects-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={proyectoData.fecha_fin}
                  />

                  <div className="update-proyects-admin-btns">
                    <input
                      type="submit"
                      value="Actualizar"
                      className="btn-actualizar-admin-proyecto"
                    />
                    <Link
                      to={"../listar-proyectos"}
                      className="btn-cancelar-actualizar-admin-proyect text-center"
                    >
                      Cancelar
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

export default Actualizar_Proyectos;
