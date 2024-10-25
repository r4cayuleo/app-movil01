import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestamosEquiposPage } from './prestamos-equipos.page';

describe('PrestamosEquiposPage', () => {
  let component: PrestamosEquiposPage;
  let fixture: ComponentFixture<PrestamosEquiposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosEquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
