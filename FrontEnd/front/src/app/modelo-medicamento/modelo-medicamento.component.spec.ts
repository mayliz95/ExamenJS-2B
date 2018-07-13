import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloMedicamentoComponent } from './modelo-medicamento.component';

describe('ModeloMedicamentoComponent', () => {
  let component: ModeloMedicamentoComponent;
  let fixture: ComponentFixture<ModeloMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
