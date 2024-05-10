import BotonReturn from "../../common/BotonReturn";
import './css/VisualizarProyectos.css';
const VisualizarProyectos = ({ id }) => {

    return (
        <div className="main-container__contenedor-hijo">
            <BotonReturn />
            <h1 className="title-info">Información de  Proyecto</h1>

            <div className="card-info-proyecto">
                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Código SGPS</h1>
                    <h1>SGPS-1361</h1>
                </div>

                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Nombre del  proyecto:</h1>
                    <h1>Hola mundo</h1>
                </div>

                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Fecha Inicio:</h1>
                    <h1>Hola mundo</h1>
                </div>

                <div className="card-info-proyecto__campo">
                    <h1 className="card-info-proyecto__campo__h1">Fecha fin</h1>
                    <h1>Hola mundo</h1>
                </div>

                <div >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quidem ratione error delectus recusandae commodi maxime consectetur nemo culpa, laudantium porro quo iusto repellat assumenda velit nihil autem! Perferendis, rerum.
                </div>

            </div>
            <div>
                <div className="header-actividad">
                <h1>Actividades programadas</h1>
                <button className="activity-card__add-button">Agregar Actividad</button>
                </div>


                <div className="activity-card">
                    <h2 className="activity-card__title">hh</h2>
                    <div className="activity-card__content">
                        <p><strong>Tarea:</strong> ff</p>
                        <p><strong>Fecha:</strong> ff</p>
                        <p><strong>Resultado:</strong> ff</p>
                        <p><strong>Producto:</strong> ff</p>
                        <p><strong>Responsable de la Actividad:</strong> fff</p>
                    </div>
                    <div className="activity-card__buttons">
                        <button className="activity-card__edit-button">Editar</button>
                        <button className="activity-card__delete-button">Eliminar</button>
                    </div>
                </div>




            </div>
        </div>
    );
}
export default VisualizarProyectos;