import { GiReturnArrow } from "react-icons/gi";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";
import "./css/Crear_Programa_Formacion.css";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";

function Crear_Programa_Formacion() {
  const [formNewProgram, setFormNewProgram] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormNewProgram({ ...formNewProgram, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verificar si algún campo está vacío
    const anyFieldEmpty = Object.values(formNewProgram).some((value) => value === '');
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
      const response = await clienteAxios.post("/programaformacion/", formNewProgram);
      Swal.fire({
        title: "Programa de Formación creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.error("Error al crear el programa de Formación", error);

      Swal.fire({
        title: "Error al crear el programa de formacion",
        text: 'Todos los campos son obligatorios',
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <div className="add-proyect-btn-return">
        <BotonReturn icon={<GiReturnArrow />} />
      </div>

      <Caja_formularios
        info={
          <Fragment>
            <div className="inputBoxes">
              <h3 className="inputBoxes__titlecaja">
                Crear Programa de formación
              </h3>
              <form className="inputBoxes__olderbox" onSubmit={handleSubmit}>
                <label className="unputBoxes__label">
                  Código Programa de formación<p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  className="unputBoxes__input"
                  name="codigo_programa_formacion"
                  onChange={handleChange}
                />

                <label className="unputBoxes__label">
                  Versión Programa de formación
                  <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="unputBoxes__input"
                  name="version_programa_formacion"
                  onChange={handleChange}
                />

                <label className="unputBoxes__label">
                  Nombre Programa de formación<p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="unputBoxes__input"
                  name="nombre_programa_formacion"
                  onChange={handleChange}
                />
                <div />

                <label className="unputBoxes__label">
                  Número de Ficha<p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  className="unputBoxes__input"
                  name="ficha"
                  onChange={handleChange}
                />

                <label className="unputBoxes__label">
                  Fecha de Inicio Lectiva<p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="unputBoxes__input"
                  name="inicio_lectiva"
                  onChange={handleChange}
                />

                <label className="unputBoxes__label">
                  Fecha Fin Lectiva<p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="unputBoxes__input"
                  name="fin_lectiva"
                  onChange={handleChange}
                />

                <div className="buttonsCreating">
                  <button
                    className="buttonsCreating__crear--green"
                    type="submit"
                  >
                    Crear
                  </button>
                  <Link to={"../visualizar-programa-formacion"}>
                    <button className="buttonsCreating__cancelar" type="button">
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

export default Crear_Programa_Formacion;
