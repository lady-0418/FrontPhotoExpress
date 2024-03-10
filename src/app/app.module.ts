import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventosComponent,
    CalculadoraComponent,
    NuevoEventoComponent,
    VerDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
