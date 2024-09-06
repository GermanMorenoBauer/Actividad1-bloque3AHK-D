export class Persona{
    nombre;
    dni;
    reservas;
    operaciones;

    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
        this.reservas = [];
        this.operaciones = [];
        
    }

    agregarReserva(reserva){
        this.reservas.push(reserva);
    }

    agregarOperacion(operacion){
        this.reservas.push(operacion);
    }
}