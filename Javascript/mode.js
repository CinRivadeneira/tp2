const boton = document.getElementById("mode");

boton.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");


    // inicia local storage//

if(document.body.classList.contains("darkmode")){
    localStorage.setItem("mode", true)
}else{localStorage.removeItem("mode");
}
});


if(localStorage.getItem("mode")){
    document.body.classList.add("darkmode");
}

