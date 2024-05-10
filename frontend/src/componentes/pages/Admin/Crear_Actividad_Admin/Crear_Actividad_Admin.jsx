import React, { Fragment, useState } from 'react';
import "./css/Crear_Actividad_Admin.css";
import Caja_formularios from '../../../common/Caja_formularios';
import { Link, useNavigate } from 'react-router-dom';

function Crear_Actividad_Admin() {
    const navigate = useNavigate();

    const [formNewActivity, setFormNewActivity] = useState({
       nombre_actividad: "",
       tarea: "",
       fecha_inicio: "",
       fecha_fin: "",
       resultado: "",
       responsable_actividad: "",
       semillero : "",
    } );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormNewActivity({...formNewActivity, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const anyFieldEmpty = object.values(formNewActivity).some(value => value === '');
        if (anyFieldEmpty){
            Swal.fire({
                title: "Error al crear el proyecto",
                text: 'Debes diligenciar todos los campos',
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            return;
        }
    }


  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">

            <Caja_formularios 
             info={
                <div  className="create-activity-admin-box">
                    <h2 className="text-center create-activity-admin-title">
                        Crear Actividad
                    </h2>
                    <form className="form-create-activity-admin-content">
                        <label
                            htmlFor="nombre-actividad"
                            className="form-create-activity-admin-content__col1__label"
                        >
                            Nombre de la Actividad <p className="rojo-required">*</p>
                        </label>
                        <input
                            type="text"
                            id="nombre-actividad"
                            className="form-create-activity-admin-content__col1__input"
                        />
                        <label
                            htmlFor="fecha-entrega-actividad"
                            className="form-create-activity-admin-content__col1__label"
                        >
                            Fecha Inicio <p className="rojo-required">*</p>
                        </label>
                        <input
                            type="date"
                            id="fecha-entrega-actividad"
                            className="form-create-activity-admin-content__col1__input"
                        />
                        <label
                            htmlFor="fecha-entrega-actividad"
                            className="form-create-activity-admin-content__col1__label"
                        >
                            Fecha final <p className="rojo-required">*</p>
                        </label>
                        <input
                            type="date"
                            id="fecha-entrega-actividad"
                            className="form-create-activity-admin-content__col1__input"
                        />

                        <label
                            htmlFor="tarea-activida"
                            className="form-create-activity-admin-content__col1__label"
                        >
                            Tarea <p className="rojo-required">*</p>
                        </label>
                        <input
                            type="text"
                            id="tarea-actividad"
                            className="form-create-activity-admin-content__col1__input"
                            required
                        />
                        <label
                            htmlFor="resultado-actividad"
                            className="form-create-activity-admin-content__col1__label"
                        >
                            Resultado <p className="rojo-required">*</p>
                        </label>
                        <input
                            type="text"
                            id="resultado-actividad"
                            className="form-create-activity-admin-content__col1__input"
                        />
                        <label
                            htmlFor="responsable-actividad"
                            className="form-create-activity-admin-content__col1__label"
                        >
                            Responsable de la Actividad{" "}
                            <p className="rojo-required">*</p>
                        </label>
                        <input
                            type="text"
                            id="responsable-actividad"
                            className="form-create-activity-admin-content__col1__input"
                        />

                        <div className="btns-crear-actividad-admin">
                            <Link to={"/admin/listar-actividad-admin"}>
                                <button
                                    className="btn-cancelar-actividad-uptd-admin"
                                    type="button"
                                >
                                    Cancelar
                                </button>
                            </Link>
                            <button className="btn-create-actividad-admin" type="button">Crear</button>
                        </div>
                    </form>
                </div>
            }
            />
      </div>
    </Fragment>
  )
}

export default Crear_Actividad_Admin;