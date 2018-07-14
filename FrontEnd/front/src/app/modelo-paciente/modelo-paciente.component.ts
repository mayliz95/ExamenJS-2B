import {Component, Input, OnInit} from '@angular/core';
import {MedicamentoService} from "../Servicios/medicamento.service";
import {ActivatedRoute} from "@angular/router";
import {PacienteService} from "../Servicios/paciente.service";

@Component({
  selector: 'app-modelo-paciente',
  templateUrl: './modelo-paciente.component.html',
  styleUrls: ['./modelo-paciente.component.css'],
  providers: [PacienteService]
})
export class ModeloPacienteComponent implements OnInit {

  pacienteSeleccionado;

  constructor(private pacienteService: PacienteService, private _activatedRoute: ActivatedRoute){

    this._activatedRoute.params.subscribe(params =>{
      console.log(params['idPaciente']);
      this.getPaciente(params['idPaciente']);
    });
  }

  ngOnInit() {
  }

  getPaciente(idPaciente) {
    this.pacienteService.getPacientePorId(idPaciente).subscribe(
      (result: any) => {
        this.pacienteSeleccionado = result;
      }
    );
  }
}
