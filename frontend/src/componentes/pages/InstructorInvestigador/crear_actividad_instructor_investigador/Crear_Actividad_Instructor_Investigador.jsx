import React, { Fragment } from 'react';
import "./css/Crear_Actividad_Instructor_Investigador.css";
import { IoIosReturnLeft } from "react-icons/io";
import { Link } from 'react-router-dom';
import BotonReturn from '../../../common/BotonReturn';
import Caja_formularios from '../../../common/Caja_formularios';

function Crear_Actividad_Instructor_Investigador() {
  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">
            <Link>
              <div className="update-proyect-btn-return">
                <BotonReturn
                  icon={<IoIosReturnLeft />}
                  link={"/instructor-investigador/Listar_Actividad_Instructor_Investigador"}
                />
              </div>
            </Link>
            <h1 className="text-center crear-actividades-instructor-titulo">ACTIVIDADES</h1>
            <Caja_formularios 
            info={
                <Fragment>
                    <div className="create-activity-instructor-box">
                        <h2 className="text-center create-activity-instructor-title">
                            Añadir Información
                        </h2>
                        <form className="form-create-activity-instructor-content">
                            <div className="form-create-activity-instructor-content__col1">
                                <label 
                                 htmlFor="nombre-actividad"
                                 className="form-create-activity-instructor-content__col1__label"
                                >
                                    Nombre de la Actividad*
                                </label>
                                <input 
                                 type="text" 
                                 id="nombre-actividad"
                                 className="form-create-activity-instructor-content__col1__input"
                                />
                                <label 
                                 htmlFor="fecha-entrega-actividad"
                                 className="create-fecha-activity-instructor-content__col1__label"
                                >
                                    Fecha*
                                </label>
                                <input 
                                 type="date" 
                                 id="fecha-entrega-actividad"
                                 className="form-create-activity-instructor-content__col1__input"
                                />
                                <label 
                                 htmlFor="producto-actividad"
                                 className="create-fecha-activity-instructor-content__col1__label"
                                >
                                    Producto*
                                </label>
                                <input 
                                 type="text" 
                                 id="producto-actividad"
                                 className="form-create-activity-instructor-content__col1__input"
                                />
                                <input 
                                 type="submit" 
                                 value="Cancelar"
                                 className="btn-cancelar-actividad-instructor-uptd"
                                />
                            </div>

                            <div className="form-create-activity-instructor-content__column2">
                                <label 
                                 htmlFor="tarea-activida"
                                 className="create-fecha-activity-instructor-content__col1__label"
                                >
                                    Tarea*
                                </label>
                                <input 
                                 type="text" 
                                 id="tarea-actividad"
                                 className="form-create-activity-instructor-content__col1__input"
                                />
                                <label 
                                 htmlFor="resultado-actividad"
                                 className="create-fecha-activity-instructor-content__col1__label"
                                >
                                    Resultado*
                                </label>
                                <input 
                                 type="text" 
                                 id="resultado-actividad"
                                 className="form-create-activity-instructor-content__col1__input"
                                />
                                <label 
                                 htmlFor="esponsable-actividad"
                                 className="create-fecha-activity-instructor-content__col1__label"
                                >
                                    Responsable de la Actividad*
                                </label>
                                <input 
                                 type="text" 
                                 id="responsable-actividad"
                                 className="form-create-activity-instructor-content__col1__input"
                                />
                                <input 
                                 type="submit" 
                                 value="Crear"
                                 className="btn-actualizar-instructor-actividad"
                                />
                            </div>
                        </form>
                    </div>
                </Fragment>
            }
            />
      </div>
    </Fragment>
  )
}

export default Crear_Actividad_Instructor_Investigador;
