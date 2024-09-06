package com.ahk.arg.ForSale.models.entities;

import lombok.Data;

@Data
public abstract class Inmueble {
    protected Integer cantAmbientes;

    protected Float tamanioEnM2;

    private Zona zona;

    public abstract Float precio();

    public Float precioFinal(){
        return this.precio() + this.zona.getPrecio();
    }
}
