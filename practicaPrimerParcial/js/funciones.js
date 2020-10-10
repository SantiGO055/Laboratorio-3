window.addEventListener("load",validar);


// class logueo{
//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }

// }
var peticionHttp = new XMLHttpRequest();

function validar(){
    
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    // var sexo = document.getElementById("fecha");
    var fecha = document.getElementById("fecha");
    var botonModificar = document.getElementById("botonModificar");
    // var mostrarDiv = document.getElementById("botonMostrarDiv");
    var esconderDiv = document.getElementById("btnEsconder");
    // var eliminarCelda = document.getElementById("eliminarCelda");

    // var tabla = document.getElementById("tabla"),rIndex,cIndex;
    
    

    // mostrarDiv.addEventListener("click",accionMostrarDiv);
    esconderDiv.addEventListener("click",cerrarDiv);

    nombre.addEventListener("blur",validarNombre);
    apellido.addEventListener("blur",validarApellido);
    fecha.addEventListener("blur",validarFecha);
    //sexo.addEventListener("blur",validarSexo);
    botonModificar.addEventListener("click",validarBoton);

    leerPersonaGet();
    
}

function accionMostrarDiv(){
    document.getElementById("div").hidden = false;     
}
function cerrarDiv(){
    document.getElementById("div").hidden = true; 
}
//#region validaciones de campos

function validarNombre(){

    if (this.value.length < 3) {
        document.getElementById("nombre").className = document.getElementById("nombre").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("nombre").className = document.getElementById("nombre").className.replace(" inputError", "inputSinError");
        return 1;
    }
}

function validarApellido(){

    if (this.value.length < 3) {
        document.getElementById("apellido").className = document.getElementById("apellido").className = " inputError";
        return 0;
    }
    else{
        document.getElementById("apellido").className = document.getElementById("apellido").className.replace(" inputError", "inputSinError");
        return 1;
    }
}
function validarFecha(){
    var retorno = false;
    var f = new Date();
    /**Año, mes, dia = aaaa-mm-dd ej. 2020-12-5 */
    fechaHoy =f.getFullYear()+ "-" + (f.getMonth() +1)+ "-" + + f.getDate();
    // fechaHoy = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
    var fechaAModif = $("fecha");
    console.log(fechaAModif);
    if (!fechaAModif) {
        document.getElementById("fecha").className = document.getElementById("fecha").className = " inputError";
    }
    console.log(fechaHoy);
    if (fechaHoy >= fechaAModif) {
        return retorno;
    }
    else{
        return retorno;
    }
    
}
function validarSexo(){
    //TODO validar que haya uno seleccionado
    var radio = document.getElementsByName('radiobutton');
    if (radio[0].checked === true || radio[1].checked === true) {
        return true;
    }
    else{
        document.getElementById("sexo").className = document.getElementById("sexo").className = " inputError";
    }
}
//#endregion


function validarBoton(){
    if (nombre.value === "" || apellido.value === "" || fecha.value === "dd/mm/aaaa") {
        alert("Ingrese los campos correctos");
    }
    //tcuerpo.innerHTML += "<tr><td>"+nombre.value+"</td><td>"+apellido.value+"</td><td><a href='#' onclick='eliminarCelda(this)'>Eliminar</a></td></tr>";
    

}
    
// function eliminarCelda(celda){
//     var d = celda.parentNode.parentNode.rowIndex;
//     document.getElementById('tabla').deleteRow(d);
// }


function leerPersonaGet(){
    
    ajax("GET","http://localhost:3000/personas",respuestaGet);
}

function agregarDatos(id,nombre,apellido,fecha,sexo){

    var row = document.createElement("tr");
    var colNombre = document.createElement("td");
    colNombre.addEventListener("dblclick",modificarCelda);
    var textNombre = document.createTextNode(nombre);
    colNombre.appendChild(textNombre);
    colNombre.setAttribute("id",id);
    row.appendChild(colNombre);

    var colApellido = document.createElement("td");
    var textApe = document.createTextNode(apellido);
    colApellido.addEventListener("dblclick",modificarCelda);
    colApellido.appendChild(textApe);
    colApellido.setAttribute("id",id);
    row.appendChild(colApellido);

    var colFecha = document.createElement("td");
    var textFecha = document.createTextNode(fecha);
    colFecha.addEventListener("dblclick",modificarCelda);
    colFecha.appendChild(textFecha);
    colFecha.setAttribute("id",id);
    row.appendChild(colFecha);

    var colSexo = document.createElement("td");
    var textSexo = document.createTextNode(sexo);
    colSexo.addEventListener("dblclick",modificarCelda);
    colSexo.appendChild(textSexo);
    colSexo.setAttribute("id",id);
    row.appendChild(colSexo);
    
    
    //#region columnas de accion
    // var colAccion = document.createElement("td");
    // var aEle = document.createElement("a");
    // aEle.setAttribute("href","");
    // aEle.addEventListener("click",eliminarCelda);
    // var aTextElim = document.createTextNode("borrar");
    // aEle.appendChild(aTextElim);
    // colAccion.appendChild(aEle);
    // row.appendChild(colAccion);

    // var colM = document.createElement("td");
    // var aElemId = document.createElement("a");
    // aElemId.setAttribute("id",id);
    // aElemId.setAttribute("hidden","true");
    // colM.appendChild(aElemId);
    // row.appendChild(colM);
    //#endregion
    
    tcuerpo.appendChild(row);

    
}

