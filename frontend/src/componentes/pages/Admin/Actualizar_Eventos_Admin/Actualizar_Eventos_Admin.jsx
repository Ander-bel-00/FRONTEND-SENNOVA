import { IoIosReturnLeft } from "react-icons/io";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Actualizar_Eventos_Admin.css";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";

function Actualizar_Eventos_Admin() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [eventosInfo, setEventosInfo] = useState({
        nombre_evento: '',
        tipo_de_evento: '',
        fecha_inicio: '',
        fecha_fin: '',
        cantidad_parcticipantes: '',
        nombre_ponente: '',
        lugar_evento: '',
    });

    const consultarApi = async () => {
        const res = await clienteAxios.get(`/eventos/${id}/`);
        setEventosInfo(res.data);
    }

    // Efecto que realizará una accion una vez se cargue completamente el componente.
  useEffect( () => {
    // llamar la función consultarApi para ejecutar todo dentro de ella.
    consultarApi();
  }, []);


  const handleChange = (e) => {
    setEventosInfo({
        ...eventosInfo,
        [e.target.name]: e.target.value
    });
  };

  const actualizarEvento = async (e) => {
    e.preventDefault();
    try {
      await clienteAxios.put(`/eventos/${id}/`, eventosInfo);
      Swal.fire({
        icon: "success",
        title: "El evento ha sido actualizada",
        text: "La información del evento ha sido actualizada correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-eventos");
      })
    } catch (error) {
      console.error("Error al actualizar los datos del evento", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos del evento",
      });
    }
  };


    return (
        <div className="main-container__contenedor-hijo">
            <Link>
                <div className="btn-vs-return-admin">
                    <BotonReturn
                        link={"/admin/listar-eventos"}
                        icon={<IoIosReturnLeft />}
                    />
                </div>
            </Link>

            <Caja_formularios
                info={
                    <Fragment>
                        {/* Formulario y caja */}
                        <div className="caja-vs-evento-admin">
                            <h3 className="caja-vs-evento__tile-admin">Actualizar Evento</h3>
                            <form className="form-vs-evento-container-admin" onSubmit={actualizarEvento} >

                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Nombre de Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        name="nombre_evento"
                                        id="nombre_evento"
                                        onChange={handleChange}
                                        defaultValue={eventosInfo.nombre_evento}
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <label className="form-vs-evento-container__label-admin">
                                    Tipo de Evento <p className="rojo-required">*</p>
                                </label>
                                <select className="form-vs-evento-container__input-admin"
                                    name="tipo_evento"
                                    onChange={handleChange}
                                    defaultValue={eventosInfo.tipo_de_evento}
                                >
                                    <option>Seleccione el tipo de evento</option>
                                    <option value="Asistente">Asistente</option>
                                    <option value="CTI">CTI</option>
                                </select>

                                <div>
                                    <label className="form-add-event-container__label-admin">
                                        Fecha de Inicio del Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        name="fecha_inicio"
                                        id="fecha_inicio"
                                        onChange={handleChange}
                                        defaultValue={eventosInfo.fecha_inicio}
                                        type="date"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Fecha de Fin del Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        name="fecha_fin"
                                        id="fecha_fin"
                                        onChange={handleChange}
                                        defaultValue={eventosInfo.fecha_fin}
                                        type="date"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Cantidad de Participantes <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        name="cantidad_parcticipantes"
                                        id="cantidad_parcticipantes"
                                        onChange={handleChange}
                                        defaultValue={eventosInfo.cantidad_parcticipantes}
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Nombre de Ponente <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        name="nombre_ponente"
                                        id="nombre_ponente"
                                        onChange={handleChange}
                                        defaultValue={eventosInfo.nombre_ponente}
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Lugar del Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        name="lugar_evento"
                                        id="lugar_evento"
                                        onChange={handleChange}
                                        defaultValue={eventosInfo.lugar_evento}
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <div>
                                <input
                                    type="text"
                                    id="semillero"
                                    name="semillero"
                                    className="form-update-activity-admin-content_col1_input"
                                    defaultValue={eventosInfo.semillero}
                                    onChange={handleChange}
                                    hidden
                                    />
                                </div>

                                
                                <div className="form-vs-event-btns-admin">
                                    <button
                                        type="submit"
                                        className="btn-vs-evento-container__crear--green-admin">
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