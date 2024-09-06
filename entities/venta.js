import { Operacion } from "./operacion";

export class Venta extends Operacion{
    porcentaje;

    constructor(inmueble){
        super("venta", inmueble);
        this.comision = this.calcularComision();
    }

    calcularComision(){
        const PORCENTAJE = 1.5;
        PORCENTAJE/100 * this.inmueble.valor;
    }

}