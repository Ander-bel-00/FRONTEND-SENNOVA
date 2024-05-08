import './css/Creadores.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const CreadoresPage =({nombre, rol, img, is_git=true}) =>{


    return(

    <div class="profile-card">
    <div class="img">
        <img src={img}/>
    </div>
    <div class="caption">
        <h3><strong>{nombre}</strong></h3>
        <p>{rol}</p>
        <div class="social-links">
            {is_git && (
                <a href="#"> <FaGithub /> </a>
            )}
            <a href="#"><FaLinkedin /></a>
           
        </div>
    </div>
</div>
);

}
export default CreadoresPage;