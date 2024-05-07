const fulImgBox = document.getElementById("fulImgBox")
const fulImg = document.getElementById("fulImg") 

function abrirFulImg(reference){
    fulImgBox.style.display = "flex"
    fulImg.src = reference
}

function cerrarImg() {
    fulImgBox.style.display = "none"
}
