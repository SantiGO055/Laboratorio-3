/**Hacer funcion para que reciba que metodo quiero ejecutar y que ruta
de 4 parametros, string metodo, string ruta, function callback */
var peticionHttp = new XMLHttpRequest();
/**agregar como parametro el callback que recibe una funcion */
function ajax(metodo,ruta, callback,send = ""){
    peticionHttp.onreadystatechange = callback;

    //#region callback comentada
    // function(){
    //     //el servidor responde con un estado que es un numero, un 200 si esta ok
    //     if (peticionHttp.readyState === XMLHttpRequest.DONE && peticionHttp.status === 200) {
    //         console.log(peticionHttp.responseText);
    //         return peticionHttp.responseText;
    //     }
    // }s
    //#endregion callback comentada

    peticionHttp.open(metodo,ruta,true); //true si es asincrono
    /**logica para metodo post */
    if (metodo == 'POST') {
        peticionHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        peticionHttp.send(send);
    }
    if(metodo == 'GET'){
        peticionHttp.send();
    }
    if (peticionHttp.responseText == true) {
        
        return true;
    }
    else{
        return false;
    }
}