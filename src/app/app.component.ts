import { Component, OnInit } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  carro: Carro;
  carros: Carro[];
  carrosSacados: any[];
  horaSalida: number = null;
  total: number = 0;
  constructor() {
  }
  ngOnInit(){
  }
  guardaCarro(guardarCarro){
    this.carro = new Carro(guardarCarro.placa, guardarCarro.horas);
    this.carro.entraCarro();
    this.cargarCarros();
  }
  cargarCarros(){
    this.carros = this.carro.obtenerCarrosGarage();    
    this.carrosSacados = this.carro.obtenerCarrosSacados();
  }

  prepararSacarCarro(carro: Carro){
    return carro.editar = true;
  }
  sacarCarro(carroData){
    
    if (carroData.horaEntrada >= this.horaSalida) {
      alert("la hora de salida no puede ser menor o igual a la hora de entrada")
    } else {
      this.carro.sacaCarro(carroData.placa, this.horaSalida);
      this.horaSalida = null;
      this.total = this.carro.total();
    }
  }
}
