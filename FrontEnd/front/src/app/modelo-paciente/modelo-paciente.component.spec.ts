import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPacienteComponent } from './modelo-paciente.component';

describe('ModeloPacienteComponent', () => {
  let component: ModeloPacienteComponent;
  let fixture: ComponentFixture<ModeloPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
