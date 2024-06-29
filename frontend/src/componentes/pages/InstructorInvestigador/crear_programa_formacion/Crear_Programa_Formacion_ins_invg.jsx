import { IoIosReturnLeft } from "react-icons/io";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Crear_Programa_Formacion_ins_invg.css";
import { GiReturnArrow } from "react-icons/gi";
import Swal from "sweetalert2";
import clienteAxios from "../../../../config/axios";

function Crear_Programa_Formacion_ins_invg() {

  const [loading, setLoading] = useState(false)
  const [formularioNewPrograma, setFormularioNewPrograma] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormularioNewPrograma({ ...formularioNewPrograma, [name]: value });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    // Verificar si algún campo está vacío
    const anyFieldEmpty = Object.values(formularioNewPrograma).some((value) => value === '');
    if (anyFieldEmpty) {
      // Mostrar Sweet Alert si algún campo está vacío
      Swal.fire({
        title: "Debes diligenciar todos los campos",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post("/programaformacion/", formularioNewPrograma);
      Swal.fire({
        title: "Programa de Formación creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate('../visualizar-programa-formacion')
      })
    } catch (error) {
      console.error("Error al crear el programa de Formación", error);

      Swal.fire({
        title: "Error al crear el programa de formacion",
        text: 'Debes diligenciar todos los campos',
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="btn-return-programa">
        <BotonReturn icon={<GiReturnArrow />} />
      </div>

      <Caja_formularios
        info={
          <Fragment>
            <div className=" main-form-program-instructor">
              <h2 className="create-program-title-instructor">
                Crear Programa de Formación
              </h2>

              <form className="form-add-program-container-instructor" onSubmit={handleSubmit}>

                <label className="form-add-program-container-label-instructor">
                  Número de Ficha<p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  className="form-add-program-container-input-instructor"
                  name="ficha"
                  onChange={handleChange}
                />

                <label
                  htmlFor="nombre"
                  className="form-add-program-container-label-instructor"
                >
                  Nombre del Programa de Formación<p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="form-add-program-container-input-instructor"
                  name="nombre_programa_formacion"
                  onChange={handleChange}
                />

                <label
                  htmlFor="version"
                  className="form-add-program-container-label-instructor"
                >
                  Versión del Programa de Formación<p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="version"
                  className="form-add-program-container-input-instructor"
                  name="version_programa_formacion"
                  onChange={handleChange}
                />

                <label
                  htmlFor="codigo"
                  className="form-add-program-container-label-instructor"
                >
                  Código del Programa de Formación<p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  id="codigo"
                  className="form-add-program-container-input-instructor"
                  name="codigo_programa_formacion"
                  onChange={handleChange}
                />

                <label className="form-add-program-container-label-instructor">
                  Fecha de Inicio Lectiva<p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-program-container-input-instructor"
                  name="inicio_lectiva"
                  onChange={handleChange}
                />

                <label className="form-add-program-container-label-instructor">
                  Fecha Fin Lectiva<p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-program-container-input-instructor"
                  name="fin_lectiva"
                  onChange={handleChange}
                />

                <div className="btns-crear-program">
                  <button className="btn-crear-program" type="submit">
                    {loading ? <span className="spinner"></span> : "Crear" }
                  </button>

                  <Link to={"../visualizar-programa-formacion"}>
                    <button type="button" className="btn-cancelar-program">
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

export default Crear_Programa_Formacion_ins_invg;
