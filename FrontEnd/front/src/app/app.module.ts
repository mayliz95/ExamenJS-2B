import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PacienteCardComponent } from './paciente-card/paciente-card.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from "@angular/common/http";
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
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PacienteCardComponent,
    MedicamentosCardsComponent,
    HomeComponent,
    ModeloPacienteComponent,
    ModeloMedicamentoComponent,
    CarritoComponent,
    BarraSuperiorComponent
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
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
