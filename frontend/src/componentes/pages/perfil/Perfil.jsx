import Caja_formularios from "../../common/Caja_formularios";
import React, { Fragment, useEffect, useState } from "react";
import "./css/Perfil.css";
import { useAuth } from "../../../context/AuthContext";

function Perfil() {
  const { userProfile } = useAuth();

  // Estado local para almacenar los datos del perfil
  const [perfilData, setPerfilData] = useState({
    rol: '',
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    numeroTelefonico: "",
    correoElectronico: "",
    estado: "",
  });

  // Utiliza useEffect para actualizar el estado local cuando userProfile cambie
  useEffect(() => {
    if (userProfile) {
      // Mapear el rol del usuario a su nombre correspondiente
      let rolNombre;
      switch (userProfile.rol) {
        case 'admin':
          rolNombre = 'Administrador';
          break;
        case 'aprendiz_investigador':
          rolNombre = 'Aprendiz Investigador';
          break;
        case 'instructor_investigador':
          rolNombre = 'Instructor Investigador';
          break;
        case 'lider_semillero':
          rolNombre = 'Líder de Semillero';
          break;
        default:
          rolNombre = userProfile.rol;
          break;
      }
      // Actualiza el estado local con los datos del perfil
      setPerfilData({
        ...perfilData,
        rol: rolNombre,
        numeroDocumento: userProfile.documento || "",
        nombres: userProfile.name || "",
        apellidos: userProfile.last_names || "",
        numeroTelefonico: userProfile.telefono || "",
        correoElectronico: userProfile.email || "",
        // estado: userProfile.estado || "",
      });
    }
  }, [userProfile]);

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Actualiza el estado local con el valor del campo cambiado
    setPerfilData({ ...perfilData, [id]: value });
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Caja_formularios
        info={
          <Fragment>
            <div className=" main-form-perfil">
              <h2 className="text-center create-perfil-title">Perfil</h2>
              <h4 className="text-center create-rol-title">{perfilData.rol}</h4>

              <form className="form-add-perfil-container">
                <label
                  htmlFor="numero-documento"
                  className="form-add-perfil-container__col1__label"
                >
                  Número de Documento
                </label>
                <input
                  type="text"
                  id="numero-documento"
                  className="form-add-perfil-container__col1__input"
                  value={perfilData.numeroDocumento}
                  onChange={handleInputChange}
                  readOnly
                />

                <label
                  htmlFor="nombres"
                  className="form-add-perfil-container__col1__label"
                >
                  Nombres
                </label>
                <input
                  type="text"
                  id="nombres"
                  className="form-add-perfil-container__col1__input"
                  value={perfilData.nombres}
                  onChange={handleInputChange}
                  readOnly
                />

                <label
                  htmlFor="apellidos"
                  className="form-add-perfil-container__col1__label"
                >
                  Apellidos
                </label>
                <input
                  type="text"
                  id="apellidos"
                  className="form-add-perfil-container__col1__input"
                  value={perfilData.apellidos}
                  onChange={handleInputChange}
                  readOnly
                />

                <label
                  htmlFor="numero-telefonico"
                  className="form-add-perfil-container__col1__label"
                >
                  Número telefónico <p className="rojo-required">*</p>
                </label>
                <input
                  type="number"
                  id="numero-telefonico"
                  className="form-add-perfil-container__col1__input"
                  value={perfilData.numeroTelefonico}
                  onChange={handleInputChange}
                />

                {/* <label
                    htmlFor="correo-sena"
                    className="form-add-perfil-container__col1__label"
                  >
                    Correo SENA  
                  </label>
                  <input
                    type="text"
                    id="correo-sena"
                    className="form-add-perfil-container__col1__input"
                  /> */}

                <label
                  htmlFor="correo-personal"
                  className="form-add-perfil-container__col1__label"
                >
                  Correo <p className="rojo-required">*</p>
                </label>
                <input
                  type="email"
                  id="correo-personal"
                  className="form-add-perfil-container__col1__input"
                  value={perfilData.correoElectronico}
                  onChange={handleInputChange}
                />

                {/* <label
                  htmlFor="estado"
                  className="form-add-perfil-container__col1__label"
                >
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  className="form-add-perfil-container__col1__input"
                  value={perfilData.estado}
                  onChange={handleInputChange}
                  readOnly
                /> */}

                <div className="btns-crear-perfil">
                  <button className="btn-crear-perfil" type="button">
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </Fragment>
        }
      />
    </div>
  );
}

export default Perfil;