import React, { Fragment, useEffect, useState } from 'react';
import "./css/Actualizar_Actividad_Admin.css"
import { IoIosReturnLeft } from "react-icons/io";
import BotonReturn from "../../../common/BotonReturn";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Caja_formularios from '../../../common/Caja_formularios';
import clienteAxios from '../../../../config/axios';
import Swal from 'sweetalert2';


function Actualizar_Actividad_Admin() {
  //Extraer la variable id que se pasa por la url
  const {id} = useParams();
  //Constante que permite realizar navegaciones co el Hook (usenavegate.)
  const navigate = useNavigate();
  //Estado que guardaria la información de la actividad.
  const [actividadInfo, setActividadInfo] = useState({
    nombre_actividad: '', 
    tarea: '',
    fecha_inicio: '',
    fecha_fin: '',
    resultado: '', 
    responsable_actividad: '',
  });

  //Función para realizar una silicutud a la api y traer los datos de la actividad por su id.
  const consultarApi = async () => {
    //Solicitud que me trae los datos de la actividad que se busca por su id
    const res = await clienteAxios.get(`/activity-semillero/${id}/`);
    setActividadInfo(res.data);
  }

  //Efecto que realizara una acción una vez se cargue completamente el camponente.
  useEffect(() => {
    //Llamar la función consultarApi para ejecutar tood de ella.
    consultarApi();
  }, []);

  const handleChange = (e) => {
    //Actualizar el estado con los nuevos valores recibidos.
    setActividadInfo({
      //Copiamos todos los campos del estado y los actualizamos por los nuevos valores. 
      ...actividadInfo,
      //Buscar la etiqueta html donde el name coincida con cada campo del estado y extraer su valor. 
      [e.target.name]: e.target.value
    });
  };

  const actualizarActividad = async (e) => {
    e.preventDefaul();
    try {
      await clienteAxios.put(`/activity-semillero/${id}/`, actividadInfo);

      Swal.fire({
        incon: "success",
        title: "La actividad ha sido actualizada",
        text: "La información de la actividad ha sido actualizada correctamente",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then(() => {
        return navigate("../listar-actividad");
      });
    } catch (error) {
      console.error("Error al actualizar los datos de la actividad", error);
      //Mostrar sweetAlert de error
      Swal.fire({
        incon: "error",
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
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.nombre_actividad}
                  />
                   <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Fecha Inicio<p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha_inicio"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.fecha_inicio}
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Fecha Fin<p className="text-red-600">*</p>
                  </label>
                  <input
                    type="date"
                    id="fecha_fin"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.fecha_fin}
                  />
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Tarea<p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="tarea"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.tarea}
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
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.resultado}
                  />
    
                  <label
                    htmlFor="fecha-entrega-actividad"
                    className="form-update-activity-admin-content__col1__label"
                  >
                    Responsable Actividad<p className="text-red-600">*</p>
                  </label>
                  <input
                    type="text"
                    id="responsable_actividad"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.responsable_actividad}
                  />
                 
                    
                  <input
                    hidden
                    type="date"
                    id="semillero"
                    className="form-update-activity-admin-content__col1__input"
                    onChange={handleChange}
                    defaultValue={actividadInfo.semillero}
                  />

                    <div className="update-activity-admin-btns">
                      <button className="btn-actualizar-actividad-admin">
                        Actualizar
                      </button>
                      <Link to={"/admin/listar-actividad"}>
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

