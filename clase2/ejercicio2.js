window.addEventListener("load",validar);
var cont = 0;

function validar(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var boton = document.getElementById("boton");
    var mostrarDiv = document.getElementById("botonDiv");
    var esconderDiv = document.getElementById("btnEsconder");
    var eliminarCelda = document.getElementById("eliminarCelda");

    // var tabla = document.getElementById("tabla"),rIndex,cIndex;
    


    mostrarDiv.addEventListener("click",accionMostrarDiv);
    esconderDiv.addEventListener("click",cerrarDiv);

    nombre.addEventListener("blur",validarNombre);
    apellido.addEventListener("blur",validarApellido);
    boton.addEventListener("click",validarBoton);

    
    eliminarCelda.addEventListener("click",eliminandoCelda);
    
    
}

function accionMostrarDiv(){
    document.getElementById("div").hidden = false;     

}
function cerrarDiv(){
    document.getElementById("div").hidden = true; 
    console.log("escondo div");   
}
function validarNombre(){
    
    if (this.value === "") {
        document.getElementById("nombre").className = document.getElementById("nombre").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("nombre").className = document.getElementById("nombre").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarApellido(){

    if (this.value === "") {
        document.getElementById("apellido").className = document.getElementById("apellido").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("apellido").className = document.getElementById("apellido").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarBoton(){
    if (nombre.value === "" || apellido.value === "") {
        alert("Ingrese nombre y apellido");
    }
    else{
        tcuerpo.innerHTML += "<tr><td>"+nombre.value+"</td><td>"+apellido.value+"</td><td><a href='#' >Eliminar</a></td></tr>";
        console.log(cont);
        }

    }
function eliminandoCelda(){


}