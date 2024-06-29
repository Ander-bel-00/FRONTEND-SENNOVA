import "./css/Crear_Eventos.css";
import Caja_formularios from "../../common/Caja_formularios";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import { useAuth } from "../../../context/AuthContext";
import Swal from "sweetalert2";
import clienteAxios from "../../../config/axios";
import { GiFingernail, GiReturnArrow } from "react-icons/gi";

function Crear_Eventos() {
  
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : [];

  const [loading, setLoading] = useState(false)
  const [newEventSemillero, setNewEventSemillero] = useState({
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
    setNewEventSemillero({ ...newEventSemillero, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const fieldEmpty = Object.values(newEventSemillero).some(
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
        newEventSemillero
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
      setLoading(false)
    }
  };

  return (
    <div className="main-container__contenedor-hijo">

      <BotonReturn icon={<GiReturnArrow />}/>

      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="mainsBoxes-lider">
              <h3 className="mainsBoxes-title-lider">Crear Eventos</h3>

              <form className="form-add-event-container-lider" onSubmit={handleSubmit}>

                <label className="form-add-event-container__label-lider">
                  Nombre del evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input-lider"
                  name="nombre_evento"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label-lider">
                  Tipo de Evento <p className="rojo-required">*</p>
                </label>
                <select
                  className="form-add-event-container__input-lider"
                  name="tipo_de_evento"
                  onChange={handleChange}
                >
                  <option selected>Seleccione el tipo de evento</option>
                  <option value="Ponencia">Ponencia</option>
                  <option value="CTI">CTI</option>
                </select>



                <label className="form-add-event-container__label-lider">
                  Fecha de Inicio del Evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-event-container__input-lider"
                  name="fecha_inicio"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label-lider">
                  Fecha de Fin del Evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="date"
                  className="form-add-event-container__input-lider"
                  name="fecha_fin"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label-lider">
                  Cantidad de participantes <p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  className="form-add-event-container__input-lider"
                  name="cantidad_parcticipantes"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label-lider">
                  Nombre del Ponente <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input-lider"
                  name="nombre_ponente"
                  onChange={handleChange}
                />

                <label className="form-add-event-container__label-lider">
                  Lugar del Evento <p className="rojo-required">*</p>
                </label>
                <input
                  type="text"
                  className="form-add-event-container__input-lider"
                  name="lugar_evento"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-add-event-container__input-lider"
                  name="semillero"
                  onChange={handleChange}
                  value={newEventSemillero.semillero}
                  hidden
                />

                <div className="btns-evento-lider">
                  <button type="submit" className="btn-crear-lider">
                    {loading ? <span className="spinner"></span> : "Crear"}
                  </button>

                  <Link to={"../listar-eventos"}>
                    <button type="button" className="btn-cancelar-lider">
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
