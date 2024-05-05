import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from "../../../common/Caja_formularios";
import './css/Actualizar_Eventos_ins_invg.css';


function Actualizar_Eventos_ins_invg() {
    return (
        <div className="main-container__contenedor-hijo">
            <Link>
                <div className="btn-vs-return__instructor">
                    <BotonReturn
                        link={"/instructor-investigador/Listar-eventos"}
                        icon={<IoIosReturnLeft />}
                    />
                </div>
            </Link>

            {/* Titulo general */}
            <h2 className='title-vs-evento__instructor'>Actualizar Evento CTI</h2>


            <Caja_formularios
                info={
                    <Fragment>
                        {/* Formulario y caja */}
                        <div className="caja-vs-evento-instructor">
                            <h3 className="caja-vs-evento-instructor__tile">Actualizar Evento</h3>
                            <form className="form-vs-evento-container-instructor">
                                <div className="columnOne__instructor">
                                    <div>
                                        <label className="form-vs-evento-container-instructor__label">
                                            Nombres*
                                        </label>
                                        <br />
                                        <input
                                            type="text" className="form-vs-evento-container-instructor__input"
                                        />

                                    </div>
                                    <div>
                                        <label className="form-vs-evento-container-instructor__label">
                                            Cantidad*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container-instructor__input"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-vs-evento-container-instructor__label">
                                            Lugar del Evento*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container-instructor__input"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn-vs-evento-container-instructor__cancelar"
                                        value={"Cancelar"}
                                    />
                                </div>

                                {/* segunda columna */}
                                <div className="columnTwo__instructor">
                                    <div>
                                        <label className="form-add-event-container-instructor__label">
                                            Fecha de Inicio del Evento*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container-instructor__input"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-vs-evento-container-instructor__label">
                                            Fecha de Fin del Evento*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container-instructor__input"
                                        />
                                    </div>

                                    <label className="form-vs-evento-container-instructor__label-select">
                                        Tipo*
                                    </label>
                                    <select className="form-vs-evento-container-instructor__input">
                                        <option className="columnTwo-instructor__op1">Asistente</option>
                                        <option className="columnTwo-instructor__op2">Potente</option>
                                    </select>
                                    <input
                                        type="submit"
                                        className="btn-vs-evento-container-instructor__crear--green"
                                        value={"Crear"}
                                    />
                                </div>
                            </form>
                        </div>
                    </Fragment>
                }
            />
        </div>
    )
}

export default Actualizar_Eventos_ins_invg;