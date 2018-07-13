import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosCardsComponent } from './medicamentos-cards.component';

describe('MedicamentosCardsComponent', () => {
  let component: MedicamentosCardsComponent;
  let fixture: ComponentFixture<MedicamentosCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
