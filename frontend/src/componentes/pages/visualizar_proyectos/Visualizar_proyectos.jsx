import { useEffect, useState } from "react";
import clienteAxios from "../../../config/axios";
import BotonReturn from "../../common/BotonReturn";
import './css/VisualizarProyectos.css';
import { useParams } from 'react-router-dom';
const VisualizarProyectos = () => {

    const { id } = useParams();
    console.log("este es el id", id);

    const [proyecto, setProyecto] = useState({});
    const [actividades_proyecto, setActividadesProyecto] = useState({});


    useEffect(() => {

        const getProyecto = async () => {
            try {
                const response = await clienteAxios.get(`/proyectos/${id}/`);
                setProyecto(response.data);
                console.log(response.data)
            } catch (error) {
                console.error("Error al obtener el proyecto", error);
            }
        }

        const getActividadesProyecto = async () => {
            try {
                const response = await clienteAxios.get(`/actividades-proyecto/${id}`);
                setActividadesProyecto(response.data);
                console.log(response.data)
            } catch (error) {
                console.error("Error al obtener las actividades del proyecto", error);
            }
        }
        getProyecto();
        getActividadesProyecto()
    }, [id]);


    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const wsData = [
          [
            "Nombre del Proyecto",
            "Fecha Inicio del Proyecto",
            "Fecha Fin del Proyecto",
            "Codigo SGPS",
            "Descripción del Proyecto",
          ],
          ...proyectosSemillero.map((proyect) => [
            proyect.nombre_proyecto,
            proyect.fecha_inicio,
            proyect.fecha_fin,
            proyect.codigo_sgps,
            proyect.descripcion_proyecto,
          ]),
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
    
        // Agrega estilos de tabla a la hoja de cálculo
        ws["!cols"] = [
          { width: 40 },
          { width: 40 },
          { width: 40 },
          { width: 40 },
          { width: 40 },
          { width: 40 },
        ];
    
        // Genera el archivo Excel
        XLSX.utils.book_append_sheet(wb, ws, "Proyectos");
        XLSX.writeFile(wb, "proyectos.xlsx");
      };



    return (
        <div style={{ background: "#fff", height: "100vh" }} className="main-container__contenedor-hijo">
            <BotonReturn />
            <h1 className="title-info">Información de  Proyecto</h1>

            <div className="card-info-proyecto">
                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Código SGPS</h1>
                    <h1>SGPS-1361</h1>
                </div>
                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Nombre del  proyecto:</h1>
                    <h1>{proyecto?.nombre_proyecto ?? ""}</h1>
                </div>
                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Tipo de proyecto:</h1>
                    <h1>{proyecto.tipo_proyecto}</h1>
                </div>


                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Fecha Inicio:</h1>
                    <h1>{proyecto.fecha_inicio}</h1>
                </div>

                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Fecha fin</h1>
                    <h1>{proyecto.fecha_fin}</h1>
                </div>

                <div >
                    {proyecto.descripcion_proyecto}
                </div>

            </div>
            <div>
                <div className="header-actividad">
                    <h1>Actividades programadas</h1>
                    <button className="activity-card__add-button">Agregar Actividad</button>
                    
                    <button className="activity-card__add-button">Generar Reporte</button>
  
                </div>
{/* 
                {actividades_proyecto.map((actividad) => (
                    <div key={actividad.id} className="activity-card">
                        <h2 className="activity-card__title">{actividad.nombre_actividad}</h2>
                        <div className="activity-card__content">
                            <p><strong>Tarea:</strong> {actividad.tarea}</p>
                            <p><strong>Fecha:</strong> {actividad.fecha_inicio}</p>
                            <p><strong>Resultado:</strong> {actividad.resultado ?? "Pendiente"}</p>
                            <p><strong>Producto:</strong> {actividad.producto ?? "No especificado"}</p>
                            <p><strong>Responsable de la Actividad:</strong> {actividad.responsable_actividad ?? "No asignado"}</p>
                        </div>
                        <div className="activity-card__buttons">
                            <button className="activity-card__edit-button">Editar</button>
                            <button className="activity-card__delete-button">Eliminar</button>
                        </div>
                    </div>
                ))} */}




            </div>
        </div>
    );
}
export default VisualizarProyectos;