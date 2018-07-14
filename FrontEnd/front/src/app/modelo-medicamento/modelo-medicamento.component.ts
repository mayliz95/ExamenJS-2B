import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CarritoService} from "../Servicios/carrito.service";

@Component({
  selector: 'app-modelo-medicamento',
  templateUrl: './modelo-medicamento.component.html',
  styleUrls: ['./modelo-medicamento.component.css'],
  providers: [MedicamentoService, CarritoService]
})
export class ModeloMedicamentoComponent implements OnInit {

  medicamentoSeleccionado;

  constructor(private _medicamentoService: MedicamentoService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {

    this._activatedRoute.params.subscribe(params =>{
      console.log(params['idMedicamento']);
      this.getMedicamento(params['idMedicamento']);
    });

  }

  ngOnInit() {
  }

  getMedicamento(idMedicamento) {
    this._medicamentoService.getMedicamentoPorId(idMedicamento).subscribe(
      (result: any) => {
        this.medicamentoSeleccionado = result;
      }
    );
  }

  irACarrito() {
    CarritoService.arreglo_Carrito.push(this.medicamentoSeleccionado);
    const url = ['/carrito'];
    console.log(url);
    this._router.navigate(url);
  }
}
