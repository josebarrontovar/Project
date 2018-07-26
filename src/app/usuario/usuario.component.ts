import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { 

  }

  values = '';
  onKey(value: number) {
    alert("Se compararon: " + (this.values += value)+ " productos" );
    
  }

  ngOnInit() {
  }

}
