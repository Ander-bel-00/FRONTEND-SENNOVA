import React, { Fragment } from 'react';
import "./css/Crear_Actividad_Admin.css";
import Caja_formularios from '../../../common/Caja_formularios';
import { Link, useNavigate } from 'react-router-dom';

function Crear_Actividad_Admin() {

    const navigate = useNavigate();

    const SemilleroID = userProfile ? userProfile.semillero : "";

    const [formNewActivitySemillero, setFormNewActivitySemillero] = useState({
        semillero: SemilleroID,
        nombre_actividad: "",
        tarea: "",
        fecha_inicio: "",
        fecha_fin: "",
        resultado: "",
        responsable_actividad: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormNewActivitySemillero({ ...formNewActivitySemillero, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const anyFieldEmpty = object.values(formNewActivitySemillero).some(value => value === '');
        if (anyFieldEmpty) {
            Swal.fire({
                title: "Error al crear el Proyecto",
                text: 'Debes diligenciar todos los campos',
                icon: "error",
                confirmButtonText: "Aceptar",
            });
            return;
        }
    
    try {
        const response = await clienteAxios.post("/activity-semillero/", formNewActivitySemillero);
        Swal.fire({
            title: "Proyecto creado exitosamente",
            icon: "success",
            showCancelButton: false,
            confirmButtonText: "Aceptar",
        }).then((result) => {
            return navigate('../listar-actividades')
        });
    } catch (error) {
        console.error("Error al crear el proyecto para el semillero", error);

        Swal.fire({
            title: "Error al crear el Proyecto",
            text: 'Hubo un error al crear el proyecto',
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    }
}
    return (
        <Fragment>
            <div className="main-container__contenedor-hijo">

                <Caja_formularios
                    info={
                        <div className="create-activity-admin-box">
                            <h2 className="text-center create-activity-admin-title">
                                Crear Actividad
                            </h2>
                            <form className="form-create-activity-admin-content" onSubmit={handleSubmit}>
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
                                    name='nombre_actividad'
                                    onChange={handleChange}
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
                                    name='fecha_inicio'
                                    onChange={handleChange}
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
                                    name='fecha_fin'
                                    onChange={handleChange}
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
                                    name='tarea'
                                    onChange={handleChange}
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
                                    name='resultado'
                                    onChange={handleChange}
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
                                    name='responsable_actividad'
                                    onChange={handleChange}
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