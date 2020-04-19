import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarAppComponent } from './verificar-app.component';

describe('VerificarAppComponent', () => {
  let component: VerificarAppComponent;
  let fixture: ComponentFixture<VerificarAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
