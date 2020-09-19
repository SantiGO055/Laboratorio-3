window.addEventListener("load",validar);
var cont = 0;

function validar(){
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var boton = document.getElementById("boton");
    var mostrarDiv = document.getElementById("botonMostrarDiv");
    var esconderDiv = document.getElementById("btnEsconder");
    

    // var tabla = document.getElementById("tabla"),rIndex,cIndex;
    


    mostrarDiv.addEventListener("click",accionMostrarDiv);
    esconderDiv.addEventListener("click",cerrarDiv);

    user.addEventListener("blur",validarUser);
    pass.addEventListener("blur",validarPass);
    boton.addEventListener("click",validarBoton);

    
    
    
}

function accionMostrarDiv(){
    document.getElementById("div").hidden = false;     

}
function cerrarDiv(){
    document.getElementById("div").hidden = true; 
}
function validarUser(){
    
    if (this.value === "") {
        document.getElementById("user").className = document.getElementById("user").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("user").className = document.getElementById("user").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarPass(){

    if (this.value === "") {
        document.getElementById("pass").className = document.getElementById("pass").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("pass").className = document.getElementById("pass").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarBoton(){
    if (user.value === "" || pass.value === "") {
        alert("Ingrese usuario y contraseña");
    }
    else{
        /**enviar peticion al servidor */
        }

    }