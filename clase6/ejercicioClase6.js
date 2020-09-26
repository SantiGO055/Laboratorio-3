window.addEventListener("load",validar);
var cont = 0;


class logueo{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}

function validar(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var telefono = document.getElementById("telefono");
    var fecha = document.getElementById("fecha");
    var boton = document.getElementById("boton");
    var mostrarDiv = document.getElementById("botonMostrarDiv");
    var esconderDiv = document.getElementById("btnEsconder");
    var eliminarCelda = document.getElementById("eliminarCelda");

    // var tabla = document.getElementById("tabla"),rIndex,cIndex;
    
    

    mostrarDiv.addEventListener("click",accionMostrarDiv);
    esconderDiv.addEventListener("click",cerrarDiv);

    nombre.addEventListener("blur",validarNombre);
    apellido.addEventListener("blur",validarApellido);
    telefono.addEventListener("blur",validarTelefono);
    fecha.addEventListener("blur",validarFecha);
    boton.addEventListener("click",validarBoton);

    leerPersonaGet();
    
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
function validarTelefono(){

    if (this.value === "") {
        document.getElementById("telefono").className = document.getElementById("telefono").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("telefono").className = document.getElementById("telefono").className.replace(" inputError", "inputSinError");
        return 1;
    }
}
function validarFecha(){

    if (this.value === "") {
        document.getElementById("fecha").className = document.getElementById("fecha").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("fecha").className = document.getElementById("fecha").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

var peticionHttp = new XMLHttpRequest();
function validarBoton(){
    if (nombre.value === "" || apellido.value === "") {
        alert("Ingrese nombre y apellido");
    }
    else{
        ejecutarPost();
        //tcuerpo.innerHTML += "<tr><td>"+nombre.value+"</td><td>"+apellido.value+"</td><td><a href='#' onclick='eliminarCelda(this)'>Eliminar</a></td></tr>";
        
        }

    }
function eliminarCelda(celda){
    var d = celda.parentNode.parentNode.rowIndex;
    document.getElementById('tabla').deleteRow(d);
}


function leerPersonaGet(){
    //peticionHttp.open("GET","http://localhost:3000/personas");

    ajax("GET","http://localhost:3000/personas",respuestaGet);
    // peticionHttp.onreadystatechange = respuestaGet;
    // peticionHttp.send();
}

function respuestaGet(){
    //el servidor responde con un estado que es un numero, un 200 si esta ok
    if (peticionHttp.readyState === XMLHttpRequest.DONE && peticionHttp.status === 200) {
        
        var arrayJson = JSON.parse(peticionHttp.responseText);
        for (let i = 0; i < arrayJson.length; i++) {
            

            tcuerpo.innerHTML += "<tr><td>"+arrayJson[i].nombre+"</td><td>"+arrayJson[i].apellido+"</td><td>"+arrayJson[i].fecha+"</td><td>"+arrayJson[i].telefono+"</td></tr>";

        }
        return arrayJson;
    }
}

function ejecutarPost(){
    var nombre = $("nombre");
    var apellido = $("apellido");
    var fecha = $("fecha");
    var telefono = $("telefono");
    var sendPost = "nombre="+nombre+"&apellido="+apellido+"&fecha="+fecha+"&telefono="+telefono;
    ajax("POST","http://localhost:3000/nuevaPersona",respuestaPost,sendPost);

    //#region Implemento lo siguiente en metodo ajax
    // peticionHttp.onreadystatechange = respuestaPost;
    // peticionHttp.open("POST","http://localhost:3000/nuevaPersona");
    
    /**debo definir como le paso la info por post */

    // por ejemplo puedo pasar el token peticionHttp.setRequestHeader("token","a5s4d6a4s6d87a489dasd");
    // peticionHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // peticionHttp.send("nombre="+nombre+"&apellido="+apellido+"&fecha="+fecha+"&telefono="+telefono);
    /**siendo post puedo pasarlo como  peticionHttp.setRequestHeader("Content-type","application/json");*/
    /**peticionHttp.send("nombre:"+nombre+",apellido:"+apellido+",fecha:"+fecha+",telefono:"+telefono); */
    //#endregion Implemento lo siguiente en metodo ajax
}

function respuestaPost(){
    if(peticionHttp.readyState == 4){
        if (peticionHttp.status == 200) {
            /**cuando tengo respuesta de servidor lo casteo a obj json */
            var respuesta  = peticionHttp.responseText;
            var respuestaArray = JSON.parse(respuesta);
            if (respuestaArray.respuesta === 'ok') {
                var nombreAux = $("nombre");
                var apellidoAux = $("apellido");
                var fechaAux = $("fecha");
                var telefonoAux = $("telefono");
                /** como se que el servidor me responde ok, tomo los valores que ingrese de los campos y los agrego a la lista */
                tcuerpo.innerHTML += "<tr><td>"+nombreAux+"</td><td>"+apellidoAux+"</td><td>"+fechaAux+"</td><td>"+telefonoAux+"</td></tr>";
            }

        }
        else{
            alert("error");
            
        }
    }
}
function $(id){
    return document.getElementById(id).value;
}