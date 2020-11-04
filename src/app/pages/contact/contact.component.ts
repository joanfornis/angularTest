import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = "Contacto";
  contents = [{title:'Formulario de contacto',paragraph:'Le atenderemos pronto',button:{link:'/',text:'Volver al Inicio'}}]

  constructor() { }

  ngOnInit(): void {
  }

}
