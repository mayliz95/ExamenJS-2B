import {Component, Input, OnInit} from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {Router} from "@angular/router";
import {isNumber} from "util";

@Component({
  selector: 'app-medicamentos-cards',
  templateUrl: './medicamentos-cards.component.html',
  styleUrls: ['./medicamentos-cards.component.css'],
  providers: [MedicamentoService],
})
export class MedicamentosCardsComponent implements OnInit {

  @Input() medicamentosLista;

  constructor(private medicamentosService: MedicamentoService, private _router: Router){
  }

  ngOnInit() {
  }

  irModeloMedicamento(idPaciente, idMedicamento) {

    if (!isNumber(idPaciente)) {
      console.log('if');
      idPaciente = idPaciente.id;
    } else {
      idPaciente = idPaciente
    }

    const url = ['/modeloPaciente', idPaciente, 'modeloMedicamento', idMedicamento];
    console.log(url);
    this._router.navigate(url);
  }
}
