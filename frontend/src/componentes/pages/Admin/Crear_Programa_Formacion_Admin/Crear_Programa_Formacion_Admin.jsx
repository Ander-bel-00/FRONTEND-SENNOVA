import { IoIosReturnLeft } from 'react-icons/io';
import { Fragment, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import BotonReturn from "../../../common/BotonReturn";
import Caja_formularios from '../../../common/Caja_formularios';
import './css/Crear_Programa_Formacion_Admin.css';
import Swal from "sweetalert2";
import clienteAxios from '../../../../config/axios';
import { useAuth } from '../../../../context/AuthContext';

function Crear_Programa_Formacion_Admin() {
  //se implemento la integración en esta interfaz 
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : "";

  const [formNewProgram, setFormNewProgram] = useState({
    semillero: SemilleroID,
    codigo_programa_formacion: "",
    version_programa_formacion: "",
    nombre_programa_formacion: "",
    ficha: "",
    inicio_lectiva: "",
    fin_lectiva: "",
  });

  const handleChange = (event) => {
    //Se refiere al elemento html de donde vienen los valores(name y value)
    const { name, value } = event.target;
    setFormNewProgram({ ...formNewProgram, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verificar si algún campo está vacío
    const anyFieldEmpty = Object.values(formNewProgram).some((value) => value === '');
    if (anyFieldEmpty) {
      // Mostrar Sweet Alert si algún campo está vacío
      Swal.fire({
        title: "Error al crear el evento",
        text: "Debes diligenciar todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const response = await clienteAxios.post("/programaformacion/", formNewProgram);
      Swal.fire({
        title: "Programa de Formación creado exitosamente",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      }).then((result) => {
        return navigate('../visualizar-programa-formacion')
      })
    } catch (error) {
      console.error("Error al crear el programa de Formación", error);

      Swal.fire({
        title: "Error al crear el programa de formacion",
        text: 'Todos los campos son obligatorios',
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="main-container__contenedor-hijo">
     
        <BotonReturn />
      

      <Caja_formularios
        info={
          <Fragment>
            <div className='inputBoxes-admin'>
              <h3 className='inputBoxes__titlecaja-admin'>Crear Programa de formación</h3>
              <form className="inputBoxes__olderbox-admin" onSubmit={handleSubmit}>
                <label className='unputBoxes__label-admin'>
                  Código Programa de formación<p className="rojo-required">*</p>
                </label>
                <input 
                  type="number" 
                  className='unputBoxes__input-admin'
                  name="codigo_programa_formacion" 
                  onChange={handleChange}
                />

                <label className='unputBoxes__label-admin'>
                  Versión Programa de formación<p className="rojo-required">*</p>
                </label>
                <input 
                  type='text' 
                  className='unputBoxes__input-admin'
                  name="version_programa_formacion"
                  onChange={handleChange}
                />

                <label className='unputBoxes__label-admin'>
                  Nombre Programa de formación<p className="rojo-required">*</p>
                </label>
                <input 
                  type='text' 
                  className='unputBoxes__input-admin' 
                  name="nombre_programa_formacion"
                  onChange={handleChange}
                />

                <label className='unputBoxes__label-admin'>
                  Número de Ficha<p className="rojo-required">*</p>
                </label>
                <input 
                  type="number"
                  className='unputBoxes__input-admin' 
                  name="ficha"
                  onChange={handleChange}
                />

                <label className='unputBoxes__label-admin'>
                  Fecha de Inicio Lectiva<p className="rojo-required">*</p>
                </label>
                <input 
                  type="date"
                  className='unputBoxes__input-admin' 
                  name="inicio_lectiva"
                  onChange={handleChange}
                />

                <label className='unputBoxes__label-admin'>
                  Fecha Fin Lectiva<p className="rojo-required">*</p>
                </label>
                <input 
                  type="date"
                  className='unputBoxes__input-admin' 
                  name="fin_lectiva"
                  onChange={handleChange}
                />
                <div/>
                {/* Botones principales */}
                <div className='buttonsCreating-admin'>
                  <button 
                    type='submit'
                    className='buttonsCreating__crear--green-admin'
                  >  Crear
                  </button>

                  <Link to={"../visualizar-programa-formacion"}>
                    <button 
                      className='buttonsCreating__cancelar-admin'
                      type='submit'
                    > Cancelar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Crear_Programa_Formacion_Admin;