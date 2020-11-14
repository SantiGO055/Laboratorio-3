namespace clase8{
    export class Perro implements Animal{
        nombre: string;
        raza: string;
        tipo:tipoAnimal;

        constructor(nombre:string,raza:string){
            this.nombre = nombre;
            this.raza = raza;
            this.tipo = tipoAnimal.Perro;
        }
        
        hacerRuido():any{
            return "Guau";
        }
    }
}