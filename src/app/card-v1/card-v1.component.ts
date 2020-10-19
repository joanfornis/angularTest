import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-v1',
  templateUrl: './card-v1.component.html',
  styleUrls: ['./card-v1.component.scss']
})
export class CardV1Component implements OnInit {

  @Input() title: string;
  @Input() contents: any;

  constructor() { }

  ngOnInit(): void {
  }

}