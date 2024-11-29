import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrestamosDetallePage } from './prestamos-detalle.page';

describe('PrestamosDetallePage', () => {
  let component: PrestamosDetallePage;
  let fixture: ComponentFixture<PrestamosDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
