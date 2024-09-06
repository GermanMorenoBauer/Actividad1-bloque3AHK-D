import { Inmueble } from "./inmueble";

export class Departamento extends Inmueble{


    constructor(tamanio, ambientes, operacion){
        super(this.calcularValor(), tamanio, ambientes, operacion, zona)
    }

    calcularValor(){
        const VALOR_AMBIENTE = 350000; 
        return VALOR_AMBIENTE * this.ambientes;
    }
}