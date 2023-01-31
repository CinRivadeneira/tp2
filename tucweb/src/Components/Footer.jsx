


const Footer = () => {

    return(
        <footer className="text-white py-4 bg-dark">
            <div className="container">
                <nav className="row">
                  <link to="/" className="col-12 col-md-3 d-flex aling-item-center justyfy-content-center">
                    <img src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " className="mx-2" width="150"/>
                  </link>  
                  <ul>
                    <li className="font-weight-bold mb-2">Quienes somos</li>
                    <li className="font-weight-bold mb-2">Contacto</li>
                    <li className="font-weight-bold mb-2">Usuarios</li>
                  </ul>
                  <u className="col-12 col-md-3 list-unstyled">
                    <li className="d-flex-weight-bold mb-2">SIGUENOS</li>
                    <li className="d-flex justify-content-betwen"></li>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-twitter"></i>
                  </u>

                </nav>

            </div>

        </footer> 

    )
}
 
export default Footer;