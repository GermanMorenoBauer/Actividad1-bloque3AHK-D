package com.ahk.arg.ForSale.models.entities.operations;

import com.ahk.arg.ForSale.models.entities.Inmueble;
import com.ahk.arg.ForSale.models.entities.persona.Empleado;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public abstract class Operacion {
    protected Inmueble inmueble;

    public abstract Float calcularComisionPara(Empleado empleado);
}
