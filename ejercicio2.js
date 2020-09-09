window.addEventListener("load",validar);

function validar(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var boton = document.getElementById("boton");

    nombre.addEventListener("blur",validarNombre);
    apellido.addEventListener("blur",validarApellido);
    boton.addEventListener("click",validarBoton);
    
    
}

function validarNombre(){
    
    if (this.value == "") {
        document.getElementById("nombre").className = document.getElementById("nombre").className + " error";
    }
    else{
        document.getElementById("nombre").className = document.getElementById("nombre").className.replace(" error", "");
    }
}

function validarApellido(){

    if (this.value == "") {
        document.getElementById("apellido").className = document.getElementById("apellido").className + " error";
    }
    else{
        document.getElementById("apellido").className = document.getElementById("apellido").className.replace(" error", "");
    }
}

function validarBoton(){
    var textoNombre = document.getElementById("nombre");
    var textoApellido = document.getElementById("apellido");
    var tabla = document.getElementById("tabla");

    if (textoNombre.value == "" || textoApellido.value == "") {
        alert("Ingrese nombre y apellido");
    }
    else{
            console.log(tabla.value);
            /* Inserto una nueva fila */
            var nuevaFila = tabla.insertRow(-1);

            /* Inserto nueva celda nombre */
            var celdaNombre = nuevaFila.insertCell();
            celdaNombre.innerHTML = "<td > " + textoNombre.value + "</td>"; 
            // var newNombre  = document.createTextNode(textoNombre.value);
            // celdaNombre.appendChild(newNombre);

            /* Inserto nueva celda apellido */
            var celdaApellido = nuevaFila.insertCell();
            celdaApellido.innerHTML = "<td > " + textoApellido.value + "</td>"; 
            // var newApellido  = document.createTextNode(textoApellido.value);
            // celdaApellido.appendChild(newApellido);

            /* Inserto nueva celda accion */
            var celdaAccion = nuevaFila.insertCell();
            celdaAccion.innerHTML = "<input type='button' id='borrar' class='borrar' value='Eliminar' />";

            borrar = document.getElementById("borrar");
            borrar.addEventListener("click",borrarCelda);

            function borrarCelda(){

                    var cells = tabla.getElementsByTagName('td');
                    console.log(tabla.);
                    // for (let index = 0; index < tabla.length; index++) {
                    //     const element = array[index];
                        
                    // }

                    // for (var i=0,len=cells.length; i<len; i++){
                    //     cells[i].onclick = function(){

                    //     console.log(this.innerHTML);
                    //     /* if you know it's going to be numeric:
                    //     console.log(parseInt(this.innerHTML),10);
                    //     */
                    //     }
                    // }
            }

            
        }
        // var newApellido  = document.createTextNode("borrar");
        // celdaApellido.appendChild(newApellido);

    }
