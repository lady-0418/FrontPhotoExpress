import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  cantidadEstudiantes: number = 0;
  togasChecked: boolean = false;
  costoPorEstudiante: number = 200;
  costoToga: number = 20;
  costoTotal: number | null = null;

  manejarCambioToga(event: any) {
    this.togasChecked = event.target.checked;
  }

  calcularCosto() {
    let costoEstudiantes = this.cantidadEstudiantes * this.costoPorEstudiante;
    let costoTogas = this.togasChecked ? this.cantidadEstudiantes * this.costoToga : 0;
    this.costoTotal = costoEstudiantes + costoTogas;
  }
}
