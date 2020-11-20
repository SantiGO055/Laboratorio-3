namespace clase8{
    var id = 0;
    var idPerro = 0;
    var idGato = 0;
    var idPajaro = 0;
    
    window.addEventListener("load",ejecutarBoton);
    var listaMascotas:Array<Animal> = new Array<Animal>();

    
    export function ejecutarBoton(){
        // let mascota:Perro = new Perro(); //por que el constructor lo declare con ? que no es obligatorio el nombre

        

        var select = document.getElementById("select");

        select.addEventListener("click",prepararCampos);
        
        let filter = document.getElementById("selectFilter");
        var inputNombre = (<HTMLInputElement>document.getElementById("inputNombre"));;
        var inputDetalle = (<HTMLInputElement>document.getElementById("inputDetalle"));;
        let botonAgregar = document.getElementById("btnAgregar");
        inputNombre.addEventListener("blur",validarCampoNombre);
        inputDetalle.addEventListener("blur",validarCampoDetalle);
        filter.addEventListener("change",filterList);
        // let filter = document.getElementById("selectFilter");


        botonAgregar.addEventListener("click",agregarPerroALaLista);
        // filter.addEventListener("change",filterList);
        // botonAgregarGato.addEventListener("click",AgregarAnimal);
        // botonAgregarPajaro.addEventListener("click",AgregarAnimal);
        
        
        
    }
    
    export function notificacion(bool:boolean){
        
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id","divNotificacion");
        divNotificacion.setAttribute("class","divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden","true");
        var body = document.getElementById("body");
        
        divNotificacion.hidden = false;
        if(bool){
            var textoMensaje = document.createTextNode("Animal dado de alta correctamente");
        }
        else{
            divNotificacion.setAttribute("class","divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("Error! Complete los campos correctamente");
        }
        
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }
    export function notificacionFiltro(bool:boolean){
        
        var divNotificacion = document.createElement("div");
        divNotificacion.setAttribute("id","divNotificacion");
        divNotificacion.setAttribute("class","divNotificacion notificacionSinError");
        divNotificacion.setAttribute("hidden","true");
        var body = document.getElementById("body");
        
        divNotificacion.hidden = false;
        if(bool){
            var textoMensaje = document.createTextNode("Se filtro la lista correctamente");
        }
        else{
            divNotificacion.setAttribute("class","divNotificacion notificacionConError");
            textoMensaje = document.createTextNode("No hay ninguna lista a filtrar");
        }
        
        // divNotificacion.hidden = true;
        divNotificacion.appendChild(textoMensaje);
        body.appendChild(divNotificacion);
    }

    export function prepararCampos(event){
        event.preventDefault();
        
        let mostrarCamposAgregar = (<HTMLInputElement>document.getElementById("agregarAnimal"));
        mostrarCamposAgregar.hidden = false;
        // console.log("asd");
        let botonAgregar = document.getElementById("btnAgregar");
        
        let labelDetalle = (<HTMLInputElement>document.getElementById("labelDetalle"));
        let titulo = (<HTMLInputElement>document.getElementById("titulo"));
        let inputDetalle = (<HTMLInputElement>document.getElementById("inputDetalle"));
        let inputNombre = (<HTMLInputElement>document.getElementById("inputNombre"));

        
        // inputNombre.addEventListener("blur",validarCampoNombre);
        // inputDetalle.addEventListener("blur",validarCampoDetalle);

        if(event.target.value === "Perro"){

            labelDetalle.textContent = "Raza";
            titulo.textContent = "Agregar perro";
            inputDetalle.setAttribute("type","text");

            // inputNombre.addEventListener("blur",validarCampoNombre);
        
            botonAgregar.addEventListener("click",agregarPerroALaLista);
            
            
        }
        else if(event.target.value === "Gato"){
            titulo.textContent = "Agregar gato";
            labelDetalle.textContent = "Vidas";
            inputDetalle.setAttribute("type","number");
            botonAgregar.addEventListener("click",agregarGatoALaLista);
            inputDetalle.addEventListener("blur",validarCampoDetalle);
            

        }
        else if(event.target.value === "Pajaro"){
            titulo.textContent = "Agregar pajaro";
            labelDetalle.textContent = "Tamaño";
            inputDetalle.setAttribute("type","number");
            botonAgregar.addEventListener("click",agregarPajaroALaLista);
            inputDetalle.addEventListener("blur",validarCampoDetalle);
        }
        else{
            mostrarCamposAgregar.hidden = true;
        }
        // console.log(event.target.value);

        // inputDetalle.setAttribute("id","raza");
        

    }
    export function validarCampoDetalle(){
        // console.log(event.target.value);
        var detalle = (<HTMLInputElement>document.getElementById("inputDetalle"));
        if(detalle.value == ""){
            detalle.className = "inputError";
            return false;
        }
        else{
            detalle.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    export function validarCampoNombre(){
        
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre"));
        
        if(nombre.value == ""){
            nombre.className = " inputError";
            return false;
        }
        else{
            nombre.className = " inputSinError";
            return true;
            // campoDetalle.className.replace(" inputError","inputSinError");
        }
    }
    export function agregarPerroALaLista(){
        
        
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        
        // console.log(nombre);
        var raza = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        // console.log();
        
        let mascotaPerro:Perro = new Perro(nombre,raza,idPerro++);
        // btnAgregar.removeEventListener("click", agregarPerroALaLista);
        
        if(validarCampoNombre() && validarCampoDetalle()){
            AgregarAnimal(mascotaPerro);
            notificacion(true);
        }
        else{
            notificacion(false);
        }
        
        
        
    }
    export function agregarGatoALaLista(){
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        // console.log(nombre);
        var vidas = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        // console.log(Number(vidas));
        
        let mascotaGato:Gato = new Gato(nombre,Number(vidas),idGato++);
        
        btnAgregar.removeEventListener("click", agregarGatoALaLista);
        
        if(validarCampoNombre() && validarCampoDetalle()){
            AgregarAnimal(mascotaGato);
            notificacion(true);
        }
        else{
            notificacion(false);
        }
        
        
    }
    export function agregarPajaroALaLista(){
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        // console.log(nombre);
        var tamaño = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        
        let mascotaPajaro:Pajaro = new Pajaro(nombre,Number(tamaño),idPajaro++);
        btnAgregar.removeEventListener("click", agregarPajaroALaLista);
        if(validarCampoNombre() && validarCampoDetalle()){
            AgregarAnimal(mascotaPajaro);
            notificacion(true);
        }
        else{
            notificacion(false);
        }
        
        
        
    }
    
    export function AgregarAnimal(mascota:Animal){

        listaMascotas.push(mascota);
        
        if(mascota.tipo == tipoAnimal.Perro){
            // console.log(mascota);
            //agregar a la lista
            agregarTabla();
        }
        else if(mascota.tipo == tipoAnimal.Gato){
            
            agregarTabla();

        }
        else if(mascota.tipo == tipoAnimal.Pajaro){
            agregarTabla();
            // console.log(mascota);
        }
    }
    export function filterList(event){


        event.preventDefault();
        var tablaFiltrada = (<HTMLInputElement>document.getElementById("tablaFiltrada"));
        var h3ListaFiltrada = (<HTMLInputElement>document.getElementById("h3ListaFiltrada"));
        tablaFiltrada.hidden = false;
        h3ListaFiltrada.hidden = false;
        // console.log(listaMascotas);
        

        if(listaMascotas!=null){

            if(event.target.value === "Perro"){
                
                var filtradoPerro = listaMascotas.filter((item)=>{
                    return item.tipo == tipoAnimal.Perro;
                });
                if(filtradoPerro.length>=1){
                    agregarTablaFiltrada(filtradoPerro);
                }
                else{
                    notificacionFiltro(false);
                }
                console.log(filtradoPerro.length);
            }
            else if(event.target.value === "Gato"){
                var filtradoGato = listaMascotas.filter((item)=>{
                    return item.tipo == tipoAnimal.Gato;
                });
                if(filtradoGato.length>=1){
                    agregarTablaFiltrada(filtradoGato);
                }
                else{
                    notificacionFiltro(false);
                }
            }
            else if(event.target.value === "Pajaro"){
                var filtradoPajaro = listaMascotas.filter((item)=>{
                    return item.tipo == tipoAnimal.Pajaro;
                });
                if(filtradoPajaro.length>=1){
                    agregarTablaFiltrada(filtradoPajaro);
                }
                else{
                    notificacionFiltro(false);
                }           
            }
            else{
                tablaFiltrada.hidden = true;
                h3ListaFiltrada.hidden = true;
            }
        }
        else{
            // console.log(listaMascotas);
        }
        
    }
    
    
    export function agregarTablaFiltrada(filtrado:Array<Animal>){
        
        var tcuerpoFiltrado = (<HTMLInputElement>document.getElementById("tcuerpoFiltrado"));
        // tcuerpoFiltrado.parentElement.removeChild(tcuerpoFiltrado);
        tcuerpoFiltrado.innerHTML = "";
        // tcuerpoFiltrado.childNodes.forEach((item)=> {
            
        //      tcuerpoFiltrado.removeChild(item);
        // });
        // console.log(filtrado);
        
        // console.log(tcuerpoFiltrado.childNodes);
        filtrado.forEach((item) => {
            if(item.tipo === tipoAnimal.Perro){
                var id = 0;
                let auxPerro = <Perro>item;
                let row = document.createElement("tr");
                let colNombre = document.createElement("td");
                row.setAttribute("id",""+id++);
                // console.log(item.nombre);
                let textNombrePerro = document.createTextNode(auxPerro.nombre);
                colNombre.appendChild(textNombrePerro);
                row.appendChild(colNombre);

                let colRaza = document.createElement("td");
                let textRaza = document.createTextNode(auxPerro.raza);
                colRaza.appendChild(textRaza);
                row.appendChild(colRaza);

                let colTipo = document.createElement("td");
                let textTipo = document.createTextNode(auxPerro.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                notificacionFiltro(true);
                tcuerpoFiltrado.appendChild(row);
            }
            else if(item.tipo === tipoAnimal.Gato){
                var id = 0;
                let auxGato = <Gato>item;
                let row = document.createElement("tr");
                let colNombre = document.createElement("td");
                row.setAttribute("id",""+id++);
                // console.log(item.nombre);
                let textNombreGato = document.createTextNode(auxGato.nombre);
                colNombre.appendChild(textNombreGato);
                row.appendChild(colNombre);

                // console.log(auxGato.vidas);
                let colVida = document.createElement("td");
                let textVida = document.createTextNode("" +auxGato.vidas);
                colVida.appendChild(textVida);
                row.appendChild(colVida);

                let colTipo = document.createElement("td");
                let textTipo = document.createTextNode(auxGato.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                notificacionFiltro(true);
                tcuerpoFiltrado.appendChild(row);
            }
            else if(item.tipo === tipoAnimal.Pajaro){
                var id = 0;
                let auxPajaro = <Pajaro>item;
                let row = document.createElement("tr");
                let colNombre = document.createElement("td");
                row.setAttribute("id",""+id++);
                // console.log(item.nombre);
                let textNombrePajaro = document.createTextNode(auxPajaro.nombre);
                colNombre.appendChild(textNombrePajaro);
                row.appendChild(colNombre);

                // console.log(auxPajaro.tamaño);
                let colTamaño = document.createElement("td");
                let textTamaño = document.createTextNode("" +auxPajaro.tamaño);
                colTamaño.appendChild(textTamaño);
                row.appendChild(colTamaño);

                let colTipo = document.createElement("td");
                let textTipo = document.createTextNode(auxPajaro.tipo);
                colTipo.appendChild(textTipo);
                row.appendChild(colTipo);
                notificacionFiltro(true);
                tcuerpoFiltrado.appendChild(row);
            }
            // console.log(item);
            
        });
    }
    
    export function modificarDatos(event){
            // var index = celda.parentNode.parentNode.rowIndex;
            
            event.preventDefault();
            var divModificar = (<HTMLInputElement>document.getElementById("divCampos"));
            var botonModificar = (<HTMLInputElement>document.getElementById("botonModificar"));
            var botonEliminar = (<HTMLInputElement>document.getElementById("botonEliminar"));
            
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
            
            (<HTMLInputElement>document.getElementById("nombre")).value = nombre;
            (<HTMLInputElement>document.getElementById("detalle")).value = detalle;
            
            botonModificar.addEventListener("click",()=>{
                let nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
                let detalle = (<HTMLInputElement>document.getElementById("detalle")).value;
                
                // console.log("asd");
                for (let index = 1; index < listaAnimales.length; index++) {
                    
                    if(listaAnimales[index].getAttribute("id") === id){
                        
                        listaAnimales[index].childNodes[0].textContent = nombre;
                        listaAnimales[index].childNodes[1].textContent = detalle;
                        divModificar.hidden = true;
                        return true;
                    }
                }
            });

            botonEliminar.addEventListener("click",()=>{
                var tabla = document.getElementById("tcuerpo");
                // console.log(listaAnimales);
                for (let index = 1; index < listaAnimales.length; index++) {
                    
                    
                    if(listaAnimales[index].getAttribute("id") === id){
                        
                        var celda = listaAnimales[index];
                        
                        tabla.removeChild(celda);
                        
                        

                        listaMascotas.splice(index,1);
                        console.log(listaMascotas);
                        divModificar.hidden = true;
                        
                    }
            
                }
                
                for (let i = 0; i < listaMascotas.length; i++){
                    
                    if(listaMascotas[i].id === idNumber){
                        listaMascotas.splice(i,1);
                    // console.log(listaMascotas);

                    }

                }
            });
    }
    
    export function agregarTabla(){
        
        //poner hidden false a select de filtro
        let selectFilter = (<HTMLInputElement>document.getElementById("selectFilter"));
        selectFilter.hidden = false;

        let nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        let detalle = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        let tipo = (<HTMLInputElement>document.getElementById("select")).value;
        

        var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpo"));
        var row = document.createElement("tr");

        row.addEventListener("dblclick",modificarDatos);
        row.setAttribute("id","" + id++);

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
    
}