var clase8;
(function (clase8) {
    var Gato = /** @class */ (function () {
        function Gato(nombre, vidas) {
            this.nombre = nombre;
            this.tipo = clase8.tipoAnimal.Gato;
        }
        Gato.prototype.hacerRuido = function () {
            return "Miau";
        };
        return Gato;
    }());
    clase8.Gato = Gato;
})(clase8 || (clase8 = {}));
