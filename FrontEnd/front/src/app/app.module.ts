import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PacienteCardComponent } from './paciente-card/paciente-card.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MedicamentosCardsComponent } from './medicamentos-cards/medicamentos-cards.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { ModeloPacienteComponent } from './modelo-paciente/modelo-paciente.component';
import { ModeloMedicamentoComponent } from './modelo-medicamento/modelo-medicamento.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteCardComponent,
    BarraBusquedaComponent,
    MedicamentosCardsComponent,
    HomeComponent,
    ModeloPacienteComponent,
    ModeloMedicamentoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      {
        useHash: true}),
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
