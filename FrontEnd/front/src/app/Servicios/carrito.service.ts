import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Medicamento} from "../Clases/Medicamento";

@Injectable()
export class CarritoService {

  static arregloCarrito = [];
  static arreglo_Carrito:Array<Medicamento>=[];

  constructor(private http: HttpClient) {
  }

}
