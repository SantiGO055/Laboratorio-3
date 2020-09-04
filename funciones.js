//la siguiente funcion ejecutara la funcion cargar una vez que se cargue todo el html
window.addEventListener("load",cargar);
//el primer parametro le pongo nombre al evento, nunca con parentesis
//el segundo parametro es una variable que apunta a una funcion

//se puede usar window.onload = cargar; es lo mismo pero solo se puede asignar un solo puntero a funcion

function cargar(){
    var botonEnviar = document.getElementById("enviar");
    var botonLimpiar = document.getElementById("limpiar");
    botonEnviar.addEventListener("click",validarUsuarioPass); //asigno la funcion validar al evento del boton enviar
    botonLimpiar.addEventListener("click",limpiar);
}
function validarUsuarioPass(){
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    
    // alert(botonEnviar.value) si hago esto todavia no se creo el boton y no lo muestra;

    console.log(user + " " + password);
    if (user.value == "user" && password.value == "1234") {
        alert("Usuario y pass correctos");
    }else{
        alert("Usuario y pass incorrectos");
    }
}
function limpiar(){
    var user = document.getElementById("user");
    var password = document.getElementById("password");

    user.value = "";
    password.value = "";
}