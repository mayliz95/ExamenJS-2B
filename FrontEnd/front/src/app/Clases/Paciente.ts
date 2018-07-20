import {Medicamento} from "./medicamento";

export class Paciente {

  public Id: number;
  public createdAt: string;
  public updatedAt: string;
  public nombres: string;
  public apellidos: string;
  public fechaNacimiento: string;
  public hijos: number;
  public tieneSeguro: boolean;
  public medicamentos: Medicamento [];

  constructor(
  ) {}
}
