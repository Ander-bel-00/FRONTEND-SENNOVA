import { Fragment } from 'react';
import './css/semillero.css'
import { Link } from 'react-router-dom';
import { FaFileArrowUp } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import BotonBlanco from '../../common/BotonReporte';
const Semillero = () => {


    const integrantes = [
        {
            nombre: 'Yesid'
        },
        {
            nombre: 'Pepito'
        },
        {
            nombre: 'Panela'
        }
    ];

    return (
        <Fragment>
            <div className='semillero-main-container__info-semillero'>
                <section className='semillero-main-container__header'>
                    <BotonBlanco icon={<FaFileArrowUp />} text={'Reporte'} />
                    <BotonBlanco icon={<GrDocumentUpdate />} text={'Actualizar'} />

                </section>
                <section className='semillero-main-container__datos-semillero'>
                    <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '500' }}>SEMILLERO DE INVESTIGACIÓN <br></br> {'Informatica, Desarrollo de software'}</h1>

                    <div className='semillero-main-container__campos-informacion'>
                        <section>
                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>Nombre: </h1>
                                <h2>{'Semillero'}</h2>
                            </div>

                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>Regional: </h1>
                                <h2>{'Semillero'}</h2>
                            </div>

                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>Sectores de aplicacion: </h1>
                                <h2>{'- Semillero '} <br></br> {'- Hola'}</h2>
                            </div>

                            <div >

                                <h1>Intregrantes:</h1>
                                <div className='semillero-main-container__campos-informacion__inputs--integrantes'>
                                    {integrantes.map((integrante) => {
                                        return <h5>{integrante.nombre}</h5>

                                    })}
                                </div>

                            </div>
                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>lineas de Investigación </h1>
                                <h2>{'- Semillero '} <br></br> {'- Hola'}</h2>
                            </div>



                        </section>
                      
                        <section>
                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>Grupo adscrito: </h1>
                                <h2>{'Semillero'}</h2>
                            </div>
                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>Centro Formación:</h1>
                                <h2> {'Semillero'}</h2>
                            </div>
                            <div className='semillero-main-container__campos-informacion__inputs'>
                                <h1>Plan estrategico: </h1>
                                <h2>{'- Semillero '} <br></br> {'- Hola'}</h2>
                            </div>

                        </section>
                    </div>
                </section>

            </div>

        </Fragment>

    )
}

export default Semillero;