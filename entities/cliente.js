import { Persona } from "./Persona";

export class Cliente extends Persona{
    nombre;
    dni;

    constructor(nombre, dni){
        super(nombre, dni);
    }
}