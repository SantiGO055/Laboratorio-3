/**Hacer funcion para que reciba que metodo quiero ejecutar y que ruta
de 4 parametros, string metodo, string ruta, function callback */
function ajax(metodo,ruta){
    var peticionHttp = new XMLHttpRequest();
    peticionHttp.onreadystatechange = function(){
                    //el servidor responde con un estado que es un numero, un 200 si esta ok
                    if (peticionHttp.readyState === XMLHttpRequest.DONE && peticionHttp.status === 200) {
                        console.log(peticionHttp.responseText);
                        return true;
                    }
                };

    peticionHttp.open(metodo,ruta,true);
    peticionHttp.send();
    if (peticionHttp.responseText == true) {
        return true;
    }
    else{
        return false;
    }
}