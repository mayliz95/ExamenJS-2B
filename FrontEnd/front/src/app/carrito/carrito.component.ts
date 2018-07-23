import {Component, Inject, OnInit} from '@angular/core';
import {CarritoService} from "../Servicios/carrito.service";
import { MatDialog, MatDialogConfig} from "@angular/material";
import {DialogoComponent} from "../dialogo/dialogo.component";
import {Medicamento} from "../Clases/Medicamento";
import {Usuario} from "../Clases/usuario";
import {UsuarioService} from "../Servicios/usuario.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [CarritoService, UsuarioService]
})
export class CarritoComponent implements OnInit {

  medicamentoArreglo = [];
  totaGramosAIngerir;
  usuario: Usuario;

  constructor(private serviceCarrito: CarritoService,
              public dialog: MatDialog,
              private _usuarioService: UsuarioService
  ) {
  }

  ngOnInit() {
    this.medicamentoArreglo = CarritoService.arreglo_Carrito;
    this.totaGramosAIngerir = this.calcularTotalGramos()
    this._usuarioService.getUsuarioPorId(1).subscribe(
      (result: any) => {
        this.usuario = result;
      }
    );
  }

  calcularTotalGramos (): Number {
    var sum = 0;
    this.medicamentoArreglo.forEach( function addNumber(value) {
      sum += value.gramosAIngerir; }
    );
    return sum;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Datos de Facturación'
    };

    const dialogRef = this.dialog.open(DialogoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed");
      console.log(result)
    });
  }

  eliminar(medicamento: Medicamento) {
    let indice: number = CarritoService.arreglo_Carrito.indexOf(medicamento);
    console.log("Indice: " + indice);
    CarritoService.arreglo_Carrito.splice(indice,1);
    this.medicamentoArreglo = CarritoService.arreglo_Carrito;
    this.totaGramosAIngerir = this.calcularTotalGramos();
  }
}
