import {HomeComponent} from "./home/home.component";
import {Routes} from "@angular/router";
import {ModeloPacienteComponent} from "./modelo-paciente/modelo-paciente.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {ModeloMedicamentoComponent} from "./modelo-medicamento/modelo-medicamento.component";


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent },
  {
    path: 'modeloPaciente/:idPaciente/modeloMedicamento/:idMedicamento',
    component: ModeloMedicamentoComponent },
  {
    path: 'modeloPaciente/:idPaciente',
    component: ModeloPacienteComponent,
    children: [{
      path: 'modeloMedicamento/:idMedicamento',
      component: ModeloMedicamentoComponent
    }]
  },
  {
    path: 'carrito',
    component: CarritoComponent }
];
