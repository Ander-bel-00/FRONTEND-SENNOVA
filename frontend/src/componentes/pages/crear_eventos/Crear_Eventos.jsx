import "./css/Crear_Eventos.css";
import Caja_formularios from "../../common/Caja_formularios";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import { useAuth } from "../../../context/AuthContext";
import Swal from "sweetalert2";
import clienteAxios from "../../../config/axios";

function Crear_Eventos() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Obtener el SemilleroID del userProfile
  const SemilleroID = userProfile ? userProfile.semillero : [];

  const [formNewEventoSemillero, setFormNewEventoSemillero] = useState({
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
    setFormNewEventoSemillero({ ...formNewEventoSemillero, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga
    try {
      const response = await clienteAxios.post(
        "/eventos/",
        formNewEventoSemillero
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
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
      <BotonReturn />

      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes">
              <h3 className="mainsBoxes__tile">Crear Eventos CTI</h3>

              <form
                className="form-add-event-container"
                onSubmit={handleSubmit}
              >
                <label className="form-add-event-container__label">
                  Nombre del evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input"
                  name="nombre_evento"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label-admin">
                  Tipo de Evento <p className="rojo-required">*</p>
                </label>
                <select
                  className="form-add-event-container__input-admin"
                  name="tipo_de_evento"
                  onChange={handleChange}
                >
                  <option selected>Seleccione el tipo de evento</option>
                  <option value="Ponencia">Ponencia</option>
                  <option value="CTI">CTI</option>
                </select>

                <label className="form-add-event-container__label">
                  Fecha de Inicio del Evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-event-container__input"
                  name="fecha_inicio"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label">
                  Fecha de Fin del Evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-event-container__input"
                  name="fecha_fin"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label">
                  Cantidad de participantes <p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  className="form-add-event-container__input"
                  name="cantidad_parcticipantes"
                  onChange={handleChange}
                />
                <label className="form-add-event-container__label-admin">
                  Nombre del Ponente <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                  name="nombre_ponente"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label">
                  Lugar del Evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input"
                  name="lugar_evento"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-add-event-container__input-admin"
                  name="semillero"
                  onChange={handleChange}
                  value={formNewEventoSemillero.semillero}
                  hidden
                />

                <div className="btns-crear-evento">
                  <button type="submit" className="btnEvents__crear--green">
                    {loading ? <span className="spinner"></span> : "Crear"}
                  </button>

                  <Link to={"../listar-eventos"}>
                    <button type="button" className="btnEvents__cancelar">
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

export default Crear_Eventos;