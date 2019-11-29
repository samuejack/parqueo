let carrosEnGaraje: Carro[] = [];
let carrosSacados: any[] = [];
let total: number = 0;
export class Carro {
  public placa: string;
  public horaEntrada: number;
  public editar: boolean
  constructor(placa: string, horaEntrada: number, editar?: boolean) {
    this.placa = placa;
    this.horaEntrada = horaEntrada;
    this.editar = false;
  }

  entraCarro() {
    let nuevoCarro = new Carro(this.placa, this.horaEntrada);
    if(carrosEnGaraje.find(carros => carros.placa == nuevoCarro.placa)){
       return alert('Ya existe esta placa...');
    } else return carrosEnGaraje.push(nuevoCarro);
  }
  sacaCarro(placa: string, horaSalida: number) {
    let totalCobrar: number;
    let totalHoras: number;

    let carroParaSacar = this.buscaCarro(placa)

    totalCobrar = (horaSalida - carroParaSacar.busqueda.horaEntrada) * 2000;
    totalHoras = horaSalida - carroParaSacar.busqueda.horaEntrada;

    this.guardarCarroSacado(carroParaSacar.busqueda, totalHoras, totalCobrar);
    carrosEnGaraje.splice(carroParaSacar.i, 1)
    this.total(totalCobrar)
    return totalCobrar;
  }
  obtenerCarrosGarage() {
    return carrosEnGaraje;
  }
  guardarCarroSacado(carro: Carro, totalHoras: number, totalCobrado: number){
    carrosSacados.push({carro, totalHoras, totalCobrado})
  }
  obtenerCarrosSacados() {
        return carrosSacados;
  }
  total(suma?: number) {
    return total += suma || 0;
  }

  buscaCarro(placa: string){
    let i = -1
    let busqueda = carrosEnGaraje.find(buscar => {
        i++;
        return buscar.placa === placa
    });

    return {busqueda, i}
  }
}
