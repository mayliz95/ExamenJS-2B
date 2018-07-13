import {Medicamento} from "./medicamento";

export class Paciente {

  public Id: number;
  public createdAt: string;
  public updatedAt: string;
  public Nombres: string;
  public Apellidos: string;
  public Fecha_Nacimiento: string;
  public Hijos: number;
  public Tiene_Seguro: boolean;
  public Medicamentos: Medicamento [];

  constructor(
  ) {}
}
