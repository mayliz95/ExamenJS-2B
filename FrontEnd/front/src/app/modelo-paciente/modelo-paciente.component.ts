import {Component, Input, OnInit} from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../Servicios/paciente.service";
import {Paciente} from "../Clases/Paciente";
import {Medicamento} from "../Clases/Medicamento";
import {isNumber} from "util";

@Component({
  selector: 'app-modelo-paciente',
  templateUrl: './modelo-paciente.component.html',
  styleUrls: ['./modelo-paciente.component.css'],
  providers: [PacienteService, MedicamentoService]
})
export class ModeloPacienteComponent implements OnInit {

  pacienteSeleccionado: Paciente;
  medicamentosLista = [];
  limiteMostrar = 8;

  constructor(private pacienteService: PacienteService,
              private _activatedRoute: ActivatedRoute,
              private medicamentosService: MedicamentoService,
              private _router: Router){
    this._activatedRoute.params.subscribe(params =>{
      this.getPaciente(params['idPaciente']);
    });
  }

  ngOnInit() {
  }

  getPaciente(idPaciente) {
    this.pacienteService.getPacientePorId(idPaciente).subscribe(
      (result: any) => {
        this.pacienteSeleccionado = result;
        this.medicamentosLista = this.pacienteSeleccionado.medicamentos
      }
    );
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
