import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-v1',
  templateUrl: './cards-v1.component.html',
  styleUrls: ['./cards-v1.component.scss']
})
export class CardsV1Component implements OnInit {

  @Input() title: string;
  @Input() contents: any;

  constructor() { }

  ngOnInit(): void {
  }

}