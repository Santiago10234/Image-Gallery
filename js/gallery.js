const fulImgBox = document.getElementById("fulImgBox")
const fulImg = document.getElementById("fulImg") 

function abrirFulImg(reference){
    fulImgBox.style.display = "flex"
    fulImg.src = reference
}

function cerrarImg() {
    fulImgBox.style.display = "none"
}

const btnSwitch = document.getElementById("switch")

btnSwitch.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardar el modo en localstorage.
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode","true")
    } else {
        localStorage.setItem("dark-mode", "false")
    }

});

// Obtener el modo actual.
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}




document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem('username');

    // Obtener todas las imágenes de la galería
    var images = document.querySelectorAll('.imgFav');

    // Iterar sobre todas las imágenes y agregar el nombre de usuario
    images.forEach(function(image) {
        var usernameElement = image.parentElement.querySelector('.username');
        if (usernameElement) {
            usernameElement.textContent = username;
        }
    });

    // Cargar imágenes guardadas en el localStorage al cargar la página
    cargarImagenesGuardadas();
});

document.getElementById('addImageButton').addEventListener('click', function() {
    // Mostrar el input de archivo para que el usuario pueda seleccionar una imagen
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var imageSrc = event.target.result;

        // Guardar la URL de la imagen en el localStorage
        guardarImagenLocalStorage(imageSrc);

        // Crear y mostrar la imagen en la galería
        mostrarImagenEnGaleria(imageSrc);
    };

    reader.readAsDataURL(file);
});

function cargarImagenesGuardadas() {
    var imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];

    imagenesGuardadas.forEach(function(imageSrc) {
        mostrarImagenEnGaleria(imageSrc);
    });
}

function guardarImagenLocalStorage(imageSrc) {
    var imagenesGuardadas = JSON.parse(localStorage.getItem('imagenes')) || [];
    imagenesGuardadas.push(imageSrc);
    localStorage.setItem('imagenes', JSON.stringify(imagenesGuardadas));
}

function mostrarImagenEnGaleria(imageSrc) {
    var img = document.createElement('img');
    img.classList.add('imgFav');
    img.src = imageSrc;

    var usernameParagraph = document.createElement('p');
    usernameParagraph.textContent = localStorage.getItem('username');

    var container = document.createElement('div');
    container.classList.add('contenedor-img-guardado');
    container.appendChild(img);
    container.appendChild(usernameParagraph);

    document.querySelector('.gallery').appendChild(container);
}