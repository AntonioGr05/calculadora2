// app/controllers/application.js
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked variable2 = 0;
  @tracked variable3 = 0;
  @tracked resultado = 0;

  @action
  tomar(event) {
    this.variable2 = parseInt(event.target.value, 10); // Convertir a número usando parseInt()
  }

  @action
  tomar2(event) {
    this.variable3 = parseInt(event.target.value, 10); // Convertir a número usando parseInt()
  }

  @action
  sumar() {
    this.resultado = this.variable2 + this.variable3;
  }

  @action
  restar() {
    this.resultado = this.variable2 - this.variable3;
  }

  @action
  multiplicar() {
    this.resultado = this.variable2 * this.variable3;
  }

  @action
  dividir() {
    this.resultado = this.variable2 / this.variable3;
  }

  @action
  limpiar() {
    this.variable2 = 0;
    this.variable3 = 0;
    this.resultado = 0;
  }
}
