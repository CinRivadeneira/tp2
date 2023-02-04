
import Face from "../Img/Redes/Face.png"
import Insta from "../Img/Redes/Insta.png"
import Github from "../Img/Redes/Github.png"
import Linkedin from "../Img/Redes/Linkedin.png"
import "../Css/Footer.css"

const Footer = () => {

    return (
        <section className="footer">
            <footer className="text-white py-4 bg-dark">

                <div className="redes">
                    <img src={Face} width="30" alt="face" />
                    <img src={Insta} width="30" alt="insta" />
                    <img src={Github} width="30" alt="Github" />
                    <img src={Linkedin} width="30" alt="Linkedin" />
                </div>


                <ul className="footer2">
                    <a href="/quienessomos" >Quienes somos  — </a>
                    <a href="/contacto" > Contacto  —</a>
                    <a href="/usuarios" > Usuarios  </a>                   
                </ul>
                <div class="copy">
                    tucWEB 2023,  © Todos los derechos reservados
                </div>
            </footer>
        </section>
    )
}

export default Footer;