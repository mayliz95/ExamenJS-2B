import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medicamentos-cards',
  templateUrl: './medicamentos-cards.component.html',
  styleUrls: ['./medicamentos-cards.component.css'],
  providers: [MedicamentoService],
})
export class MedicamentosCardsComponent implements OnInit {

  medicamentos = [];

  constructor(private medicamentosService: MedicamentoService, private _router: Router){
  }

  ngOnInit() {
    this.medicamentosService.getMedicamentos().subscribe(
      (result: any[]) => {
        this.medicamentos = result;
      }
    );
  }

  irModeloMedicamento(idPaciente, idMedicamento) {
    const url = ['modeloPaciente', idPaciente, 'modeloMedicamento', idMedicamento];
    this._router.navigate(url);
  }
}
