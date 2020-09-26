/**Hacer funcion para que reciba que metodo quiero ejecutar y que ruta
de 4 parametros, string metodo, string ruta, function callback */
var peticionHttp = new XMLHttpRequest();
/**agregar como parametro el callback que recibe una funcion */
function ajax(metodo,ruta){
    peticionHttp.onreadystatechange = function(){
                    //el servidor responde con un estado que es un numero, un 200 si esta ok
                    if (peticionHttp.readyState === XMLHttpRequest.DONE && peticionHttp.status === 200) {
                        console.log(peticionHttp.responseText);
                        return peticionHttp.responseText;
                    }
                };

    peticionHttp.open(metodo,ruta,true);
    /**logica para metodo post */
    // if (metodo == 'POST') {
    //     peticionHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // }
    peticionHttp.send();
    if (peticionHttp.responseText == true) {
        return true;
    }
    else{
        return false;
    }
}
// function ejecutarPost(){
    
//     peticionHttp.onreadystatechange = respuestaPost;
//     peticionHttp.open("POST","http://localhost:3000/loginUsuario");
//     /**debo definir como le paso la info por post */

//     peticionHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     // por ejemplo puedo pasar el token peticionHttp.setRequestHeader("token","a5s4d6a4s6d87a489dasd");
//     peticionHttp.send("usr="+usr+"&pass="+pass);

// }

// function respuestaPost(){
//     if(peticionHttp.readyState == 4){
//         if (peticionHttp.status == 200) {
//             /**cuando tengo respuesta de servidor lo casteo a obj json */
//             var respuesta  = peticionHttp.responseText;

//             alert(respuesta);
//         }
//         else{
//             alert("error");
            
//         }
//     }
// }
