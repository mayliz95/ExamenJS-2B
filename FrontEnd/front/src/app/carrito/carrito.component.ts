import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../Servicios/carrito.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [CarritoService]
})
export class CarritoComponent implements OnInit {

  medicamentoArreglo = [];

  constructor(private serviceCarrito: CarritoService) {
  }

  ngOnInit() {
    this.medicamentoArreglo = CarritoService.arreglo_Carrito;

  }

}
