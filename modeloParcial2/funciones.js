var clase8;
(function (clase8) {
    var id = 0;
    var idPerro = 0;
    var idGato = 0;
    var idPajaro = 0;
    window.addEventListener("load", ejecutarBoton);
    var listaMascotas = new Array();
    function ejecutarBoton() {
        // let mascota:Perro = new Perro(); //por que el constructor lo declare con ? que no es obligatorio el nombre
        var select = document.getElementById("select");
        select.addEventListener("change", prepararCampos);
        var filter = document.getElementById("selectFilter");
        filter.addEventListener("change", filterList);
        // let filter = document.getElementById("selectFilter");
        // filter.addEventListener("change",filterList);
        // botonAgregarGato.addEventListener("click",AgregarAnimal);
        // botonAgregarPajaro.addEventListener("click",AgregarAnimal);
    }
    clase8.ejecutarBoton = ejecutarBoton;
    function prepararCampos(event) {
        event.preventDefault();
        var mostrarCamposAgregar = document.getElementById("agregarAnimal");
        mostrarCamposAgregar.hidden = false;
        // console.log("asd");
        var botonAgregar = document.getElementById("btnAgregar");
        var labelDetalle = document.getElementById("labelDetalle");
        var titulo = document.getElementById("titulo");
        var inputDetalle = document.getElementById("inputDetalle");
        if (event.target.value === "Perro") {
            labelDetalle.textContent = "Raza";
            titulo.textContent = "Agregar perro";
            botonAgregar.addEventListener("click", agregarPerroALaLista);
        }
        else if (event.target.value === "Gato") {
            titulo.textContent = "Agregar gato";
            labelDetalle.textContent = "Vidas";
            botonAgregar.addEventListener("click", agregarGatoALaLista);
        }
        else if (event.target.value === "Pajaro") {
            titulo.textContent = "Agregar pajaro";
            labelDetalle.textContent = "Tamaño";
            botonAgregar.addEventListener("click", agregarPajaroALaLista);
        }
        else {
            mostrarCamposAgregar.hidden = true;
        }
        // console.log(event.target.value);
        // inputDetalle.setAttribute("id","raza");
    }
    clase8.prepararCampos = prepararCampos;
    function agregarPerroALaLista() {
        var nombre = document.getElementById("inputNombre").value;
        var btnAgregar = document.getElementById("btnAgregar");
        // console.log(nombre);
        var raza = document.getElementById("inputDetalle").value;
        // console.log();
        var mascotaPerro = new clase8.Perro(nombre, raza, idPerro++);
        btnAgregar.removeEventListener("click", agregarPerroALaLista);
        AgregarAnimal(mascotaPerro);
    }
    clase8.agregarPerroALaLista = agregarPerroALaLista;
    function agregarGatoALaLista() {
        var btnAgregar = document.getElementById("btnAgregar");
        var nombre = document.getElementById("inputNombre").value;
        // console.log(nombre);
        var vidas = document.getElementById("inputDetalle").value;
        // console.log(Number(vidas));
        var mascotaGato = new clase8.Gato(nombre, Number(vidas), idGato++);
        btnAgregar.removeEventListener("click", agregarGatoALaLista);
        AgregarAnimal(mascotaGato);
    }
    clase8.agregarGatoALaLista = agregarGatoALaLista;
    function agregarPajaroALaLista() {
        var btnAgregar = document.getElementById("btnAgregar");
        var nombre = document.getElementById("inputNombre").value;
        // console.log(nombre);
        var tamaño = document.getElementById("inputDetalle").value;
        var mascotaPajaro = new clase8.Pajaro(nombre, Number(tamaño), idPajaro++);
        btnAgregar.removeEventListener("click", agregarPajaroALaLista);
        AgregarAnimal(mascotaPajaro);
    }
    clase8.agregarPajaroALaLista = agregarPajaroALaLista;
    function AgregarAnimal(mascota) {
        // event.preventDefault();
        // console.log(event.target.parentNode);
        // let mascota2:Perro = new Perro("Pepe");
        //TODO no me deja hacer item.raza por que no lo encuentra en animal, tengo que castear
        listaMascotas.push(mascota);
        // listaMascotas.push(mascota);
        // console.log(listaMascotas);
        // var i = listaMascotas.indexOf( mascota );
        // listaMascotas.splice(mascota,i);
        // for (let index = 0; index < listaMascotas.length; index++) {
        //     if(listaMascotas[index].id == idPerro)
        //         listaMascotas.splice(index,1);
        // }
        if (mascota.tipo == clase8.tipoAnimal.Perro) {
            // console.log(mascota);
            //agregar a la lista
            agregarTabla();
        }
        else if (mascota.tipo == clase8.tipoAnimal.Gato) {
            agregarTabla();
        }
        else if (mascota.tipo == clase8.tipoAnimal.Pajaro) {
            agregarTabla();
            // console.log(mascota);
        }
        // listaMascotas.push(mascota1,mascota2);
        // console.log(mascota);
        // listaMascotas.forEach((item) => {
        //     let aux = <Perro>item;
        //     listaMascotas
        //     console.log(item.hacerRuido() + " " + item.nombre + " " + aux.raza);
        // });
    }
    clase8.AgregarAnimal = AgregarAnimal;
    function filterList(event) {
        event.preventDefault();
        var tablaFiltrada = document.getElementById("tablaFiltrada");
        var h3ListaFiltrada = document.getElementById("h3ListaFiltrada");
        tablaFiltrada.hidden = false;
        h3ListaFiltrada.hidden = false;
        // console.log(listaMascotas);
        if (listaMascotas != null) {
            if (event.target.value === "Perro") {
                var filtrado = listaMascotas.filter(function (item) {
                    return item.tipo == clase8.tipoAnimal.Perro;
                });
                agregarTablaFiltrada(filtrado);
            }
            else if (event.target.value === "Gato") {
                var filtrado = listaMascotas.filter(function (item) {
                    return item.tipo == clase8.tipoAnimal.Gato;
                });
                agregarTablaFiltrada(filtrado);
            }
            else if (event.target.value === "Pajaro") {
                var filtrado = listaMascotas.filter(function (item) {
                    return item.tipo == clase8.tipoAnimal.Pajaro;
                });
                agregarTablaFiltrada(filtrado);
            }
            else {
                tablaFiltrada.hidden = true;
                h3ListaFiltrada.hidden = true;
            }
        }
        else {
            // console.log(listaMascotas);
        }
    }
    clase8.filterList = filterList;
    function agregarTablaFiltrada(filtrado) {
        var tcuerpoFiltrado = document.getElementById("tcuerpoFiltrado");
        // tcuerpoFiltrado.parentElement.removeChild(tcuerpoFiltrado);
        tcuerpoFiltrado.innerHTML = "";
        // tcuerpoFiltrado.childNodes.forEach((item)=> {
        //      tcuerpoFiltrado.removeChild(item);
        // });
        console.log(filtrado);
        console.log(tcuerpoFiltrado.childNodes);
        filtrado.forEach(function (item) {
            if (item.tipo === clase8.tipoAnimal.Perro) {
                var id = 0;
                var auxPerro = item;
                var row = document.createElement("tr");
                var colNombre = document.createElement("td");
                row.setAttribute("id", "" + id++);
                // console.log(item.nombre);
                var textNombrePerro = document.createTextNode(auxPerro.nombre);
                colNombre.appendChild(textNombrePerro);
                row.appendChild(colNombre);
                var colRaza = document.createElement("td");
                var textRaza = document.createTextNode(auxPerro.raza);
                colRaza.appendChild(textRaza);
                row.appendChild(colRaza);
                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(auxPerro.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                tcuerpoFiltrado.appendChild(row);
            }
            else if (item.tipo === clase8.tipoAnimal.Gato) {
                var id = 0;
                var auxGato = item;
                var row = document.createElement("tr");
                var colNombre = document.createElement("td");
                row.setAttribute("id", "" + id++);
                // console.log(item.nombre);
                var textNombreGato = document.createTextNode(auxGato.nombre);
                colNombre.appendChild(textNombreGato);
                row.appendChild(colNombre);
                console.log(auxGato.vidas);
                var colVida = document.createElement("td");
                var textVida = document.createTextNode("" + auxGato.vidas);
                colVida.appendChild(textVida);
                row.appendChild(colVida);
                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(auxGato.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                tcuerpoFiltrado.appendChild(row);
            }
            else if (item.tipo === clase8.tipoAnimal.Pajaro) {
                var id = 0;
                var auxPajaro = item;
                var row = document.createElement("tr");
                var colNombre = document.createElement("td");
                row.setAttribute("id", "" + id++);
                // console.log(item.nombre);
                var textNombrePajaro = document.createTextNode(auxPajaro.nombre);
                colNombre.appendChild(textNombrePajaro);
                row.appendChild(colNombre);
                console.log(auxPajaro.tamaño);
                var colTamaño = document.createElement("td");
                var textTamaño = document.createTextNode("" + auxPajaro.tamaño);
                colTamaño.appendChild(textTamaño);
                row.appendChild(colTamaño);
                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(auxPajaro.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                tcuerpoFiltrado.appendChild(row);
            }
            // console.log(item);
        });
        // var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpo"));
        // var row = document.createElement("tr");
        // // row.addEventListener("dblclick",modificarDatos);
        // // row.setAttribute("id","" + id++);
        // var colNombre = document.createElement("td");
        // // colNombre.addEventListener("dblclick",modificarDatos);
        // var textNombre = document.createTextNode(nombre);
        // colNombre.appendChild(textNombre);
        // // colNombre.setAttribute("id",id);
        // row.appendChild(colNombre);
        // var colRaza = document.createElement("td");
        // var textRaza = document.createTextNode(detalle);
        // // colApellido.addEventListener("dblclick",modificarDatos);
        // colRaza.appendChild(textRaza);
        // // colApellido.setAttribute("id",id);
        // row.appendChild(colRaza);
        // var colTipo = document.createElement("td");
        // var textTipo = document.createTextNode(tipo);
        // // colFecha.addEventListener("dblclick",modificarDatos);
        // colTipo.appendChild(textTipo);
        // // colFecha.setAttribute("id",id);
        // row.appendChild(colTipo);
        // var colSexo = document.createElement("td");
        // var textSexo = document.createTextNode(sexo);
        // colSexo.addEventListener("dblclick",modificarDatos);
        // colSexo.appendChild(textSexo);
        // colSexo.setAttribute("id",id);
        // row.appendChild(colSexo);
        // tcuerpo.appendChild(row);
    }
    clase8.agregarTablaFiltrada = agregarTablaFiltrada;
    function modificarDatos(event) {
        // var index = celda.parentNode.parentNode.rowIndex;
        event.preventDefault();
        var divModificar = document.getElementById("divCampos");
        var botonModificar = document.getElementById("botonModificar");
        var botonEliminar = document.getElementById("botonEliminar");
        var listaAnimales = event.target.parentNode.parentNode.childNodes;
        var fila = event.target.parentNode.childNodes;
        var sacoID = event.target.parentNode;
        var nombre = fila[0].textContent;
        var detalle = fila[1].textContent;
        var tipo = fila[2].textContent;
        var id = sacoID.getAttribute("id");
        // console.log(sacoID);
        divModificar.hidden = false;
        var idNumber = parseInt(id);
        document.getElementById("nombre").value = nombre;
        document.getElementById("detalle").value = detalle;
        botonModificar.addEventListener("click", function () {
            var nombre = document.getElementById("nombre").value;
            var detalle = document.getElementById("detalle").value;
            // console.log("asd");
            for (var index = 1; index < listaAnimales.length; index++) {
                if (listaAnimales[index].getAttribute("id") === id) {
                    listaAnimales[index].childNodes[0].textContent = nombre;
                    listaAnimales[index].childNodes[1].textContent = detalle;
                    divModificar.hidden = true;
                    return true;
                }
            }
        });
        botonEliminar.addEventListener("click", function () {
            var tabla = document.getElementById("tcuerpo");
            // console.log(listaAnimales);
            for (var index = 1; index < listaAnimales.length; index++) {
                if (listaAnimales[index].getAttribute("id") === id) {
                    var celda = listaAnimales[index];
                    tabla.removeChild(celda);
                    // console.log(listaMascotas);
                    divModificar.hidden = true;
                }
            }
            for (var i = 0; i < listaMascotas.length; i++) {
                if (listaMascotas[i].id === idNumber) {
                    listaMascotas.splice(i, 1);
                    // console.log(listaMascotas);
                }
            }
        });
    }
    clase8.modificarDatos = modificarDatos;
    function agregarTabla() {
        //poner hidden false a select de filtro
        var selectFilter = document.getElementById("selectFilter");
        selectFilter.hidden = false;
        var nombre = document.getElementById("inputNombre").value;
        var detalle = document.getElementById("inputDetalle").value;
        var tipo = document.getElementById("select").value;
        var tcuerpo = document.getElementById("tcuerpo");
        var row = document.createElement("tr");
        row.addEventListener("dblclick", modificarDatos);
        row.setAttribute("id", "" + id++);
        var colNombre = document.createElement("td");
        // colNombre.addEventListener("dblclick",modificarDatos);
        var textNombre = document.createTextNode(nombre);
        colNombre.appendChild(textNombre);
        // colNombre.setAttribute("id",id);
        row.appendChild(colNombre);
        var colRaza = document.createElement("td");
        var textRaza = document.createTextNode(detalle);
        // colApellido.addEventListener("dblclick",modificarDatos);
        colRaza.appendChild(textRaza);
        // colApellido.setAttribute("id",id);
        row.appendChild(colRaza);
        var colTipo = document.createElement("td");
        var textTipo = document.createTextNode(tipo);
        // colFecha.addEventListener("dblclick",modificarDatos);
        colTipo.appendChild(textTipo);
        // colFecha.setAttribute("id",id);
        row.appendChild(colTipo);
        // var colSexo = document.createElement("td");
        // var textSexo = document.createTextNode(sexo);
        // colSexo.addEventListener("dblclick",modificarDatos);
        // colSexo.appendChild(textSexo);
        // colSexo.setAttribute("id",id);
        // row.appendChild(colSexo);
        tcuerpo.appendChild(row);
    }
    clase8.agregarTabla = agregarTabla;
    // export function agregarDiv(){
    //     // <div id="div" class="div" >
    //     // <!-- <div class="divEsconder"><input type="button" value="X" class="btnEsconder" id="btnEsconder" tabindex="6"><span class="infoBtnEsconder">Haga click en la X o presione la tecla Esc</span>
    //     // </div> -->
    //     // <!-- el for lo uso para hacerle click al texto label y que lleve al campo user que en este caso busca el id -->
    //     // <div class="divModificar" id="divModificar" hidden>
    //     //     <label for="nombre">Nombre:</label>
    //     //     <input name="nombre" class="inputSinError" id="nombre" type="text" tabindex="1"placeholder="Nombre..." />
    //     //     <label for="apellido">Apellido:</label>
    //     //     <input name="apellido" class="inputSinError" id="detalle" type="text" tabindex="2" placeholder="Apellido..." />
    //     //     <label for="sexo">Genero:</label>
    //     //     <!-- <input name="sexo" class="inputSinError inputError" id="sexo" type="text" tabindex="4" placeholder="Tu sexo..." /> -->
    //     //     <div class="botones">
    //     //         <input name="guardar" class="botonEliminar" id="botonEliminar" type="button" tabindex="5" value="Eliminar"/>
    //     //         <input name="guardar" class="botonModificar" id="botonModificar" type="button" tabindex="5" value="Modificar"/>
    //     //     </div>
    //     // </div>
    //     let divCampos = (<HTMLInputElement>document.getElementById("divCampos"));
    //     var divModificarEliminar = document.createElement("div");
    //     var labelNombre = document.createElement("label");
    //     var labelText = document.createTextNode("Nombre");
    //     labelNombre.appendChild(labelText);
    //     divModificarEliminar.appendChild(labelNombre);
    //     divCampos.appendChild(divModificarEliminar);
    // }
})(clase8 || (clase8 = {}));
