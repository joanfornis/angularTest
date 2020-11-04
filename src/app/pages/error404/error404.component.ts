import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  title = "Error 404";
  contents = [{paragraph:'La página no existe, si desea puede volver al inicio pinchando en el siguiente botón:',button:{link:'/',text:'Volver al Inicio'}}]


  constructor() { }

  ngOnInit(): void {
  }

}
