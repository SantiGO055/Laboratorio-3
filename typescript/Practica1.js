// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var especialidades;
(function (especialidades) {
    especialidades[especialidades["fuerzaFlash"] = 5] = "fuerzaFlash";
    especialidades[especialidades["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    especialidades[especialidades["fuerzaBatman"] = 1] = "fuerzaBatman";
    especialidades[especialidades["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
})(especialidades || (especialidades = {}));
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
