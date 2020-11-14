namespace clase8{
    export class Gato implements Animal{
        id:number;
        nombre: string;
        vidas: number;
        tipo:tipoAnimal;

        constructor(nombre:string,vidas:number,id:number){
            this.nombre = nombre;
            this.tipo = tipoAnimal.Gato;
            this.id = id;
        }
        
        hacerRuido():any{
            return "Miau";
        }
    }
}