export class Operacion{
    tipo; // Puede ser venta o alquiler
    comision;
    valor_inmueble;
    inmueble;
    empleado;
    cliente;

    constructor(empleado, cliente, tipo, inmueble){
        this.tipo = tipo;
        this.inmueble = inmueble;
        this.empleado;
        this.cliente = cliente;
        empleado.agregarOperacion(this);
        cliente.agregarOperacion(this);
    }

    calcularComision(){}
}