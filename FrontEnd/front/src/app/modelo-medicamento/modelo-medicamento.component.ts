import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modelo-medicamento',
  templateUrl: './modelo-medicamento.component.html',
  styleUrls: ['./modelo-medicamento.component.css'],
  providers: [MedicamentoService]
})
export class ModeloMedicamentoComponent implements OnInit {

  medicamentoSeleccionado;

  constructor(private _medicamentoService: MedicamentoService, private _activatedRoute: ActivatedRoute, private _router: Router) {
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
    const url = ['/carrito'];
    console.log(url);
    this._router.navigate(url);
  }
}
