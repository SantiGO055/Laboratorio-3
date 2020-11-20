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
        select.addEventListener("click", prepararCampos);
        var filter = document.getElementById("selectFilter");
        var inputNombre = document.getElementById("inputNombre");
        ;
        var inputDetalle = document.getElementById("inputDetalle");
        ;
        var botonAgregar = document.getElementById("btnAgregar");
        inputNombre.addEventListener("blur", validarCampoNombre);
        inputDetalle.addEventListener("blur", validarCampoDetalle);
        filter.addEventListener("change", filterList);
        // let filter = document.getElementById("selectFilter");
        botonAgregar.addEventListener("click", agregarPerroALaLista);
        // filter.addEventListener("change",filterList);
        // botonAgregarGato.addEventListener("click",AgregarAnimal);
        // botonAgregarPajaro.addEventListener("click",AgregarAnimal);
    }
    clase8.ejecutarBoton = ejecutarBoton;
    function notificacion(bool) {
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id", "divNotificacion");
        divNotificacion.setAttribute("class", "divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden", "true");
        var body = document.getElementById("body");
        divNotificacion.hidden = false;
        if (bool) {
            var textoMensaje = document.createTextNode("Animal dado de alta correctamente");
        }
        else {
            divNotificacion.setAttribute("class", "divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("Error! Complete los campos correctamente");
        }
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }
    clase8.notificacion = notificacion;
    function notificacionFiltro(bool) {
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id", "divNotificacion");
        divNotificacion.setAttribute("class", "divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden", "true");
        var body = document.getElementById("body");
        divNotificacion.hidden = false;
        if (bool) {
            var textoMensaje = document.createTextNode("Se filtro la lista correctamente");
        }
        else {
            divNotificacion.setAttribute("class", "divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("No hay ninguna lista a filtrar");
        }
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }
    clase8.notificacionFiltro = notificacionFiltro;
    function prepararCampos(event) {
        event.preventDefault();
        var mostrarCamposAgregar = document.getElementById("agregarAnimal");
        mostrarCamposAgregar.hidden = false;
        // console.log("asd");
        var botonAgregar = document.getElementById("btnAgregar");
        var labelDetalle = document.getElementById("labelDetalle");
        var titulo = document.getElementById("titulo");
        var inputDetalle = document.getElementById("inputDetalle");
        var inputNombre = document.getElementById("inputNombre");
        // inputNombre.addEventListener("blur",validarCampoNombre);
        // inputDetalle.addEventListener("blur",validarCampoDetalle);
        if (event.target.value === "Perro") {
            labelDetalle.textContent = "Raza";
            titulo.textContent = "Agregar perro";
            inputDetalle.setAttribute("type", "text");
            // inputNombre.addEventListener("blur",validarCampoNombre);
            botonAgregar.addEventListener("click", agregarPerroALaLista);
        }
        else if (event.target.value === "Gato") {
            titulo.textContent = "Agregar gato";
            labelDetalle.textContent = "Vidas";
            inputDetalle.setAttribute("type", "number");
            botonAgregar.addEventListener("click", agregarGatoALaLista);
            inputDetalle.addEventListener("blur", validarCampoDetalle);
        }
        else if (event.target.value === "Pajaro") {
            titulo.textContent = "Agregar pajaro";
            labelDetalle.textContent = "Tamaño";
            inputDetalle.setAttribute("type", "number");
            botonAgregar.addEventListener("click", agregarPajaroALaLista);
            inputDetalle.addEventListener("blur", validarCampoDetalle);
        }
        else {
            mostrarCamposAgregar.hidden = true;
        }
        // console.log(event.target.value);
        // inputDetalle.setAttribute("id","raza");
    }
    clase8.prepararCampos = prepararCampos;
    function validarCampoDetalle() {
        // console.log(event.target.value);
        var detalle = document.getElementById("inputDetalle");
        if (detalle.value == "") {
            detalle.className = "inputError";
            return false;
        }
        else {
            detalle.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    clase8.validarCampoDetalle = validarCampoDetalle;
    function validarCampoNombre() {
        var nombre = document.getElementById("inputNombre");
        if (nombre.value == "") {
            nombre.className = " inputError";
            return false;
        }
        else {
            nombre.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    clase8.validarCampoNombre = validarCampoNombre;
    function agregarPerroALaLista() {
        var nombre = document.getElementById("inputNombre").value;
        var btnAgregar = document.getElementById("btnAgregar");
        // console.log(nombre);
        var raza = document.getElementById("inputDetalle").value;
        // console.log();
        var mascotaPerro = new clase8.Perro(nombre, raza, idPerro++);
        // btnAgregar.removeEventListener("click", agregarPerroALaLista);
        if (validarCampoNombre() && validarCampoDetalle()) {
            AgregarAnimal(mascotaPerro);
            notificacion(true);
        }
        else {
            notificacion(false);
        }
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
        if (validarCampoNombre() && validarCampoDetalle()) {
            AgregarAnimal(mascotaGato);
            notificacion(true);
        }
        else {
            notificacion(false);
        }
    }
    clase8.agregarGatoALaLista = agregarGatoALaLista;
    function agregarPajaroALaLista() {
        var btnAgregar = document.getElementById("btnAgregar");
        var nombre = document.getElementById("inputNombre").value;
        // console.log(nombre);
        var tamaño = document.getElementById("inputDetalle").value;
        var mascotaPajaro = new clase8.Pajaro(nombre, Number(tamaño), idPajaro++);
        btnAgregar.removeEventListener("click", agregarPajaroALaLista);
        if (validarCampoNombre() && validarCampoDetalle()) {
            AgregarAnimal(mascotaPajaro);
            notificacion(true);
        }
        else {
            notificacion(false);
        }
    }
    clase8.agregarPajaroALaLista = agregarPajaroALaLista;
    function AgregarAnimal(mascota) {
        listaMascotas.push(mascota);
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
                var filtradoPerro = listaMascotas.filter(function (item) {
                    return item.tipo == clase8.tipoAnimal.Perro;
                });
                if (filtradoPerro.length >= 1) {
                    agregarTablaFiltrada(filtradoPerro);
                }
                else {
                    notificacionFiltro(false);
                }
                console.log(filtradoPerro.length);
            }
            else if (event.target.value === "Gato") {
                var filtradoGato = listaMascotas.filter(function (item) {
                    return item.tipo == clase8.tipoAnimal.Gato;
                });
                if (filtradoGato.length >= 1) {
                    agregarTablaFiltrada(filtradoGato);
                }
                else {
                    notificacionFiltro(false);
                }
            }
            else if (event.target.value === "Pajaro") {
                var filtradoPajaro = listaMascotas.filter(function (item) {
                    return item.tipo == clase8.tipoAnimal.Pajaro;
                });
                if (filtradoPajaro.length >= 1) {
                    agregarTablaFiltrada(filtradoPajaro);
                }
                else {
                    notificacionFiltro(false);
                }
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
        // console.log(filtrado);
        // console.log(tcuerpoFiltrado.childNodes);
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
                notificacionFiltro(true);
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
                // console.log(auxGato.vidas);
                var colVida = document.createElement("td");
                var textVida = document.createTextNode("" + auxGato.vidas);
                colVida.appendChild(textVida);
                row.appendChild(colVida);
                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(auxGato.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                notificacionFiltro(true);
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
                // console.log(auxPajaro.tamaño);
                var colTamaño = document.createElement("td");
                var textTamaño = document.createTextNode("" + auxPajaro.tamaño);
                colTamaño.appendChild(textTamaño);
                row.appendChild(colTamaño);
                var colTipo = document.createElement("td");
                var textTipo = document.createTextNode(auxPajaro.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                notificacionFiltro(true);
                tcuerpoFiltrado.appendChild(row);
            }
            // console.log(item);
        });
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
                    listaMascotas.splice(index, 1);
                    console.log(listaMascotas);
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
        var textNombre = document.createTextNode(nombre);
        colNombre.appendChild(textNombre);
        row.appendChild(colNombre);
        var colRaza = document.createElement("td");
        var textRaza = document.createTextNode(detalle);
        colRaza.appendChild(textRaza);
        row.appendChild(colRaza);
        var colTipo = document.createElement("td");
        var textTipo = document.createTextNode(tipo);
        colTipo.appendChild(textTipo);
        row.appendChild(colTipo);
        tcuerpo.appendChild(row);
    }
    clase8.agregarTabla = agregarTabla;
})(clase8 || (clase8 = {}));
