import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoInvestigacionComponent } from './proyecto-investigacion.component';

describe('ProyectoInvestigacionComponent', () => {
  let component: ProyectoInvestigacionComponent;
  let fixture: ComponentFixture<ProyectoInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
