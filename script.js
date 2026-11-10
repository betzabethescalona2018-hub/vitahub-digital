
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
        const servicioSeleccionado = document.getElementById("servicio").value;
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


/* MENU MOVIL - VITAHUB DIGITAL */

document.addEventListener("DOMContentLoaded", () => {

    const botonMenu =
        document.querySelector(".menu-toggle");

    const menu =
        document.getElementById("menu-principal");

    if (!botonMenu || !menu) {
        return;
    }

    // Abrir y cerrar el menu

    botonMenu.addEventListener("click", () => {

        const abierto =
            menu.classList.toggle("abierto");

        botonMenu.setAttribute(
            "aria-expanded",
            String(abierto)
        );

        botonMenu.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );

        botonMenu.textContent =
            abierto ? "✕" : "☰";

    });

    // Cerrar al seleccionar un enlace

    menu.querySelectorAll("a").forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menu.classList.remove("abierto");

            botonMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botonMenu.setAttribute(
                "aria-label",
                "Abrir menú"
            );

            botonMenu.textContent = "☰";

        });

    });

});

/* ANIMACIONES DE APARICION - VITAHUB DIGITAL */

document.addEventListener("DOMContentLoaded", () => {

    
const elementos = document.querySelectorAll(
    ".servicio-card, " +
    ".proyecto-card, " +
    ".proceso-card, " +
    ".beneficio, " +
    ".faq-item, " +
    ".indicador-card"
);


    // Respetar las preferencias de accesibilidad

    const movimientoReducido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        movimientoReducido ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }

    // Detectar cuando aparecen los elementos

    const observador = new IntersectionObserver(
        (entradas, observer) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                    observer.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    // Activar animaciones

    elementos.forEach((elemento) => {

        elemento.classList.add("revelar");

        observador.observe(elemento);

    });

});


/* ILUMINACION INTERACTIVA - VITAHUB DIGITAL */

document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(
        ".tecnologia-item"
    );

    // Solo activar el efecto con mouse o puntero preciso

    const admiteHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!admiteHover) {
        return;
    }

    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener("pointermove", (evento) => {

            const rect = tarjeta.getBoundingClientRect();

            const x = evento.clientX - rect.left;
            const y = evento.clientY - rect.top;

            tarjeta.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            tarjeta.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });

        tarjeta.addEventListener("pointerleave", () => {

            tarjeta.style.removeProperty("--mouse-x");
            tarjeta.style.removeProperty("--mouse-y");

        });

    });

});
 
/* BOTON VOLVER ARRIBA - VITAHUB DIGITAL */

document.addEventListener("DOMContentLoaded", () => {

    const botonArriba = document.querySelector(
        ".volver-arriba"
    );

    if (!botonArriba) {
        return;
    }

    function actualizarBoton() {

        const mostrar = window.scrollY > 350;

        botonArriba.classList.toggle(
            "visible",
            mostrar
        );

    }

    window.addEventListener(
        "scroll",
        actualizarBoton,
        { passive: true }
    );

    // Revisar también al cargar la página

    actualizarBoton();

});
