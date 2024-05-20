import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Caja_formularios from "../../../common/Caja_formularios";
import "./css/Crear_Eventos_ins_invg.css";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";
import BotonReturn from "../../../common/BotonReturn";

function Crear_Eventos_ins_invg() {
  const { userProfile } = useAuth();
  const navigate = useNavigate();

  const SemilleroID = userProfile ? userProfile.semillero : "";

  const [formNewEventoSemillero, setFormNewEventoSemillero] = useState({
      semillero: SemilleroID,
      nombre_evento: "",
      tipo_de_evento: "",
      fecha_inicio: "",
      fecha_fin: "",
      cantidad_parcticipantes: "",
      nombre_ponente: "",
      lugar_evento: ""      
  });

  const handleChange = (e) => {
      //Se refiere al elemento html de donde vienen los valores(name y value)
      const { name, value } = e.target; 
      setFormNewEventoSemillero({ ...formNewEventoSemillero, [name]: value });
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const fieldEmpty = Object.values(formNewEventoSemillero).some(value => value === '');
      if (fieldEmpty) {
          Swal.fire({
              title: "Error al crear el evento",
              text: 'Debes diligenciar todos los campos',
              icon: "error",
              confirmButtonText: "Aceptar",
          });
          return;
      }
  
  try {
      const response = await clienteAxios.post("/eventos/", formNewEventoSemillero);
      Swal.fire({
          title: "Evento creado exitosamente",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Aceptar",
      }).then((result) => { 
          return navigate('../listar-eventos')
      });
  } catch (error) {
      console.error("Error al crear el evento para el semillero", error);
      Swal.fire({
          title: "Error al crear el evento",
          text: 'Hubo un error al crear el evento',
          icon: "error",
          confirmButtonText: "Aceptar",
      });
  }
}



return (
  <div className="main-container__contenedor-hijo">
        <BotonReturn  />
    <Caja_formularios
      info={
        <Fragment>
          {/* Formulario y caja */}
          <div className="mainsBoxes-admin">
            <h3 className="mainsBoxes__tile-admin">Crear Eventos CTI</h3>

            <form className="form-add-event-container-admin" onSubmit={handleSubmit}>
              

              <label className="form-add-event-container__label-admin">
                Nombre del evento <p className="rojo-required-">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='nombre_evento'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-admin">
                Tipo <p className="rojo-required">*</p>
              </label>
              <select className="form-add-event-container__input-admin"
                  name='tipo_de_evento'
                  onChange={handleChange}
              >
                <option selected>
                  Seleccione el tipo de evento
                </option>
                <option>Asistente</option>
                <option>Ponente</option>
              </select>
              
              <label className="form-add-event-container__label-admin">
                Fecha de Inicio del Evento <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='fecha_inicio'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-admin">
                Fecha de Fin del Evento <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='fecha_fin'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-admin">
                Cantidad de participantes <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='cantidad_parcticipantes'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-admin">
                Nombre del Ponente <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='nombre_ponente'
                onChange={handleChange}
              />

              <label className="form-add-event-container__label-admin">
                Lugar del Evento <p className="rojo-required">*</p>
              </label>
              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='lugar_evento'
                onChange={handleChange}
              />

              <input
                type="text"
                className="form-add-event-container__input-admin"
                name='semillero'
                onChange={handleChange}
                value={formNewEventoSemillero.semillero}
                hidden
              />

              <div className="btns-crear-evento-admin">
                <button type="submit" className="btnEvents__crear--green-admin">
                  Crear
                </button>

                <Link to={"../listar-eventos"}>
                  <button type="submit" className="btnEvents__cancelar-admin">
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
);
}

export default Crear_Eventos_ins_invg;