import './css/equipo_ejecutor.css';


const Equipo_Ejecutor =({nombre, rol, img}) =>{


    return(

    <div class="profile-card__equipo_eje">
    <div class="img">
        <img src={img}/>
    </div>
    <div class="caption__equipo_eje">
        <h3><strong>{nombre}</strong></h3>
        <p>{rol}</p>
       
    </div>
</div>
);

}
export default Equipo_Ejecutor;