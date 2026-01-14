// js/login.js

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const usuarioValido = usuarios.find(user => user.email === email && user.password === password);

            if (usuarioValido) {
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioValido));
                alert(`👋 ¡Hola de nuevo, ${usuarioValido.nombre}!`);
                window.location.href = '../index.html'; 
            } else {
                alert("❌ Correo o contraseña incorrectos.");
            }
        });
    }
});