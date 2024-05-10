document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();

    // Obtenemos los valores de los campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Obtenemos los datos del usuario guardados en localStorage
    var usuarioGuardado = localStorage.getItem('usuario');

    // Verificamos si el usuario existe
    if (usuarioGuardado) {
        // Convertimos el JSON a un objeto JavaScript
        var usuario = JSON.parse(usuarioGuardado);

        // Verificamos si el nombre de usuario y la contraseña coinciden
        if (usuario.username === username && usuario.password === password) {
            alert('¡Inicio de sesión exitoso!');
            window.location.href="../html/gallery.html"
            // Aquí podrías redirigir al usuario a la página de inicio o hacer cualquier otra acción
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    } else {
        alert('No hay ninguna cuenta registrada');
    }
});
