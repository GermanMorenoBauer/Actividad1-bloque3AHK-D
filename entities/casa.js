import { Inmueble } from "./inmueble";

export class Casa extends Inmueble{


    constructor(valor, tamanio, ambientes, operacion, zona){
        super(valor, tamanio, ambientes, operacion, zona);
    }
}