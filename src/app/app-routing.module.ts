import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Inicio',component:HomeComponent},
  {path:'Eventos',component:EventosComponent},
  {path:'Calculadora',component:CalculadoraComponent},
  {path:'nuevoEvento',component:NuevoEventoComponent},
  {path:'verDetalle/:id',component:VerDetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
