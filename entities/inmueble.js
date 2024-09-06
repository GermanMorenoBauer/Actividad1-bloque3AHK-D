import { Operacion } from "./operacion";
import { Reserva } from "./reserva";

export class Inmueble{
    tamanio;
    ambientes;
    valor;
    operacion;
    zona;
    plus;
    esReservado;

    constructor(valor, tamanio, ambientes, operacion, zona){
        this.plus = this.calcularPlus();
        this.valor = valor + plus;
        this.tamanio = tamanio;
        this.ambientes = ambientes;
        this.operacion = operacion;
        this.zona = zona;
        this.esReservado = false;
    }

    calcularValor(){}

    
    calcularPlus(){
        switch(this.zona){
            case "recoleta":
                this.plus = 50000;
                break;
            case "palermo":
                this.plus = 45000;
                break;
            case "puerto madero":
                this.plus = 60000; 
                break;
            default:
                this.plus = 0;
        }

    }

    reservarInmueble(empleado, cliente){
        this.esReservado = true;
        const reserva = new Reserva(empleado, cliente, this)
        
    }

    cancelarReserva(){
        this.esReservado = false;
    }

}