function respuestaGet(){
    // var modificar = "<a href='#' id='modificarCelda' value='Modificar' onclick=modificarCelda(this)>Modificar</a>";
    // var eliminar = "<a href='#' id='eliminarCelda' value='Eliminar' onclick=eliminarCelda(this)>Eliminar</a>";
    /**creo la fila */
    
    

    
    //el servidor responde con un estado que es un numero, un 200 si esta ok
    if (peticionHttp.readyState === XMLHttpRequest.DONE && peticionHttp.status === 200) {
        
        var arrayJson = JSON.parse(peticionHttp.responseText);
        for (let i = 0; i < arrayJson.length; i++) {
            agregarDatos(arrayJson[i].id,arrayJson[i].nombre,arrayJson[i].apellido,arrayJson[i].fecha,arrayJson[i].sexo);
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
    //TODO enviar al servidor por post la persona eliminada
}

function MostrarDivModificar(){
    document.getElementById("div").hidden = false;
    
}
function imprimirRadioButton(sexo){
    var radio = document.getElementsByName('radiobutton');

    if(sexo === "Female"){
        radio[0].checked = true;
    }
    else if(sexo === "Male"){
        radio[1].checked = true;
    }
}
function obtenerValoresRadioButton(){
    var radio = document.getElementsByName('radiobutton');

    if (radio[0].checked == true) {
        return "Female";
    }
    else if(radio[1].checked == true){
        return "Male";
    }
}

function modificarCelda(event){
    // var index = celda.parentNode.parentNode.rowIndex;

    event.preventDefault();
    var fila = event.target.parentNode.childNodes;
    
    
    var nombre = fila[0].textContent;
    var apellido = fila[1].textContent;
    var fecha = fila[2].textContent;
    var sexo = fila[3].textContent;
    var id = fila[3].getAttribute("id");

    MostrarDivModificar();
    imprimirRadioButton(sexo);
    // console.log("modificando" + nombre + " " + apellido  + " " + fecha + " " + sexo + id);
    
    // document.getElementById("boton").value = "Modificar";
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("fecha").value = fecha;
    
    // document.getElementById("sexo").value = sexo;
    
    botonModificar.addEventListener("click",function(){
        
        nombreAux = $("nombre");
        apellidoAux = $("apellido");
        fechaAux = $("fecha");
        sexoAux = obtenerValoresRadioButton();

        ejecutarPost(id,nombreAux,apellidoAux,fechaAux,sexoAux);

        //TODO si el sv me devuelve ok recien ahi lo modifico o elimino de la lista
        // fila[0].textContent = document.getElementById("nombre").value
        // fila[1].textContent = document.getElementById("apellido").value
        // fila[2].textContent = document.getElementById("fecha").value
        // fila[3].textContent = tomarValoresRadioButton();
        // fila[3].textContent = document.getElementById("sexo").value
        validarFecha();
        
    });
    
}

function ejecutarPost(id,nombre,apellido,fecha,sexo){
    // var nombre = $("nombre");
    // var apellido = $("apellido");
    // var fecha = $("fecha");
    // var sexo = $("sexo");
    
    
    //TODO chequear el post
    //si se clickeo modificar
    if(document.getElementById('botonModificar').clicked == true)
    {
        var sendPost = "id:"+id+",nombre:"+nombre+",apellido:"+apellido+",fecha:"+fecha+",sexo:"+sexo;
        // var sendPost = "nombre="+nombre+"&apellido="+apellido+"&fecha="+fecha+"&telefono="+telefono;
        ajax("POST","http://localhost:3000/editar",respuestaPost,sendPost);
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
                document.getElementById("div").hidden = true;
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