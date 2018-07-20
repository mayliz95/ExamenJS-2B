import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input() pacientes = [];
  limiteMostrar = 6;

  constructor(private pacienteService: PacienteService, private _router: Router) {
  }
  ngOnInit() {
  }

  irAModeloPaciente(idPaciente: string) {
    const url = ['/modeloPaciente', idPaciente];
    this._router.navigate(url);
  }

  cargarMas() {
    this.limiteMostrar += 6 ;
    if (this.limiteMostrar > this.pacientes.length) {
      this.limiteMostrar = this.pacientes.length;
    }
  }
}
