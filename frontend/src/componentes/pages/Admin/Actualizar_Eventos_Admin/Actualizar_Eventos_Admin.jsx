import { IoIosReturnLeft } from "react-icons/io";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Actualizar_Eventos_Admin.css";
<<<<<<< HEAD
=======
import { GiReturnArrow } from "react-icons/gi";
>>>>>>> main

function Actualizar_Eventos_Admin() {
    return (
        <div className="main-container__contenedor-hijo">
            <Link>
                <div className="btn-vs-return-admin">
<<<<<<< HEAD
                    <BotonReturn
                        link={"/admin/listar-eventos"}
                        icon={<IoIosReturnLeft />}
                    />
=======
                <BotonReturn icon={<GiReturnArrow />} />
>>>>>>> main
                </div>
            </Link>

            <Caja_formularios
                info={
                    <Fragment>
                        {/* Formulario y caja */}
                        <div className="caja-vs-evento-admin">
                            <h3 className="caja-vs-evento__tile-admin">Actualizar Evento</h3>
                            <form className="form-vs-evento-container-admin">

                                <label className="form-vs-evento-container__label-admin">
                                    Tipo de Evento <p className="rojo-required">*</p>
                                </label>
                                <select className="form-vs-evento-container__input-admin">
                                    <option>Seleccione el tipo de evento</option>
                                    <option>Asistente</option>
                                    <option>Potente</option>
                                </select>
                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Nombres <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>
                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Cantidad <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>
                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Lugar del Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>

                                <div>
                                    <label className="form-add-event-container__label-admin">
                                        Fecha de Inicio del Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>
                                <div>
                                    <label className="form-vs-evento-container__label-admin">
                                        Fecha de Fin del Evento <p className="rojo-required">*</p>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-vs-evento-container__input-admin"
                                    />
                                </div>


                                <div className="form-vs-event-btns-admin">
                                    <button
                                        type="button"
                                        className="btn-vs-evento-container__crear--green-admin"
                                    >
                                        Actualizar
                                    </button>

                                    <Link to={"/admin/listar-eventos"}>
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
