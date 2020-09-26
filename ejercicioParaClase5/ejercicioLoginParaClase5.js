window.addEventListener("load",validar);
var cont = 0;

function validar(){
    
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var enviar = document.getElementById("botonEnviar");
    var mostrarDiv = document.getElementById("botonMostrarDiv");
    var esconderDiv = document.getElementById("btnEsconder");
    var limpiar = document.getElementById("botonLimpiar");
    var olvide = document.getElementById("olvide");
    

    // var tabla = document.getElementById("tabla"),rIndex,cIndex;
    


    mostrarDiv.addEventListener("click",accionMostrarDiv);
    esconderDiv.addEventListener("click",cerrarDiv);

    user.addEventListener("blur",validarCampos);
    pass.addEventListener("blur",validarCampos);

    enviar.addEventListener("click",validarBoton);
    limpiar.addEventListener("click",limpiarCampos);
    
    olvide.addEventListener("click",olvidePass);
    
    
}

function olvidePass(){
    alert("Usuario: usuario - Pass: 1234")
}


function accionMostrarDiv(){
    document.getElementById("div").hidden = false;     

}
function cerrarDiv(){
    document.getElementById("div").hidden = true; 
}

function validarCampos(){
    if (this.value === "") {
        this.className = " inputError";
        //document.getElementById("user").className = document.getElementById("user").className = " inputError";
        return 0;
    }
    else{
        this.className = this.className.replace(" inputError", "inputSinError");
        //document.getElementById("user").className = document.getElementById("user").className.replace(" inputError", "inputSinError");
        return 1;
    }
}


function validarBoton(){
    if (user.value === "" || pass.value === "") {
        alert("Ingrese usuario y contraseña");
    }
    else{
        
        /**enviar peticion al servidor */
        var path = "http://localhost:3000/loginUsuario?usr="+user.value+"&pass="+pass.value;
        var devolvio = ajax("GET",path);
        console.log(devolvio);
        }
}
function limpiarCampos(){

    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
    
    document.getElementById("user").className = document.getElementById("user").className = " inputError";
    document.getElementById("pass").className = document.getElementById("pass").className = " inputError";

    
}

/** acer esto desde otro archivo */
var peticionHttp = new XMLHttpRequest();

function ejecutarPost(){
    var usr = $("user");
    var pass = $("pass");
    peticionHttp.onreadystatechange = respuestaPost;
    peticionHttp.open("POST","http://localhost:3000/loginUsuario");

    peticionHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // por ejemplo puedo pasar el token peticionHttp.setRequestHeader("token","a5s4d6a4s6d87a489dasd");
    peticionHttp.send("usr="+usr+"&pass="+pass);

}
function $(id){
    return document.getElementById(id).value;
}
function respuestaPost(){
    if(peticionHttp.readyState == 4){
        if (peticionHttp.status == 200) {
            /**cuando tengo respuesta de servidor lo casteo a obj json */
            var respuesta  = peticionHttp.responseText;

            alert(respuesta);
        }
        else{
            alert("error");
            
        }
    }
}