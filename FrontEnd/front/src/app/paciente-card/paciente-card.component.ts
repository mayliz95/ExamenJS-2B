import { Component, OnInit } from '@angular/core';
import {PacienteService} from "../Servicios/paciente.service";

@Component({
  selector: 'app-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.css'],
  providers: [PacienteService],
})
export class PacienteCardComponent implements OnInit {

  pacientes = [];

  constructor(private pacienteService: PacienteService) {
  }
  ngOnInit() {
    this.pacienteService.getPacientes().subscribe(
      (result: any) => {
        this.pacientes = result as String[];
      }
    );
  }
}
