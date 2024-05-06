let username = document.getElementById("username")
let password = document.getElementById("password")
let button = document.getElementById("button")


button.addEventListener("click", (e) => {
    if (username.value === "Santiago Ariza" & password.value === "password1") {
        e.preventDefault();
        window.location.href = "gallery.html";
    } else {
        alert("the username or password is incorrect")
    }
})