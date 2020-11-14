namespace clase8{
    export class Perro implements Animal{
        id:number;
        nombre: string;
        raza: string;
        tipo:tipoAnimal;

        constructor(nombre:string,raza:string,id:number){
            this.nombre = nombre;
            this.raza = raza;
            this.tipo = tipoAnimal.Perro;
            this.id = id;
        }
        
        hacerRuido():any{
            return "Guau";
        }
    }
}