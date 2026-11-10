
/* VITAHUB DIGITAL - CONTACTO */

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById(
        "formulario-contacto"
    );

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const servicio = document.getElementById("servicio");
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !servicio.value || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const correoDestino = "VITAHUBCHILE@GMAIL.COM";

        const asunto = "Nueva cotización - VitaHub Digital";

        const cuerpo =
            "SOLICITUD DE COTIZACIÓN\n\n" +
            "Nombre: " + nombre + "\n" +
            "Correo: " + email + "\n" +
            "Servicio: " + servicio.options[servicio.selectedIndex].text.trim() + "\n\n" +
            "Descripción del proyecto:\n" +
            mensaje;

        const enlace =
            "mailto:" + correoDestino +
            "?subject=" + encodeURIComponent(asunto) +
            "&body=" + encodeURIComponent(cuerpo);

        window.location.href = enlace;

    });

});
