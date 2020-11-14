var clase8;
(function (clase8) {
    var Pajaro = /** @class */ (function () {
        function Pajaro(nombre, tamaño, id) {
            this.nombre = nombre;
            this.tamaño = tamaño;
            this.tipo = clase8.tipoAnimal.Pajaro;
            this.id = id;
        }
        Pajaro.prototype.hacerRuido = function () {
            return "pipipi";
        };
        return Pajaro;
    }());
    clase8.Pajaro = Pajaro;
})(clase8 || (clase8 = {}));
