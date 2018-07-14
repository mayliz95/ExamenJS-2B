import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PacienteService {

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

  getPacientes() {
    let header = PacienteService.getCommonHeaders();
    return this.http.get("http://localhost:1337/paciente",{headers: header});
  }

  getPacientePorId(idPaciente) {
    let header = PacienteService.getCommonHeaders();
    return this.http.get("http://localhost:1337/paciente/" + idPaciente ,{headers: header});
  }
}
