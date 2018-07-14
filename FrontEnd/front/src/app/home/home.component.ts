import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MedicamentoService]
})
export class HomeComponent implements OnInit {

  medicamentos = [];

  constructor(private medicamentosService: MedicamentoService){
  }

  ngOnInit() {
    this.medicamentosService.getMedicamentos().subscribe(
      (result: any[]) => {
        this.medicamentos = result;
      }
    );
  }

}
