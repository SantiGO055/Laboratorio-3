namespace clase8{
    export class Gato implements Animal{
        nombre: string;
        vidas: number;
        tipo:tipoAnimal;

        constructor(nombre:string,vidas:number){
            this.nombre = nombre;
            this.tipo = tipoAnimal.Gato;
        }
        
        hacerRuido():any{
            return "Miau";
        }
    }
}