import { Component, OnInit } from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {Router} from "@angular/router";
import {PacienteService} from "../Servicios/paciente.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MedicamentoService, PacienteService]
})
export class HomeComponent implements OnInit {

  medicamentos = [];
  pacientes = [];
  datoABuscar;

  constructor(private medicamentosService: MedicamentoService,
              private pacienteService: PacienteService
  ){
  }
  ngOnInit() {
    this.pacienteService.getPacientes().subscribe(
      (result: any []) => {
        this.pacientes = result;
      }
    );
    this.medicamentosService.getMedicamentos().subscribe(
      (result: any[]) => {
        this.medicamentos = result;
      }
    );
  }
  cargarDatosbusqueda() {
    this.medicamentosService.buscarMedicamento(this.datoABuscar).subscribe(
      (result: any[]) => {
        this.medicamentos = result;
      }
    );
    this.pacienteService.buscarPaciente(this.datoABuscar).subscribe(
      (result: any[]) => {
        this.pacientes = result;
      }
    );
  }
}
