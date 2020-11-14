namespace clase8{
    export class Pajaro implements Animal{
        id:number;
        nombre: string;
        tamaño: string;
        tipo:tipoAnimal;

        constructor(nombre:string,tamaño:string,id:number){

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