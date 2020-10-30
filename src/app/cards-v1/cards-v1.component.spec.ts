import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsV1Component } from './cards-v1.component';

describe('CardsV1Component', () => {
  let component: CardsV1Component;
  let fixture: ComponentFixture<CardsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
