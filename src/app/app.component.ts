import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchText;
  cards = [
    {
      "title":"1",
      "paragraph":"primero"
   },
   {
      "title":"2",
      "paragraph":"segundo"
   },
   {
      "title":"3",
      "paragraph":"tercero"
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
