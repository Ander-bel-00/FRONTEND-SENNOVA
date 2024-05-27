import React, { Fragment } from "react"; // Importa React y Fragment de la biblioteca de React
import "./css/Visualizar_Horas_Admin.css"; // Importa el archivo de estilos CSS para este componente
import Caja_Blanca_v2 from "../../../common/Caja_Blanca_v2"; // Importa el componente Caja_Blanca_v2 desde su ubicación

function Visualizar_Horas_Admin() {
  // Define los datos de ejemplo para la tabla
  const contenidoHoras = [
    {
      horas_semana_sennova: "16 horas Asignadas", // Horas asignadas para SENNOVA
      horas_semana_coordinador: "18 horas asignadas", // Horas asignadas para el coordinador
      fecha_horas_coordinador: "24/05/2024", // Fecha de registro de las horas por el coordinador
    },
    
  ];

  // Función para determinar la clase CSS de la fila según las horas asignadas
  const getRowClass = (horasSennova, horasCoordinador) => {
    // Convierte las horas de SENNOVA a número
    const horasSennovaNum = parseInt(horasSennova);
    // Convierte las horas del coordinador a número
    const horasCoordinadorNum = parseInt(horasCoordinador);

    // Si no hay horas asignadas para el coordinador, devuelve la clase "row-red"
    if (!horasCoordinadorNum) {
      return "row-red";
    // Si las horas del coordinador son iguales o mayores a las de SENNOVA, devuelve la clase "row-green"
    } else if (horasCoordinadorNum >= horasSennovaNum) {
      return "row-green";
    // En cualquier otro caso, devuelve la clase "row-orange"
    } else {
      return "row-orange";
    }
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <div className="horas-view-header">
          <div className="header-left">
            <h2 className="title-trimestre">Trimestre I</h2>
            <h3 className="title-instructor">Jorge Raigosa</h3>
          </div>
          <div className="semaforo-container">
            <div className="semaforo-box green">
              Color Horas igual o Mayor a las Asignadas
            </div>
            <div className="semaforo-box orange">
              Color Horas Menor a las Asignadas
            </div>
            <div className="semaforo-box red">
              Color horas Aun No Asignadas
            </div>
          </div>
        </div>

        <Caja_Blanca_v2
          contenido={
            <table className="visu-horas-table-admin">
              <thead>
                <tr className="visu-horas-table__tr-admin">
                  <th className="visu-horas-table__th-admin">
                    Horas por Semana Asignadas SENNOVA
                  </th>
                  <th className="visu-horas-table__th-admin">
                    Horas por semana Asignadas COORDINADOR
                  </th>
                  <th className="visu-horas-table__th-admin">
                    Fecha Registro Horas por COORDINADOR
                  </th>
                </tr>
              </thead>
              <tbody>
                {contenidoHoras.map((visualizarHora, index) => (
                  // Aplica la clase CSS determinada por getRowClass a cada fila
                  <tr
                    key={index}
                    className={`visu-horas-table__tr-admin ${getRowClass(
                      visualizarHora.horas_semana_sennova.split(" ")[0], // Pasa solo el número de horas de SENNOVA a la función
                      visualizarHora.horas_semana_coordinador.split(" ")[0] // Pasa solo el número de horas del coordinador a la función
                    )}`}
                  >
                    <td className="visu-horas-table__td-admin">
                      {visualizarHora.horas_semana_sennova}
                    </td>
                    <td className="visu-horas-table__td-admin">
                      {visualizarHora.horas_semana_coordinador}
                    </td>
                    <td className="visu-horas-table__td-admin">
                      {visualizarHora.fecha_horas_coordinador}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        />
      </div>
    </Fragment>
  );
}

export default Visualizar_Horas_Admin; // Exporta el componente para su uso en otras partes de la aplicación
