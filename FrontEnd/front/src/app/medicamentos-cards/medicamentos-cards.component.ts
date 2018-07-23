import {Component, Input, OnInit} from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {Router} from "@angular/router";
import {isNumber} from "util";
import {Medicamento} from "../Clases/Medicamento";

@Component({
  selector: 'app-medicamentos-cards',
  templateUrl: './medicamentos-cards.component.html',
  styleUrls: ['./medicamentos-cards.component.css'],
  providers: [MedicamentoService],
})
export class MedicamentosCardsComponent implements OnInit {

  @Input() medicamentosLista;
  limiteMostrar = 8;

  constructor(private medicamentosService: MedicamentoService, private _router: Router){
  }
  ngOnInit() {
  }
  irModeloMedicamento(idPaciente, idMedicamento) {

    if (!isNumber(idPaciente)) {
      idPaciente = idPaciente.id;
    } else {
      idPaciente = idPaciente
    }
    const url = ['/modeloPaciente', idPaciente, 'modeloMedicamento', idMedicamento];
    console.log(url);
    this._router.navigate(url);
  }
  cargarMas() {
    this.limiteMostrar += 8;
    if (this.limiteMostrar > this.medicamentosLista.length) {
      this.limiteMostrar = this.medicamentosLista.length;
    }
  }
}
