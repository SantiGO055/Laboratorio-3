namespace clase8{
    var id = 0;
    var idPerro = 0;
    var idGato = 0;
    var idPajaro = 0;
    window.addEventListener("load",ejecutarBoton);
    var listaMascotas:Array<Animal> = new Array<Animal>();

    export function ejecutarBoton(){
        // let mascota:Perro = new Perro(); //por que el constructor lo declare con ? que no es obligatorio el nombre

        let select = document.getElementById("select");

        select.addEventListener("change",prepararCampos);
        let filter = document.getElementById("selectFilter");

        filter.addEventListener("change",filterList);
        // let filter = document.getElementById("selectFilter");

        // filter.addEventListener("change",filterList);
        // botonAgregarGato.addEventListener("click",AgregarAnimal);
        // botonAgregarPajaro.addEventListener("click",AgregarAnimal);
        
        
        
    }
    export function prepararCampos(event){
        event.preventDefault();
        // console.log("asd");
        let botonAgregar = document.getElementById("btnAgregar");
        
        let labelDetalle = (<HTMLInputElement>document.getElementById("labelDetalle"));
        let titulo = (<HTMLInputElement>document.getElementById("titulo"));
        let inputDetalle = (<HTMLInputElement>document.getElementById("inputDetalle"));

        

        if(event.target.value === "Perro"){
            labelDetalle.textContent = "Raza";
            titulo.textContent = "Agregar perro";
            botonAgregar.addEventListener("click",agregarPerroALaLista);
            
        }
        else if(event.target.value === "Gato"){
            titulo.textContent = "Agregar gato";
            labelDetalle.textContent = "Vidas";
            botonAgregar.addEventListener("click",agregarGatoALaLista);
        }
        else{
            titulo.textContent = "Agregar pajaro";
            labelDetalle.textContent = "Tamaño";
            botonAgregar.addEventListener("click",agregarPajaroALaLista);
            
        }
        // console.log(event.target.value);

        // inputDetalle.setAttribute("id","raza");
        

    }

    export function agregarPerroALaLista(){
        
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;

        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        
        // console.log(nombre);
        var raza = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        // console.log();

        let mascotaPerro:Perro = new Perro(nombre,raza,idPerro++);
        btnAgregar.removeEventListener("click", agregarPerroALaLista);
        AgregarAnimal(mascotaPerro);
        
        
    }
    export function agregarGatoALaLista(){
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        // console.log(nombre);
        var vidas = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        
        
        let mascotaGato:Gato = new Gato(nombre,Number(vidas),idGato++);
        
        btnAgregar.removeEventListener("click", agregarGatoALaLista);
        // console.log(mascotaGato);
        AgregarAnimal(mascotaGato);
        
        
    }
    export function agregarPajaroALaLista(){
        var btnAgregar = (<HTMLInputElement>document.getElementById("btnAgregar"));
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        // console.log(nombre);
        var tamaño = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        
        let mascotaPajaro:Pajaro = new Pajaro(nombre,tamaño,idPajaro++);
        btnAgregar.removeEventListener("click", agregarPajaroALaLista);
        
        AgregarAnimal(mascotaPajaro);
        
        
    }
    
    export function AgregarAnimal(mascota:Animal){
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
        
        // listaMascotas.push(mascota1,mascota2);
        // console.log(mascota);
        // listaMascotas.forEach((item) => {
        //     let aux = <Perro>item;
        //     listaMascotas
        //     console.log(item.hacerRuido() + " " + item.nombre + " " + aux.raza);
        // });
    }
    export function filterList(event){
        event.preventDefault();
        
        // console.log(listaMascotas);
        
        if(listaMascotas!=null){

            if(event.target.value === "Perro"){
                
                var filtrado = listaMascotas.filter((item)=>{
                    console.log(item.tipo == tipoAnimal.Perro);
                    return item.tipo == tipoAnimal.Perro;
                });
                agregarTablaFiltrada(filtrado);
            }
            else if(event.target.value === "Gato"){
                
            }
            else{
                
            }
            // if(item.tipo === tipoAnimal.Perro){
            //     var perroFiltrado = listaMascotas.filter((itemPerro)=>{
            //         return num>3;
            //     });
            //     console.log("Metodo FILTER");
            //     console.log(numsFiltrados);
            //     console.log("");
            // }
            // let aux = <Perro>item;
            // console.log(listaMascotas);
        }
        else{
            // console.log(listaMascotas);
        }
        
    }
    export function agregarTablaFiltrada(filtrado:Array<Animal>){
        
        var tcuerpoFiltrado = (<HTMLInputElement>document.getElementById("tcuerpoFiltrado"));
        var row = document.createElement("tr");
        var colNombre = document.createElement("td");

        console.log(filtrado);
        filtrado.forEach((item) => {
            if(item.tipo === tipoAnimal.Perro){
                let auxPerro = <Perro>item;
                console.log(item.nombre);
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
            console.log(item);
            
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
                        
                        

                        // console.log(listaMascotas);
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
        
        let nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        let detalle = (<HTMLInputElement>document.getElementById("inputDetalle")).value;
        let tipo = (<HTMLInputElement>document.getElementById("select")).value;
        

        var tcuerpo = (<HTMLInputElement>document.getElementById("tcuerpo"));
        var row = document.createElement("tr");

        row.addEventListener("dblclick",modificarDatos);
        row.setAttribute("id","" + id++);

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
    export function ModificarAnimal(){
        
    }
    export function EliminarAnimal(){
        
    }
    export function MostrarAnimal(){
        
    }
}