window.addEventListener("load",validar);


// class logueo{
//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }

// }

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
// function eliminarCelda(celda){
//     var d = celda.parentNode.parentNode.rowIndex;
//     document.getElementById('tabla').deleteRow(d);
// }


function leerPersonaGet(){
    
    ajax("GET","http://localhost:3000/personas",respuestaGet);
}

function agregarDatos(nombre,apellido,fecha,telefono){
    
    var row = document.createElement("tr");
    var columnaNombre = document.createElement("td");
    var textNombre = document.createTextNode(nombre);
    columnaNombre.appendChild(textNombre);
    row.appendChild(columnaNombre);
    /**agrego apellido */
    var colApellido = document.createElement("td");
    var textApe = document.createTextNode(apellido);
    colApellido.appendChild(textApe);
    row.appendChild(colApellido);

    var colFecha = document.createElement("td");
    var textFecha = document.createTextNode(fecha);
    colFecha.appendChild(textFecha);
    row.appendChild(colFecha);

    var colTel = document.createElement("td");
    var textTel = document.createTextNode(telefono);
    colTel.appendChild(textTel);
    row.appendChild(colTel);
    
    
    var colAccion = document.createElement("td");
    var aEle = document.createElement("a");
    aEle.setAttribute("href","");
    aEle.addEventListener("click",eliminarCelda);
    var aTextElim = document.createTextNode("borrar");
    aEle.appendChild(aTextElim);
    colAccion.appendChild(aEle);
    row.appendChild(colAccion);

    var colM = document.createElement("td");
    var aEleMod = document.createElement("a");
    aEleMod.setAttribute("href","");
    aEleMod.addEventListener("click",modificarCelda);
    var aTextMod = document.createTextNode("Modificar");
    aEleMod.appendChild(aTextMod);
    colM.appendChild(aEleMod);
    colAccion.appendChild(colM);
    
    
    tcuerpo.appendChild(row);

    
}
function respuestaGet(){
    // var modificar = "<a href='#' id='modificarCelda' value='Modificar' onclick=modificarCelda(this)>Modificar</a>";
    // var eliminar = "<a href='#' id='eliminarCelda' value='Eliminar' onclick=eliminarCelda(this)>Eliminar</a>";
    /**creo la fila */
    var row = document.createElement("tr");
    

    
    //el servidor responde con un estado que es un numero, un 200 si esta ok
    if (peticionHttp.readyState === XMLHttpRequest.DONE && peticionHttp.status === 200) {
        
        var arrayJson = JSON.parse(peticionHttp.responseText);
        for (let i = 0; i < arrayJson.length; i++) {
            /**esto lo voy a reemplazar por objetos */

            agregarDatos(arrayJson[i].nombre,arrayJson[i].apellido,arrayJson[i].fecha,arrayJson[i].telefono);

            // tcuerpo.innerHTML += 
            // "<tr><td>"+arrayJson[i].nombre+
            // "</td><td>"+arrayJson[i].apellido+
            // "</td><td>"+arrayJson[i].fecha+
            // "</td><td>"+arrayJson[i].telefono+
            // "</td><td>"+eliminar+
            // "</td><td>"+modificar+"</td></tr>";

            

        }
        return arrayJson;
    }
}

function eliminarCelda(event){
    event.preventDefault();
    // console.log(event.target.parentNode.parentNode);

    var fila = event.target.parentNode.parentNode;
    var tabla = document.getElementById("tcuerpo");
    tabla.removeChild(fila);

}

function modificarCelda(event){
    // var index = celda.parentNode.parentNode.rowIndex;

    event.preventDefault();
    var fila = event.target.parentNode.parentNode.parentNode.childNodes;
    
    var nombre = fila[0].textContent;
    var apellido = fila[1].textContent;
    var fecha = fila[2].textContent;
    var telefono = fila[3].textContent;
    // $("nombre") = nombre;
    nombreAux = $("nombre");
    apellidoAux = $("apellido");
    fechaAux = $("fecha");
    telefonoAux = $("telefono");
    document.getElementById("boton").value = "Modificar";
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("fecha").value = fecha;
    document.getElementById("telefono").value = telefono;
    
    boton.addEventListener("click",function(){
        fila[0].textContent = document.getElementById("nombre").value
        fila[1].textContent = document.getElementById("apellido").value
        fila[2].textContent = document.getElementById("fecha").value
        fila[3].textContent = document.getElementById("telefono").value
        document.getElementById("boton").value = "Guardar";
    });
    
}

function ejecutarPost(){
    var nombre = $("nombre");
    var apellido = $("apellido");
    var fecha = $("fecha");
    var telefono = $("telefono");
    
    /**si el id no dice modificar envio los datos al servidor ya que se trata de un alta */
    if(document.getElementById("boton").value != "Modificar"){
        var sendPost = "nombre="+nombre+"&apellido="+apellido+"&fecha="+fecha+"&telefono="+telefono;
        ajax("POST","http://localhost:3000/nuevaPersona",respuestaPost,sendPost);
    }
    else{
        console.log("modificar datos");
    }
    
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
                agregarDatos(nombreAux,apellidoAux,fechaAux,telefonoAux);

                //tcuerpo.innerHTML += "<tr><td>"+nombreAux+"</td><td>"+apellidoAux+"</td><td>"+fechaAux+"</td><td>"+telefonoAux+"</td><td>"+"<a href='#' id='eliminarCelda' value='Eliminar' onclick=eliminarCelda(this)>Eliminar</a>"+"</td></tr>";
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