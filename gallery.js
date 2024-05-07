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
})