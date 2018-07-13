import {HomeComponent} from "./home/home.component";
import {Routes} from "@angular/router";
import {ModeloPacienteComponent} from "./modelo-paciente/modelo-paciente.component";
import {ModeloMedicamentoComponent} from "./modelo-medicamento/modelo-medicamento.component";
import {CarritoComponent} from "./carrito/carrito.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'modeloPaciente', component: ModeloPacienteComponent },
  { path: 'modeloMedicamento', component: ModeloMedicamentoComponent },
  { path: 'carrito', component: CarritoComponent }
];
