import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Crear_Eventos_ins_invg.css";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";
import BotonReturn from "../../../common/BotonReturn";

function Crear_Eventos_ins_invg() {
  
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : [];

  const [nuevoSemillero, setNuevoSemillero] = useState({
    semillero: SemilleroID.length > 0 ? SemilleroID[0] : null,
    nombre_evento: "",
    tipo_de_evento: "",
    fecha_inicio: "",
    fecha_fin: "",
    cantidad_parcticipantes: "",
    nombre_ponente: "",
    lugar_evento: "",
  });

  const handleChange = (e) => {
    //Se refiere al elemento html de donde vienen los valores(name y value)
    const { name, value } = e.target;
    setNuevoSemillero({ ...nuevoSemillero, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldEmpty = Object.values(nuevoSemillero).some(
      (value) => value === ""
    );
    if (fieldEmpty) {
      Swal.fire({
        title: "Error al crear el evento",
        text: "Debes diligenciar todos los campos",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post(
        "/eventos/",
        nuevoSemillero
      );

      Swal.fire({
        title: "Evento creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-eventos");
      });
    } catch (error) {
      console.error("Error al crear el evento para el semillero", error);
      Swal.fire({
        title: "Error al crear el evento",
        text: "Hubo un error al crear el evento",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

return (
  <div className="main-container__contenedor-hijo">
        <BotonReturn  />
    <Caja_formularios
      info={
        <Fragment>
          {/* Formulario y caja */}
          <div className="mainsBoxes-instructor">
            <h2 className="mainsBoxes__tile-instructor">Crear Eventos</h2>

            <form className="form-add-event-container-instructor" onSubmit={handleSubmit}>
              

              <label className="form-add-event-container__label-instructor">
                Nombre del evento <p className="rojo-required-">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-instructor"
                name='nombre_evento'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-instructor">
                Tipo de Evento<p className="rojo-required">*</p>
              </label>
              <select className="form-add-event-container__select-instructor"
                  name='tipo_de_evento'
                  onChange={handleChange}
              >
                <option selected>
                  Seleccione el tipo de evento
                </option>
                <option value='Ponencia'>Ponente</option>
                <option value='CTI'>CTI</option>
              </select>
              
              <label className="form-add-event-container__label-instructor">
                Fecha de Inicio del Evento <p className="rojo-required">*</p>
              </label>
              <input
                type="date"
                className="form-add-event-container__input-instructor"
                name='fecha_inicio'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-instructor">
                Fecha de Fin del Evento <p className="rojo-required">*</p>
              </label>
              <input
                type="date"
                className="form-add-event-container__input-instructor"
                name='fecha_fin'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-instructor">
                Cantidad de participantes <p className="rojo-required">*</p>
              </label>
              <input
                type="number"
                className="form-add-event-container__input-instructor"
                name='cantidad_parcticipantes'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-instructor">
                Nombre del Ponente <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-instructor"
                name='nombre_ponente'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-instructor">
                Lugar del Evento <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-instructor"
                name='lugar_evento'
                onChange={handleChange}
              />

              <input
                type="text"
                className="form-add-event-container__input-instructor"
                name='semillero'
                onChange={handleChange}
                value={nuevoSemillero.semillero}
                hidden
              />

              <div className="btns-crear-evento-instructor">
                <button type="submit" className="btnEvents__crear--green-instructor">
                  Crear
                </button>

                <Link to={"../listar-eventos"}>
                  <button type="submit" className="btnEvents__cancelar-instructor">
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

export default Crear_Eventos_ins_invg;
