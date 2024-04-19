import { TbArrowBack } from "react-icons/tb";
import './css/Actualizar_Eventos.css';
import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import Caja_formularios from '../../common/Caja_formularios';
import './css/Actualizar_Eventos.css';


function Actualizar_Eventos() {
    return (
        <div className="main-container__contenedor-hijo">
            <Link>
                <div className="btn-vs-return">
                    <BotonReturn
                        link={"/lider-semillero/Listar-eventos"}
                        icon={<IoIosReturnLeft />}
                    />
                </div>
            </Link>

            {/* Titulo general */}
            <h2 className='title-vs-evento'>Actualizar Evento CTI</h2>


            <Caja_formularios
                info={
                    <Fragment>
                        {/* Formulario y caja */}
                        <div className="caja-vs-evento">
                            <h3 className="caja-vs-evento__tile">Actualizar Evento</h3>
                            <form className="form-vs-evento-container">
                                <div className="columnOne">
                                    <div>
                                        <label className="form-vs-evento-container__label">
                                            Nombres*
                                        </label>
                                        <br />
                                        <input
                                            type="text" className="form-vs-evento-container__input"
                                        />

                                    </div>
                                    <div>
                                        <label className="form-vs-evento-container__label">
                                            Cantidad*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container__input"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-vs-evento-container__label">
                                            Lugar del Evento*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container__input"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn-vs-evento-container__cancelar"
                                        value={"Cancelar"}
                                    />
                                </div>
                                {/* segunda columna */}
                                <div className="columnTwo">
                                    <div>
                                        <label className="form-add-event-container__label">
                                            Fecha de Inicio del Evento*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container__input"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-vs-evento-container__label">
                                            Fecha de Fin del Evento*
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="form-vs-evento-container__input"
                                        />
                                    </div>

                                    <label className="form-vs-evento-container__label-select">
                                        Tipo*
                                    </label>
                                    <select className="form-vs-evento-container__input">
                                        <option className="columnTwo__op1">Asistente</option>
                                        <option className="columnTwo__op2">Potente</option>
                                    </select>
                                    <input
                                        type="submit"
                                        className="btn-vs-evento-container__crear--green"
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

export default Actualizar_Eventos;