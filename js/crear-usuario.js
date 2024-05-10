document.getElementById('boton').addEventListener('click', function() {
    // Obtenemos los valores de los inputs
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Creamos un objeto con los datos que se pondran en los inputs
    var usuario = {
        username: username,
        email: email,
        password: password
    };

    // Convertimos el objeto a JSON y lo guardamos en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('¡Registro exitoso!');
    window.location.href="../html/index.html"

    // Limpiamos los campos del formulario
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});