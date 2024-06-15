import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Actualizar_Eventos_Admin.css";
import { GiReturnArrow } from "react-icons/gi";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";

function Actualizar_Eventos_Admin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventosInfo, setEventosInfo] = useState({
    nombre_evento: "",
    tipo_de_evento: "",
    fecha_inicio: "",
    fecha_fin: "",
    cantidad_parcticipantes: "",
    nombre_ponente: "",
    lugar_evento: "",
  });

  const consultarApi = async () => {
    const res = await clienteAxios.get(`/eventos/${id}/`);
    setEventosInfo(res.data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const handleChange = (e) => {
    setEventosInfo({
      ...eventosInfo,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarEvento = async (e) => {
    e.preventDefault();
    try {
      // Enviar solicitud para actualizar los datos del proyecto.
      await clienteAxios.put(`/eventos/${id}/`, eventosInfo);
      // Mostrar SweetAlert de éxito después de que la solicitud se complete con éxito.
      Swal.fire({
        icon: "success",
        title: "El evento ha sido actualizado",
        text: "La información del evento ha sido actualizada correctamente.",
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

  console.log(eventosInfo)
  return (
    <div className="main-container__contenedor-hijo">
      <Link>
        <div className="btn-vs-return-admin">
          <BotonReturn icon={<GiReturnArrow />} />
        </div>
      </Link>

      <Caja_formularios
        info={
          <Fragment>
            {/* Formulario y caja */}
            <div className="caja-vs-evento-admin">
              <h3 className="caja-vs-evento__tile-admin">Actualizar Evento</h3>
              <form className="form-vs-evento-container-admin" onSubmit={actualizarEvento}>
                <label className="form-vs-evento-container__label-admin">
                  Tipo de Evento <p className="rojo-required">*</p>
                </label>
                <select
                  className="form-vs-evento-container__input-admin"
                  name="tipo_de_evento"
                  onChange={handleChange}
                  value={eventosInfo.tipo_de_evento}
                >
                  <option>Seleccione el tipo de evento</option>
                  <option value="Ponencia">Ponencia</option>
                  <option value="CTI">CTI</option>
                </select>
                <div>
                  <label className="form-vs-evento-container__label-admin">
                    Nombre del Evento<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-admin"
                    name="nombre_evento"
                    defaultValue={eventosInfo.nombre_evento}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-admin">
                    Cantidad de Participantes<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-admin"
                    name="cantidad_parcticipantes"
                    onChange={handleChange}
                    defaultValue={eventosInfo.cantidad_parcticipantes}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-admin">
                    Nombre del Ponente<p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-admin"
                    name="nombre_ponente"
                    onChange={handleChange}
                    defaultValue={eventosInfo.nombre_ponente}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-admin">
                    Lugar del Evento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-admin"
                    name="lugar_evento"
                    onChange={handleChange}
                    defaultValue={eventosInfo.lugar_evento}
                  />
                </div>

                <div>
                  <label className="form-add-event-container__label-admin">
                    Fecha de Inicio del Evento{" "}
                    <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    className="form-vs-evento-container__input-admin"
                    name="fecha_inicio"
                    onChange={handleChange}
                    defaultValue={eventosInfo.fecha_inicio}
                  />
                </div>
                <div>
                  <label className="form-vs-evento-container__label-admin">
                    Fecha de Fin del Evento <p className="rojo-required">*</p>
                  </label>
                  <input
                    type="date"
                    className="form-vs-evento-container__input-admin"
                    name="fecha_fin"
                    onChange={handleChange}
                    defaultValue={eventosInfo.fecha_fin}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-vs-evento-container__input-admin"
                    name="semillero"
                    defaultValue={eventosInfo.semillero}
                    onChange={handleChange}
                    hidden
                  />
                </div>

                <div className="form-vs-event-btns-admin">
                  <button
                    type="submit"
                    className="btn-vs-evento-container__crear--green-admin"
                  >
                    Actualizar
                  </button>

                  <Link to={"../listar-eventos"}>
                    <button
                      type="button"
                      className="btn-vs-evento-container__cancelar-admin"
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

export default Actualizar_Eventos_Admin;
