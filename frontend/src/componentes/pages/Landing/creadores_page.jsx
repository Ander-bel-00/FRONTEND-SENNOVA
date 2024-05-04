import './css/Creadores.css';
const CreadoresPage =({nombre, rol}) =>{

    return(

    <div class="profile-card_Yuly">
    <div class="img">
        <img src={""}/>
    </div>
    <div class="caption">
        <h3><strong>{nombre}</strong></h3>
        <p>{rol}</p>
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
    </div>
</div>
);

}
export default CreadoresPage;