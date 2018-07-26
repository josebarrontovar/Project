import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  texto="Compra este Producto!";

  modTexto(){
    this.texto="Producto comprado!"
    return this.texto;
  }

}
