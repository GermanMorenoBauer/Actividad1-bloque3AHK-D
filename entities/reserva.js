export class Reserva{
    empleado;
    Inmueble;
    cliente;
    constructor(empleado, cliente, inmueble){
        this.empleado = empleado;
        this.cliente = cliente;
        this.inmueble = inmueble;
        empleado.agregarReserva(this);
        empleado.agregarReserva(this);
    }
}