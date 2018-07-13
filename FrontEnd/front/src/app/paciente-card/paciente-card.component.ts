import { Component, OnInit } from '@angular/core';
import {PacienteService} from "../Servicios/paciente.service";
import {Paciente} from "../Clases/Paciente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.css'],
  providers: [PacienteService],
})
export class PacienteCardComponent implements OnInit {

  pacientes = [];

  constructor(private pacienteService: PacienteService, private _router: Router) {
  }
  ngOnInit() {
    this.pacienteService.getPacientes().subscribe(
      (result: any []) => {
        this.pacientes = result;
      }
    );
  }

  irAModeloPaciente(idPaciente: string) {
    const url = ['/modeloPaciente', idPaciente];
    this._router.navigate(url);
  }
}
