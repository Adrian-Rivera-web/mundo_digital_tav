document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form-contacto');
    const btnEnviar = document.getElementById('btn-enviar-mensaje');
    const avisoLogin = document.getElementById('aviso-login');
    
    // Inputs
    const inputNombre = document.getElementById('nombre-contacto');
    const inputEmail = document.getElementById('email-contacto');
    const inputAsunto = document.getElementById('asunto-contacto');
    const inputMensaje = document.getElementById('mensaje-contacto');

    // Errores
    const errorEmail = document.getElementById('error-email');
    const errorAsunto = document.getElementById('error-asunto');
    const errorMensaje = document.getElementById('error-mensaje');

    // 1. VERIFICAR LOGIN
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    if (!usuarioLogueado) {
        // Si no hay usuario, deshabilitamos el formulario
        btnEnviar.disabled = true;
        btnEnviar.style.backgroundColor = "#ccc";
        btnEnviar.style.cursor = "not-allowed";
        
        // Bloquear inputs
        inputNombre.disabled = true;
        inputEmail.disabled = true;
        inputAsunto.disabled = true;
        inputMensaje.disabled = true;

        // Mostrar aviso
        avisoLogin.style.display = "block";
    } else {
        // Si está logueado, autocompletamos nombre y correo (buena UX)
        inputNombre.value = usuarioLogueado.nombre;
        inputEmail.value = usuarioLogueado.email;
    }

    // 2. FUNCIÓN PARA CONTAR PALABRAS
    function contarPalabras(texto) {
        // Elimina espacios extra al inicio/final y separa por espacios
        const palabras = texto.trim().split(/\s+/);
        // Si el texto está vacío, retorna 0, si no, retorna la cantidad
        return texto.trim() === "" ? 0 : palabras.length;
    }

    // 3. VALIDAR AL ENVIAR
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Detener envío para validar

        // Limpiar errores previos
        errorEmail.textContent = "";
        errorAsunto.textContent = "";
        errorMensaje.textContent = "";
        inputEmail.classList.remove("input-error");

        let hayErrores = false;

        // A) VALIDACIÓN CORREO
        // Verificamos que el correo escrito coincida con el del usuario logueado
        if (inputEmail.value !== usuarioLogueado.email) {
            errorEmail.textContent = "El correo no existe (debe coincidir con su cuenta registrada).";
            inputEmail.classList.add("input-error");
            hayErrores = true;
        }

        // B) VALIDACIÓN ASUNTO (Máximo 60 palabras)
        const palabrasAsunto = contarPalabras(inputAsunto.value);
        if (palabrasAsunto > 60) {
            errorAsunto.textContent = `El asunto es muy largo (${palabrasAsunto}/60 palabras).`;
            hayErrores = true;
        }

        // C) VALIDACIÓN MENSAJE (Máximo 300 palabras)
        const palabrasMensaje = contarPalabras(inputMensaje.value);
        if (palabrasMensaje > 300) {
            errorMensaje.textContent = `El mensaje es muy largo (${palabrasMensaje}/300 palabras).`;
            hayErrores = true;
        }

        // Si no hay errores, enviamos
        if (!hayErrores) {
            alert("✅ ¡Mensaje enviado con éxito! Nos contactaremos contigo pronto.");
            form.reset(); // Limpiar formulario
            // Volver a poner los datos del usuario por comodidad
            inputNombre.value = usuarioLogueado.nombre;
            inputEmail.value = usuarioLogueado.email;
        }
    });
});