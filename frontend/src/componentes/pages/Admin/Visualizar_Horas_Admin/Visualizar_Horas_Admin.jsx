import React, { Fragment } from 'react';
import './css/Visualizar_Horas_Admin.css';
import Caja_Blanca_v2 from '../../../common/Caja_Blanca_v2';

function Visualizar_Horas_Admin() {
    const contenidoHoras = [
        {
            horas_semana_sennova: "16 horas Asignadas",
            horas_semana_coordinador: "8 horas asignadas",
            fecha_horas_coordinador: "24/05/2024",
        },
    ];

  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">
            <h2 className='title-trimestre'>Trimestre I</h2>
            <h3 className='title-instructor'>Jorge Raigosa</h3>

            <div className='semaforo-container'>
                <div className='semaforo-box green'>
                   Color Horas igual o Mayor a la Asignadas
                </div>

                <div className='semaforo-box orange'>
                    Color Horas Menor a las Asignadas
                </div>

                <div className='semaforo-box red'>
                    Color horas Aun No Asignadas
                </div>
            </div>

            <Caja_Blanca_v2
             contenido={
                <table className='visu-horas-table-admin'>
                    <thead>
                        <tr className='visu-horas-table__tr-admin'>
                            <th className='visu-horas-table__th-admin'>Horas por Semana Asiganadas SENNOVA</th>
                            <th className='visu-horas-table__th-admin'>Horas por semana Asignadas COORDINADOR</th>
                            <th className='visu-horas-table__th-admin'>Fecha Registro Horas por COORDINADOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contenidoHoras.map((visualizarHora, index) => (
                            <tr key={index} className='visu-horas-table__tr-admin'>
                                <td className='visu-horas-table__td-admin'>
                                    {visualizarHora.horas_semana_sennova}
                                </td>
                                <td className='visu-horas-table__td-admin'>
                                    {visualizarHora.horas_semana_coordinador}
                                </td>
                                <td className='visu-horas-table__td-admin'>
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
  )
}

export default Visualizar_Horas_Admin
