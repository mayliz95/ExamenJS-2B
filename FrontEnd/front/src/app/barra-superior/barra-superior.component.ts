import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  nombreUsuario = "Mayra Rosero";
  imgUsuario = "http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg";
  datoABuscar;

  constructor() { }

  ngOnInit() {
  }

  cargarDatosbusqueda() {

  }
}
