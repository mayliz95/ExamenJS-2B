import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CarritoService} from "../Servicios/carrito.service";

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  nombreUsuario = "Mayra Rosero";
  imgUsuario = "http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg";
  @Input() numeroItems = CarritoService.arreglo_Carrito.length;

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  irAHome() {
    const url = ['/home'];
    this._router.navigate(url);
  }
  irACarrito() {
    const url = ['/carrito'];
    console.log(url);
    this._router.navigate(url);
  }
}
