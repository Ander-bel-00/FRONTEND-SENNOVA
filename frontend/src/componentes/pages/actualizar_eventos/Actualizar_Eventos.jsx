import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from "../../common/Caja_formularios";
import "./css/Actualizar_Eventos.css";
import { GiReturnArrow } from "react-icons/gi";
import clienteAxios from "../../../config/axios";
import Swal from "sweetalert2";

function Actualizar_Eventos() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [infoEventos, setInfoEventos] = useState({
    nombre_evento: "",
    tipo_de_evento: "",
    fecha_inicio: "",
    fecha_fin: "",
    cantidad_parcticipantes: "",
    nombre_ponente: "",
    lugar_evento: "",
  });

  const apiConsultar = async () => {
    const res = await clienteAxios.get(`/eventos/${id}/`);
    setInfoEventos(res.data);
  };

  useEffect(() => {
    apiConsultar();
  }, []);

  const handleChange = (e) => {
    setInfoEventos({
      ...infoEventos,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarEvento = async (e) => {
    e.preventDefault();
    try {
      // Enviar solicitud para actualizar los datos del proyecto.
      await clienteAxios.put(`/eventos/${id}/`, infoEventos);
      // Mostrar SweetAlert de éxito después de que la solicitud se complete con éxito.
      Swal.fire({
        icon: "success",
        title: "El evento ha sido actualizado",
        text: "La información del evento ha sido actualizado correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-eventos");
      });
    } catch (error) {
      console.error("Error al actualizar los datos del evento:", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos del evento",
      });
    }
  };

  console.log(infoEventos)
  return (
    <div className="main-container__contenedor-hijo">
      <Link>
        <div className="btn-vs-return-lider">
          <BotonReturn />
        </div>
      </Link>

      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="caja-vs-evento-lider">
              <h3 className="caja-vs-evento__tile-lider">Actualizar Evento</h3>
              <form className="form-vs-evento-container-lider" onSubmit={actualizarEvento}>
                <label className="form-vs-evento-container__label-lider">
                  Tipo de Evento <p className="rojo-required">*</p>
                </label>
                <select
                  className="form-vs-evento-container__input-lider"
                  name="tipo_de_evento"
                  onChange={handleChange}
                  value={infoEventos.tipo_de_evento}
                >
                  <option>Seleccione el tipo de evento</option>
                  <option value="Ponencia">Ponencia</option>
                  <option value="CTI">CTI</option>
                </select>
                <div>
                  <label className="form-vs-evento-container__label-lider">
                    Nombre del Evento<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-lider"
                    name="nombre_evento"
                    defaultValue={infoEventos.nombre_evento}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-lider">
                    Cantidad de Participantes<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-lider"
                    name="cantidad_parcticipantes"
                    onChange={handleChange}
                    defaultValue={infoEventos.cantidad_parcticipantes}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-lider">
                    Nombre del Ponente<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-lider"
                    name="nombre_ponente"
                    onChange={handleChange}
                    defaultValue={infoEventos.nombre_ponente}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-lider">
                    Lugar del Evento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-lider"
                    name="lugar_evento"
                    onChange={handleChange}
                    defaultValue={infoEventos.lugar_evento}
                  />
                </div>

                <div>
                  <label className="form-vs-evento-container__label-lider">
                    Fecha de Inicio del Evento{" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    className="form-vs-evento-container__input-lider"
                    name="fecha_inicio"
                    onChange={handleChange}
                    defaultValue={infoEventos.fecha_inicio}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-lider">
                    Fecha de Fin del Evento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    className="form-vs-evento-container__input-lider"
                    name="fecha_fin"
                    onChange={handleChange}
                    defaultValue={infoEventos.fecha_fin}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-lider"
                    name="semillero"
                    defaultValue={infoEventos.semillero}
                    onChange={handleChange}
                    hidden
                  />
                </div>

                <div className="form-vs-event-btns-lider">
                  <button
                    type="submit"
                    className="btn-vs-evento-container__crear--green-lider"
                  >
                    Actualizar
                  </button>

                  <Link to={"../listar-eventos"}>
                    <button
                      type="button"
                      className="btn-vs-evento-container__cancelar-lider"
                    >
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

export default Actualizar_Eventos;
