import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Home";
  contents : any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("./../assets/json/cards.json").subscribe(data =>{
      this.contents = data;
    })
  }

}
