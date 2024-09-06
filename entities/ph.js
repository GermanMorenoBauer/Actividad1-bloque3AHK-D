import { Inmueble } from "./inmueble";

export class Ph extends Inmueble{

    
    constructor(tamanio,ambientes,operacion){
        super(this.calcularValor(), tamanio, ambientes, operacion, zona);
    }

    calcularValor(){
        const VALOR_MINIMO = 500000;
        const VALOR_AMBIENTE = 14000;
        return VALOR_MINIMO + VALOR_AMBIENTE * this.ambientes;
    }
}