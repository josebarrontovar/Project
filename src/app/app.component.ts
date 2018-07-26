import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  texto="Compra este Producto!";

  modTexto(){
    this.texto="Producto comprado!"
    return this.texto;
    }
}
