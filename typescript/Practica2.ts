// Funciones Básicas
function sumar( a, b ):number{
  return a + b;
}

var contar = function( heroes ){
  return heroes.length;
}
var superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:any = false ){
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ... personas:string[] ){
  return personas.join(", ");
}
let supermann:string = unirheroes("Clark", "Joseph", "Kent");
let ironman:string = unirheroes("Anthony", "Edward", "Tony", "Stark");

// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
