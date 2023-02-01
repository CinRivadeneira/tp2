import React from 'react';

const ContactoBody = () => {
    return (
        <>
            <br /> <br /> <br />
            <p className="intro">
                Si quieres conocer más acerca de nuestro trabajo o te interesa contratar alguno de nuestros servicios
                completa el
                siguiente formulario y nos pondremos en contacto contigo a la brevedad.

                <br /> <br />
                ¡No olvides contarnos brevemente acerca de tu marca, historia y rubro para poder brindarte un mejor
                asesoramiento!
            </p>

            <section>
                <br /> <br /> <br />
                <form action="" className="form">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" placeholder="José..." />
                    <br />
                    <label for="correo">Correo electrónico</label>
                    <input type="text" name="correo" placeholder="joseperez@gmail.com" />
                    <br />
                    <label for="empresa">Nombre de tu empresa</label>
                    <input type="text" name="empresa" placeholder="Mundo dulce" />
                    <br />
                    <label for="rubro">Rubro</label>
                    <input type="text" name="rubro" placeholder="Pastelería" />
                    <br /><br />
                    <textarea name="consulta" cols="50" rows="13" className="area" placeholder="Describe tu consulta aquí"></textarea>
                    <br />
                    <input type="submit" value="Enviar" id="botonenv" />
                </form>
                <a href="mailto:tucweb2022@gmail.com" id="mailto">mail</a>
            </section>
        </>

    )
}

export default ContactoBody;