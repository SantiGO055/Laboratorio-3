namespace clase8{
    export class Pajaro implements Animal{
        nombre: string;
        tamaño: string;
        tipo:tipoAnimal;

        constructor(nombre:string,tamaño:string){

            this.nombre = nombre;
            this.tamaño = tamaño;
            this.tipo = tipoAnimal.Pajaro;
        }
        
        hacerRuido():any{
            return "pipipi";
        }
    }
}