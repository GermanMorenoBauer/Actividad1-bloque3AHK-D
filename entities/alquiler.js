import { Operacion } from "./operacion";

export class Alquiler extends Operacion{
    cantMeses;
    valor_constante;


    constructor(cantMeses, inmueble){
        super("alquiler", inmueble);
        this.cantMeses = cantMeses;
        this.valor_constante = 50000;
        this.comision = calcularComision();
    }

    calcularComision(){ 
        return this.cantMeses * this.inmueble.valor / this.valor_constante;

    }
}