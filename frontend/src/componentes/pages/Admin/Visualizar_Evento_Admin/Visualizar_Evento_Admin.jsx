import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { IoIosReturnLeft } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Evento_Admin.css";
import { useParams } from "react-router-dom";
import clienteAxios from "../../../../config/axios";

function Visualizar_Evento_Admin(props) {

  //Obtenemos el prop que nos llega desde la url, por medio de userparams
  const { id } = useParams();

  console.log("Hola este es el id que llega", id);


  const [eventos, setEventos] = useState([]);

//hacemos una consulta a  la api 
  useEffect(() => {
    const obtenerEventos = async () => {

      try {
        const response = await clienteAxios.get(`/eventos/${id}/`)

        console.log("estos son los eventos", response.data)
        setEventos(response.data)

      } catch (error) {
        console.error("Uppps error", error)
      }
    }
    obtenerEventos();
  }, []);

  const Evento = [
    {
      nombre: "Carlos",
      fecha_inicio: "17 marzo 2024",
      fecha_fin: "17 marzo 2024",
      cantidad: 5,
      lugar: "La hermosa",
      tipo: "Ponente",
    },
    {
      nombre: "Carlos",
      fecha_inicio: "17 marzo 2024",
      fecha_fin: "17 marzo 2024",
      cantidad: 5,
      lugar: "La hermosa",
      tipo: "Ponente",
    },
  ];

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <div className="btn-vs-evento-admin">
              <BotonReturn
                link={"/admin/listar-eventos"}
                icon={<IoIosReturnLeft />}
              />
            </div>
            {/* <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear Evento"}
              link={"/admin/crear-eventos"}
            /> */}
          </Fragment>
        }
      />

    

      <div>
        <p>Estos son los eventos</p>
        <h>{eventos.nombre_evento}</h>
      </div>

    </div>
  );
}

export default Visualizar_Evento_Admin;
