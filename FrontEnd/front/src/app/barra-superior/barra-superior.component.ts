import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CarritoService} from "../Servicios/carrito.service";
import {UsuarioService} from "../Servicios/usuario.service";
import {Usuario} from "../Clases/usuario";

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css'],
  providers: [UsuarioService]
})
export class BarraSuperiorComponent implements OnInit {

  usuario: Usuario;
  nombreUsuario = "Mayra Rosero";
  imgUsuario = "http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg";
  @Input() numeroItems = CarritoService.arreglo_Carrito.length;

  constructor(private _router: Router,
              private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this._usuarioService.getUsuarioPorId(1).subscribe(
      (result: any) => {
        this.usuario = result;
      }
    );
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
