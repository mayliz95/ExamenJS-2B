import {Paciente} from "./Paciente";

export class Medicamento {

  public id: number;
  public createdAt: string;
  public updatedAt: string;
  public gramosAIngerir: number;
  public nombre: string;
  public composicion: string;
  public usadoPara: string;
  public fechaCaducidad: string;
  public numeroPastillas: number;
  public pacienteIdFK: Paciente;


  constructor(){}
}
