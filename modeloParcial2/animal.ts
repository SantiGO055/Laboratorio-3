
namespace clase8{
    export interface Animal{ //exporto la clase para que lea el namespace
        id:number;
        nombre:string;

        tipo:any; //enumerado Perro Gato Pajaro
        hacerRuido():string; //si no indicamos bien el tipado no funciona
        
    }
    export enum tipoAnimal{
        Perro = "perro",
        Gato = "gato",
        Pajaro = "pajaro"
    }
}
