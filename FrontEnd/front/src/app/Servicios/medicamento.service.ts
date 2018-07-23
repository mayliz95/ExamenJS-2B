import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PacienteService} from "./paciente.service";

@Injectable()
export class MedicamentoService {

  constructor(private http: HttpClient) {
  }
  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }
  getMedicamentos() {
    let header = MedicamentoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/medicamento",{headers: header});
  }
  getMedicamentoPorId(idMedicamento) {
    let header = MedicamentoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/medicamento/" + idMedicamento ,{headers: header});
  }
  buscarMedicamento(parametroBusqueda) {
    let header = PacienteService.getCommonHeaders();
    return this.http.get('http://localhost:1337/medicamento?where={"nombre":{"contains":"' + parametroBusqueda + '"}}'
      ,{headers: header});
  }
  getMedicamentosPorPaciente(idPaciente) {
    let header = MedicamentoService.getCommonHeaders();
    return this.http.get("http://localhost:1337/paciente/" + idPaciente + "/medicamentos" ,{headers: header});
  }
}
