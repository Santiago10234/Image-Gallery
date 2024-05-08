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