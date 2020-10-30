import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "CardsV1";
  contents = [{title:'title1',paragraph:'paragraph1'},{title:'title2'},{title:'title3',paragraph:'paragraph3'}]

}
