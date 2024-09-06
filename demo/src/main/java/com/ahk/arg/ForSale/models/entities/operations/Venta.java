package com.ahk.arg.ForSale.models.entities.operations;

import com.ahk.arg.ForSale.models.entities.persona.Empleado;

public class Venta extends Operacion{

    private static Float porcentajeComision = 1.5F;

    @Override
    public Float calcularComisionPara(Empleado empleado) {
        return super.inmueble.precioFinal() * porcentajeComision;
    }
}
