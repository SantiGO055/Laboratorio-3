window.addEventListener("load",validar);
var cont = 0;

function validar(){
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var boton = document.getElementById("botonIniciarSesion");
    var mostrarDiv = document.getElementById("botonMostrarDiv");

    mostrarDiv.addEventListener("click",mostrar);
    usuario.addEventListener("blur",validarUsuario);
    contraseña.addEventListener("blur",validarContraseña);
    boton.addEventListener("click",validarBoton);
    
}
function validarUsuario(){
    
    if (this.value === "") {
        document.getElementById("usuario").className = document.getElementById("usuario").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("usuario").className = document.getElementById("usuario").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarContraseña(){

    if (this.value === "") {
        document.getElementById("contraseña").className = document.getElementById("contraseña").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("contraseña").className = document.getElementById("contraseña").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarBoton(){
    if (usuario.value === "" || contraseña.value === "") {
        alert("Ingrese campos correctos");
    }
    else{
        window.location.href = "./pagina2.html";
        }

}

function mostrar(){
    document.getElementById("div").hidden = false;
    console.log("muestro");
}