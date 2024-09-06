package com.ahk.arg.ForSale.controllers;

import com.ahk.arg.ForSale.models.entities.Zona;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/zonas")
public class ZonasController {

    private List<Zona> zonas;

    public ZonasController() {
        this.zonas = new ArrayList<>();
        Zona zona1 = new Zona();
        zona1.setNombre("Recoleta");
        this.zonas.add(zona1);
    }
    @GetMapping
    public ResponseEntity<List<Zona>> buscarTodos(){
        return new ResponseEntity<>(this.zonas, HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<Zona> crearZona(@RequestBody Zona zona){
        this.zonas.add(zona);
        return new ResponseEntity<>(zona, HttpStatus.CREATED);
    }
}
