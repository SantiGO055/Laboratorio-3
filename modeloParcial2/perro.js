var clase8;
(function (clase8) {
    var Perro = /** @class */ (function () {
        function Perro(nombre, raza, id) {
            this.nombre = nombre;
            this.raza = raza;
            this.tipo = clase8.tipoAnimal.Perro;
            this.id = id;
        }
        Perro.prototype.hacerRuido = function () {
            return "Guau";
        };
        return Perro;
    }());
    clase8.Perro = Perro;
})(clase8 || (clase8 = {}));
