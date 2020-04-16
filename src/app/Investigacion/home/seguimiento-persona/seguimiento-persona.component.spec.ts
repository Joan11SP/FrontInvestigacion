import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoPersonaComponent } from './seguimiento-persona.component';

describe('SeguimientoPersonaComponent', () => {
  let component: SeguimientoPersonaComponent;
  let fixture: ComponentFixture<SeguimientoPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
