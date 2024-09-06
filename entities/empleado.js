import { Persona } from "./Persona";

export class Empleado extends Persona{
    comisiones;

    constructor(nombre, dni){
        super(nombre, dni);
    }
}