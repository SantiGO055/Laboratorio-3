namespace clase8{
    export class Pajaro implements Animal{
        id:number;
        nombre: string;
        tamaño: Number;
        tipo:tipoAnimal;

        constructor(nombre:string,tamaño:Number,id:number){

            this.nombre = nombre;
            this.tamaño = tamaño;
            this.tipo = tipoAnimal.Pajaro;
            this.id = id;
        }
        
        hacerRuido():any{
            return "pipipi";
        }
    }
}