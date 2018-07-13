import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";

@Component({
  selector: 'app-medicamentos-cards',
  templateUrl: './medicamentos-cards.component.html',
  styleUrls: ['./medicamentos-cards.component.css'],
  providers: [MedicamentoService],
})
export class MedicamentosCardsComponent implements OnInit {

  medicamentos = [];

  constructor(private medicamentosService: MedicamentoService){
  }

  ngOnInit() {
    this.medicamentosService.getMedicamentos().subscribe(
      (result: any) => {
        this.medicamentos = result as String[];
      }
    );
  }
}
