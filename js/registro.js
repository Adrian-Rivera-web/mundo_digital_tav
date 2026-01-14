// js/registro.js

document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.querySelector('.login-form');

    // Verificamos si existe el formulario para evitar errores
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Validaciones
            if (password !== confirmPassword) {
                alert("❌ Las contraseñas no coinciden.");
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const usuarioExistente = usuarios.find(user => user.email === email);
            if (usuarioExistente) {
                alert("⚠️ Este correo ya está registrado.");
                return;
            }

            const nuevoUsuario = { nombre, email, password };
            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert("✅ ¡Registro exitoso!");
            window.location.href = 'login.html';
        });
    }
});