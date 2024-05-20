import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosReturnLeft } from "react-icons/io";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from '../../../common/Caja_formularios';
import clienteAxios from '../../../../config/axios';
import Swal from 'sweetalert2';
import "./css/Actualizar_Actividad_Admin.css"


function Actualizar_Actividad_Admin() {
  // Extraer la variable id que se pasa por la url.
  const {id} = useParams();
  // Constante qie permitirá realizar las navegaciones con el hook (useNavigate).
  const navigate = useNavigate();
  // Estado que guardará la información de la actividad.
  const [actividadInfo, setActividadInfo] = useState({
    nombre_actividad: '',
    tarea: '',
    fecha_inicio: '',
    fecha_fin: '',
    resultado: '',
    responsable_actividad: '',
  });

  // Función para realizar una solicitud a la api y traer los datos de la actividad por su id.
  const consultarApi = async () => {
    // Solicitud que me trae los datos de la actividad que se busca por su id.
    const res = await clienteAxios.get(`/activity-semillero/${id}/`);
    // Guardar el estado de la actividadInfo con la infomracion obtenida de res (respuesta de la solicitud).
    setActividadInfo(res.data);
  }

  // Efecto que realizarà una accion una vez se cargue completamente el componente.
  useEffect( () => {
    // llamar la función consultarApi para ejecutar todo dentro de ella.
    consultarApi();
  }, []);

  // Funcion de evento, que permita realizar actualización del estadp(actividadInfo) con lo nuevo escrito en cada input.
  const handleChange = (e) => {
    // Actualizar el estado con nuevos valores recibidos
    setActividadInfo({
      // Copiamos todos los campos del estado y lo actualizamos por los nuevos valores.
      ...actividadInfo,
      // Buscar las etiquetas html donde el name coincida con cada campo del estado a extraer su valor.
      [e.target.name]: e.target.value
    });
  };

  const actualizarActividad = async (e) => {
    e.preventDefault();
    try {
      await clienteAxios.put(`/activity-semillero/${id}/`, actividadInfo);
      Swal.fire({
        icon: "success",
        title: "La actividad ha sido actualizada",
        text: "La información de la actividad ha sido actualizada correctamente.",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate("../listar-actividad");
      })
    } catch (error) {
      console.error("Error al actualizar los datos de la actividad", error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error al intentar actualizar los datos de la actividad",
      });
    }
  };


  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
      <Link>
          <div className="update-proyect-btn-return">
            <BotonReturn
              link={"/lider-semillero/Listar_Actividad"}
              icon={<IoIosReturnLeft />}
            />
          </div>
        </Link>
        <Caja_formularios
         info={
          <Fragment>
            <div className="update-activity-admin-main">
            <h1 className="text-center actualizar-actividades-admin-title">
                ACTUALIZAR ACTIVIDAD
                </h1>
                <form className="form-update-activity-admin-content" onSubmit={actualizarActividad}>
                    <label
                    htmlFor="nombre-actividad"
                    className="form-update-activity-admin-content__col1__label"
                    >
                    Nombre de la Actividad <p className="text-red-600">*</p>
                    </label>
                    <input
                    type="text"
                    id="nombre_actividad"
                    name="nombre_actividad"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.nombre_actividad}
                    />

                    <label
                    htmlFor="tarea-activida"
                    className="form-update-activity-admin-content__col1__label"
                    >
                    Tarea <p className="text-red-600">*</p>
                    </label>
                    <input
                    type="text"
                    id="tarea"
                    name="tarea"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.tarea}
                    />

                   <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                    >
                    Fecha Inicio <p className="text-red-600">*</p>
                    </label>
                    <input
                    type="date"
                    id="fecha_inicio"
                    name="fecha_inicio"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.fecha_inicio}         
                    />

                    <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                    >
                    Fecha Fin <p className="text-red-600">*</p>
                    </label>
                    <input
                    type="date"
                    id="fecha_fin"
                    name="fecha_fin"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.fecha_fin}
                    />

                    <label
                    htmlFor="resultado-actividad"
                    className="form-update-activity-admin-content__col1__label"
                    >
                    Resultado <p className="text-red-600">*</p>
                    </label>
                    <input
                    type="text"
                    id="resultado"
                    name="resultado"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.resultado}
                    />

                   <label
                    htmlFor="responsable-actividad"
                    className="form-update-activity-admin-content__col1__label"
                    >
                    Responsable de la Actividad{" "}
                    <p className="text-red-600">*</p>
                    </label>
                    <input
                    type="text"
                    id="responsable_actividad"
                    name="responsable_actividad"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.responsable_actividad}
                    />

                  
                    <input
                    type="text"
                    id="semillero"
                    name="semillero"
                    className="form-update-activity-admin-content__col1__input"
                    defaultValue={actividadInfo.semillero}
                    onChange={handleChange}
                    hidden
                    />

                    <div className="update-activity-admin-btns">
                      <button className="btn-actualizar-actividad-admin">
                        Actualizar
                      </button>
                      <Link to={"../listar-actividad"}>
                      <button className="btn-cancelar-actividad-uptd-admin" type="button">
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
    </Fragment>
  )
}

export default Actualizar_Actividad_Admin;

